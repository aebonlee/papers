import getSupabase from './supabase';

// Supabase row(snake_case) → 컴포넌트 형식(camelCase) 변환
function normalizeApplication(row) {
  if (!row) return null;
  return {
    ...row,
    applicantEmail: row.applicant_email || '',
    applicantId: row.applicant_id || '',
    createdAt: row.created_at ? row.created_at.split('T')[0] : row.createdAt,
  };
}

// 컴포넌트 데이터 → Supabase insert용 변환
function toSupabaseRow(data) {
  return {
    name: data.name,
    major: data.major,
    topic: data.topic,
    schedule: data.schedule,
    message: data.message || '',
    applicant_id: data.applicant_id,
    applicant_email: data.applicant_email || '',
  };
}

const sampleApplications = [
  {
    id: '1',
    name: '김석사',
    major: '교육공학',
    topic: '온라인 학습 환경에서의 자기조절학습 전략 연구',
    schedule: '매주 화요일 오후 2시',
    message: '석사 2학기이며, 연구 주제를 구체화하고 싶습니다.',
    status: 'pending',
    applicantEmail: 'master@example.com',
    createdAt: '2026-03-01'
  },
  {
    id: '2',
    name: '이연구',
    major: '경영학',
    topic: 'ESG 경영이 기업 가치에 미치는 영향',
    schedule: '매주 목요일 오전 10시',
    message: '',
    status: 'reviewing',
    applicantEmail: 'research@example.com',
    createdAt: '2026-02-25'
  },
  {
    id: '3',
    name: '박논문',
    major: '간호학',
    topic: '중환자실 간호사의 소진 경험에 관한 현상학적 연구',
    schedule: '주말 오전',
    message: '질적 연구방법론에 대한 지도가 필요합니다.',
    status: 'accepted',
    applicantEmail: 'thesis@example.com',
    createdAt: '2026-02-20'
  },
];

export async function getApplications(filter = {}) {
  const supabase = getSupabase();
  if (supabase) {
    let query = supabase.from('pp_thesis_guidance_applications').select('*').order('created_at', { ascending: false });
    if (filter.status) query = query.eq('status', filter.status);
    const { data } = await query;
    return (data || []).map(normalizeApplication);
  }

  let result = [...sampleApplications];
  if (filter.status) result = result.filter(a => a.status === filter.status);
  return result;
}

export async function getApplicationById(id) {
  const supabase = getSupabase();
  if (supabase) {
    const { data } = await supabase.from('pp_thesis_guidance_applications').select('*').eq('id', id).single();
    return normalizeApplication(data);
  }
  return sampleApplications.find(a => a.id === id) || null;
}

export async function createApplication(data) {
  const supabase = getSupabase();
  if (supabase) {
    const row = toSupabaseRow(data);
    const { data: result, error } = await supabase.from('pp_thesis_guidance_applications').insert(row).select().single();
    if (error) throw error;
    return normalizeApplication(result);
  }
  const newApp = { ...data, id: String(Date.now()), status: 'pending', createdAt: new Date().toISOString().split('T')[0] };
  sampleApplications.unshift(newApp);
  return newApp;
}

export async function updateApplication(id, updates) {
  const supabase = getSupabase();
  if (supabase) {
    const row = {};
    if (updates.name !== undefined) row.name = updates.name;
    if (updates.major !== undefined) row.major = updates.major;
    if (updates.topic !== undefined) row.topic = updates.topic;
    if (updates.schedule !== undefined) row.schedule = updates.schedule;
    if (updates.message !== undefined) row.message = updates.message;
    if (updates.status !== undefined) row.status = updates.status;
    const { data, error } = await supabase.from('pp_thesis_guidance_applications').update(row).eq('id', id).select().single();
    if (error) throw error;
    return normalizeApplication(data);
  }
  const idx = sampleApplications.findIndex(a => a.id === id);
  if (idx !== -1) {
    sampleApplications[idx] = { ...sampleApplications[idx], ...updates };
    return sampleApplications[idx];
  }
  return null;
}

export async function deleteApplication(id) {
  const supabase = getSupabase();
  if (supabase) {
    const { error } = await supabase.from('pp_thesis_guidance_applications').delete().eq('id', id);
    if (error) throw error;
    return true;
  }
  const idx = sampleApplications.findIndex(a => a.id === id);
  if (idx !== -1) sampleApplications.splice(idx, 1);
  return true;
}

export async function getApplicationsCount() {
  const supabase = getSupabase();
  if (supabase) {
    const { count } = await supabase.from('pp_thesis_guidance_applications').select('*', { count: 'exact', head: true });
    return count || 0;
  }
  return sampleApplications.length;
}
