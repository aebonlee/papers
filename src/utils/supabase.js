import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/* ── SSO 크로스도메인 쿠키 헬퍼 ── */
const SSO_KEY = 'dreamit_sso';
const _isLocal = typeof window !== 'undefined' &&
  (location.hostname === 'localhost' || location.hostname === '127.0.0.1');
const _cookieDomain = _isLocal ? '' : ';domain=.dreamitbiz.com';

export function setSharedSession(rt) {
  document.cookie = `${SSO_KEY}=${rt}${_cookieDomain};path=/;max-age=2592000;SameSite=Lax${_isLocal ? '' : ';Secure'}`;
}
export function getSharedSession() {
  const m = document.cookie.match(/(^| )dreamit_sso=([^;]+)/);
  return m ? m[2] : null;
}
export function clearSharedSession() {
  document.cookie = `${SSO_KEY}=${_cookieDomain};path=/;max-age=0`;
}

// Supabase client - initialized only when env vars are set
let supabase = null;
let _memoryOrders = [];

const getSupabase = () => {
  if (!supabase && supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        flowType: 'pkce',
        detectSessionInUrl: true,
        autoRefreshToken: true,
        persistSession: true,
      }
    });
  }
  return supabase;
};

/**
 * Create an order with order items
 * Falls back to in-memory store when Supabase is not configured
 */
export const createOrder = async (orderData) => {
  const client = getSupabase();

  if (!client) {
    const order = {
      id: crypto.randomUUID(),
      ...orderData,
      payment_status: 'pending',
      created_at: new Date().toISOString()
    };
    _memoryOrders.push(order);
    return order;
  }

  // Insert order (bare INSERT — no .select().single())
  const orderPayload = {
    order_number: orderData.order_number,
    user_email: orderData.user_email,
    user_name: orderData.user_name,
    user_phone: orderData.user_phone,
    total_amount: orderData.total_amount,
    payment_method: orderData.payment_method
  };

  const { error: orderError } = await client
    .from('pp_orders')
    .insert(orderPayload);

  if (orderError) throw orderError;

  // Insert order items (wrapped in try-catch so it doesn't block payment)
  if (orderData.items && orderData.items.length > 0) {
    try {
      await client
        .from('pp_order_items')
        .insert(
          orderData.items.map(item => ({
            order_id: orderData.order_number,
            product_title: item.product_title,
            quantity: item.quantity,
            unit_price: item.unit_price,
            subtotal: item.subtotal
          }))
        );
    } catch (itemErr) {
      console.warn('order_items INSERT failed (non-blocking):', itemErr);
    }
  }

  return { id: orderData.order_number, order_number: orderData.order_number };
};

/**
 * Get order by order number
 * Falls back to in-memory store when Supabase is not configured
 */
export const getOrderByNumber = async (orderNumber) => {
  const client = getSupabase();

  if (!client) {
    return _memoryOrders.find(o => o.order_number === orderNumber) || null;
  }

  const { data: orders, error } = await client
    .from('pp_orders')
    .select('*')
    .eq('order_number', orderNumber)
    .limit(1);

  if (error) throw error;
  if (!orders || orders.length === 0) return null;

  const order = orders[0];

  // Fetch order items
  const { data: items } = await client
    .from('pp_order_items')
    .select('*')
    .eq('order_id', order.id);

  return { ...order, items: items || [] };
};

/**
 * Update order payment status
 * @param {string} orderId
 * @param {string} status - 'pending' | 'paid' | 'failed' | 'cancelled' | 'refunded'
 * @param {string} [paymentId] - portone payment ID
 * @param {string} [cancelReason] - reason for cancellation
 */
export const updateOrderStatus = async (orderId, status, paymentId, cancelReason) => {
  const client = getSupabase();

  if (!client) {
    const idx = _memoryOrders.findIndex(o => o.id === orderId || o.order_number === orderId);
    if (idx >= 0) {
      _memoryOrders[idx].payment_status = status;
      if (paymentId) _memoryOrders[idx].portone_payment_id = paymentId;
      if (status === 'paid') _memoryOrders[idx].paid_at = new Date().toISOString();
      if (status === 'cancelled') {
        _memoryOrders[idx].cancelled_at = new Date().toISOString();
        if (cancelReason) _memoryOrders[idx].cancel_reason = cancelReason;
      }
    }
    return _memoryOrders[idx];
  }

  const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-/.test(orderId);
  const filterCol = isUUID ? 'id' : 'order_number';

  const updatePayload = { payment_status: status };
  if (status === 'paid') updatePayload.paid_at = new Date().toISOString();
  if (status === 'cancelled') {
    updatePayload.cancelled_at = new Date().toISOString();
    if (cancelReason) updatePayload.cancel_reason = cancelReason;
  }

  // Build full payload with optional columns (may not exist in DB yet)
  const extras = {};
  if (paymentId) extras.portone_payment_id = paymentId;

  let result = null;

  try {
    const { data, error } = await client
      .from('pp_orders')
      .update({ ...updatePayload, ...extras })
      .eq(filterCol, orderId)
      .select();

    if (error) throw error;
    result = data;
  } catch {
    // Fallback: update without optional columns
    try {
      const { data, error } = await client
        .from('pp_orders')
        .update(updatePayload)
        .eq(filterCol, orderId)
        .select();

      if (error) throw error;
      result = data;
    } catch (e2) {
      console.warn('updateOrderStatus failed:', e2);
      return null;
    }
  }

  if (!result || result.length === 0) {
    console.warn('updateOrderStatus: no rows updated for', orderId);
    return null;
  }

  return result[0];
};

/**
 * Verify payment via Edge Function
 */
export const verifyPayment = async (paymentId, orderId) => {
  const client = getSupabase();
  if (!client) {
    // Fallback: auto-approve for dev/demo
    await updateOrderStatus(orderId, 'paid', paymentId);
    return { verified: true };
  }

  const { data, error } = await client.functions.invoke('verify-payment', {
    body: { paymentId, orderId }
  });

  if (error) throw error;
  return data;
};

/**
 * Get orders by user ID
 */
export const getOrdersByUser = async (userId) => {
  const client = getSupabase();
  if (!client) return [];

  const { data, error } = await client
    .from('pp_orders')
    .select('*, pp_order_items(*)')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('getOrdersByUser error:', error);
    return [];
  }
  return data || [];
};

export default getSupabase;
