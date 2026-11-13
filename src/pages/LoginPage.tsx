import { useState, type FormEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../lib/auth/AuthProvider';
import { supabase, supabaseConfigurationError } from '../lib/supabase';
import schoolLogoUrl from '../../dist/assets/warwick-academy-logo.png';

export function LoginPage() {
  const { error: authError, clearError } = useAuth();
  const location = useLocation();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clearError();
    setError(null);
    if (!supabase) {
      setError(supabaseConfigurationError);
      return;
    }

    const state = location.state as { from?: { pathname?: string; search?: string; hash?: string } } | null;
    const destination = state?.from?.pathname
      ? `${state.from.pathname}${state.from.search ?? ''}${state.from.hash ?? ''}`
      : '/';
    const callback = new URL('/auth/callback', window.location.origin);
    callback.searchParams.set('returnTo', destination);

    setPending(true);
    try {
      const { error: signInError } = await supabase.auth.signInWithOAuth({
        provider: 'azure',
        options: {
          scopes: 'email profile openid',
          redirectTo: callback.toString(),
        },
      });
      if (signInError) throw signInError;
    } catch (reason) {
      setError(`Microsoft sign-in failed: ${reason instanceof Error ? reason.message : 'Please try again.'}`);
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="page-shell auth-layout">
      <section className="auth-card" aria-labelledby="login-heading">
        <img className="school-logo" src={schoolLogoUrl} alt="Warwick Academy" />
        <p className="eyebrow">MFL Department</p>
        <h1 id="login-heading">Welcome to Atelier Oral</h1>
        <p>Sign in with your Warwick Academy account to continue.</p>
        {(error || authError) && <p className="error-message" role="alert">{error ?? authError}</p>}
        <form onSubmit={signIn}>
          <button className="primary-button microsoft-button" type="submit" disabled={pending}>
            {pending ? 'Connecting to Microsoft…' : 'Sign in with Microsoft'}
          </button>
        </form>
        <p className="privacy-note">Use your school account ending in @warwick.bm.</p>
      </section>
    </main>
  );
}
