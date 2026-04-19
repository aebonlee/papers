import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import getSupabase, { setSharedSession, getSharedSession, clearSharedSession } from '../utils/supabase';
import { getProfile, updateProfile, signOut as authSignOut } from '../utils/auth';
import { ADMIN_EMAILS } from '../config/admin';
import { useIdleTimeout } from '../hooks/useIdleTimeout';
import ProfileCompleteModal from '../components/ProfileCompleteModal';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [accountBlock, setAccountBlock] = useState(null);

  const loadProfile = useCallback(async (authUser) => {
    if (!authUser) {
      setProfile(null);
      return;
    }
    let p = await getProfile(authUser.id);
    // 프로필 미존재 시 자동 생성 (OAuth 첫 로그인 등)
    if (!p) {
      const client = getSupabase();
      if (client) {
        const meta = authUser.user_metadata || {};
        const currentDomain = window.location.hostname;
        const { data } = await client.from('user_profiles').insert({
          id: authUser.id,
          email: authUser.email || '',
          name: meta.full_name || meta.name || '',
          display_name: meta.full_name || meta.name || '',
          phone: '',
          provider: authUser.app_metadata?.provider || 'email',
          signup_domain: currentDomain,
          visited_sites: [currentDomain],
          role: 'member',
        }).select().single();
        if (data) p = data;
      }
    }
    // signup_domain 또는 role이 미설정이면 자동 초기화
    if (p) {
      const updates = {};
      const currentDomain = window.location.hostname;
      if (!(p as any).signup_domain) (updates as any).signup_domain = currentDomain;
      // 현재 도메인이 visited_sites에 없으면 자동 추가
      const sites = Array.isArray((p as any).visited_sites) ? (p as any).visited_sites : [];
      if (!sites.includes(currentDomain)) {
        (updates as any).visited_sites = [...sites, currentDomain];
      }
      if (!(p as any).role || (p as any).role === 'user') (updates as any).role = 'member';
      if (Object.keys(updates).length > 0) {
        try {
          const updated = await updateProfile(authUser.id, updates);
          setProfile(updated);
        } catch {
          setProfile(p);
        }
      } else {
        setProfile(p);
      }
    }

    // 계정 상태 체크
    try {
      const client = getSupabase();
      if (client) {
        const { data: statusData } = await client.rpc('check_user_status', {
          target_user_id: authUser.id,
          current_domain: window.location.hostname,
        });
        if (statusData && statusData.status && statusData.status !== 'active') {
          setAccountBlock({
            status: statusData.status,
            reason: statusData.reason || '',
            suspended_until: statusData.suspended_until || null,
          });
          await authSignOut();
          setUser(null);
          setProfile(null);
          return;
        }
      }
    } catch {
      // check_user_status 함수 미존재 시 무시
    }
  }, []);

  useEffect(() => {
    const client = getSupabase();
    if (!client) {
      setLoading(false);
      return;
    }

    // onAuthStateChange 하나로 통합 — INITIAL_SESSION은 OAuth 코드 교환 완료 후 발생
    const { data: { subscription } } = client.auth.onAuthStateChange(async (event, session) => {
      const u = session?.user ?? null;
      setUser(u);
      if (u) {
        loadProfile(u);
        // 실제 로그인 시에만 last_sign_in_at 갱신
        if (event === 'SIGNED_IN') {
          client.from('user_profiles')
            .update({ last_sign_in_at: new Date().toISOString() })
            .eq('id', u.id)
            .then(() => {});
        }
      } else {
        setProfile(null);
      }
      // SSO: INITIAL_SESSION에서 세션 없으면 공유 쿠키로 복원
      if (event === 'INITIAL_SESSION') {
        if (!session) {
          const rt = getSharedSession();
          if (rt) {
            try {
              const { data } = await client.auth.refreshSession({ refresh_token: rt });
              if (!data.session) clearSharedSession();
            } catch { clearSharedSession(); }
          }
        }
        setLoading(false);
      }

      // SSO: 쿠키 동기화
      if (session?.refresh_token) setSharedSession(session.refresh_token);
      if (event === 'SIGNED_OUT') clearSharedSession();
    });

    // 안전장치: INITIAL_SESSION이 5초 내 안 오면 loading 해제
    const fallbackTimer = setTimeout(() => {
      setLoading((prev) => {
        if (prev) console.warn('Auth: INITIAL_SESSION timeout, forcing loading=false');
        return false;
      });
    }, 5000);

    return () => {
      clearTimeout(fallbackTimer);
      subscription.unsubscribe();
    };
  }, [loadProfile]);

  const signOut = useCallback(async () => {
    await authSignOut();
    setUser(null);
    setProfile(null);
  }, []);

  const refreshProfile = useCallback(async () => {
    if (user) await loadProfile(user);
  }, [user, loadProfile]);

  const allEmails = [
    user?.email,
    (user?.user_metadata as any)?.email,
    user?.identities?.[0]?.identity_data?.email,
    profile?.email,
  ].filter(Boolean).map((e) => e.toLowerCase());
  const isAdmin = allEmails.some((e) => ADMIN_EMAILS.includes(e));
  const isLoggedIn = !!user;
  const needsProfileCompletion = isLoggedIn && !!profile && !profile.name;


  // 10분 무동작 세션 타임아웃
  useIdleTimeout({
  enabled: isLoggedIn,
  onTimeout: () => {
  authSignOut().catch(() => {});
  clearSharedSession();
  },
  });

  return (
    <AuthContext.Provider value={{
      user,
      profile,
      loading,
      isLoggedIn,
      isAdmin,
      signOut,
      refreshProfile,
      accountBlock,
      clearAccountBlock: () => setAccountBlock(null),
    }}>
      {children}
      {needsProfileCompletion && user && (
        <ProfileCompleteModal user={user} onComplete={refreshProfile} />
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
