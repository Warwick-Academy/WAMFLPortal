import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../lib/auth/AuthProvider';

export function AuthCallbackPage() {
  const { session, profile, loading, error } = useAuth();
  const location = useLocation();
  const returnTo = new URLSearchParams(location.search).get('returnTo');
  const destination = returnTo?.startsWith('/') && !returnTo.startsWith('//') ? returnTo : '/';

  if (loading) return <main className="page-shell" aria-live="polite">Finishing sign-in…</main>;
  if (!session || error) return <Navigate to="/login" replace />;
  if (!profile?.profile_completed) return <Navigate to="/onboarding" replace state={{ from: destination }} />;
  return <Navigate to={destination} replace />;
}
