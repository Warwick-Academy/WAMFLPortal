import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { Session, User } from '@supabase/supabase-js';
import type { Database, ProfileRole } from '../database.types';
import { isWarwickEmail } from './email';
import { supabase, supabaseConfigurationError } from '../supabase';

type Profile = Database['public']['Tables']['profiles']['Row'];

interface AuthContextValue {
  session: Session | null;
  user: User | null;
  profile: Profile | null;
  role: ProfileRole | null;
  loading: boolean;
  error: string | null;
  clearError: () => void;
  refreshProfile: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const syncSession = useCallback(async (nextSession: Session | null) => {
    if (!supabase) throw new Error(supabaseConfigurationError);
    setSession(nextSession);
    if (!nextSession) {
      setProfile(null);
      setLoading(false);
      return;
    }

    if (!isWarwickEmail(nextSession.user.email)) {
      const { error: signOutError } = await supabase.auth.signOut();
      setProfile(null);
      setLoading(false);
      setError(signOutError
        ? `Please sign in with your Warwick Academy (@warwick.bm) account. Sign-out also failed: ${signOutError.message}`
        : 'Please sign in with your Warwick Academy (@warwick.bm) account.');
      return;
    }

    const { data, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', nextSession.user.id)
      .maybeSingle();
    if (profileError) throw profileError;
    if (!data) throw new Error('Your account profile could not be found. Please contact a teacher.');
    setProfile(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!supabase) {
      setError(supabaseConfigurationError);
      setLoading(false);
      return;
    }

    let active = true;
    const handleError = (reason: unknown) => {
      if (!active) return;
      setProfile(null);
      setLoading(false);
      setError(reason instanceof Error ? reason.message : 'Unable to load your account. Please try again.');
    };
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      queueMicrotask(() => {
        if (active) void syncSession(nextSession).catch(handleError);
      });
    });

    void supabase.auth.getSession().then(({ data, error: sessionError }) => {
      if (sessionError) throw sessionError;
      if (active) return syncSession(data.session);
    }).catch(handleError);

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, [syncSession]);

  const clearError = useCallback(() => setError(null), []);
  const refreshProfile = useCallback(async () => {
    if (!session) return;
    try {
      await syncSession(session);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to refresh your account profile.');
      throw reason;
    }
  }, [session, syncSession]);
  const signOut = useCallback(async () => {
    if (!supabase) throw new Error(supabaseConfigurationError);
    const { error: signOutError } = await supabase.auth.signOut();
    if (signOutError) throw signOutError;
    setSession(null);
    setProfile(null);
  }, []);

  const value = useMemo<AuthContextValue>(() => ({
    session,
    user: session?.user ?? null,
    profile,
    role: profile?.role ?? null,
    loading,
    error,
    clearError,
    refreshProfile,
    signOut,
  }), [session, profile, loading, error, clearError, refreshProfile, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider.');
  return context;
}
