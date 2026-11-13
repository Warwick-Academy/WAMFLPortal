import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../lib/auth/AuthProvider';

function LoadingPage() {
  return <main className="page-shell" aria-live="polite">Loading your account…</main>;
}

export function RequireAuth() {
  const { session, loading, error, signOut } = useAuth();
  const location = useLocation();
  if (loading) return <LoadingPage />;
  if (session && error) {
    return (
      <main className="page-shell">
        <p className="error-message" role="alert">{error}</p>
        <button className="primary-button" type="button" onClick={() => void signOut()}>Sign out</button>
      </main>
    );
  }
  if (!session) return <Navigate to="/login" state={{ from: location }} replace />;
  return <Outlet />;
}

export function RequireProfile() {
  const { profile, loading } = useAuth();
  const location = useLocation();
  if (loading) return <LoadingPage />;
  if (!profile?.profile_completed && location.pathname !== '/onboarding') {
    return <Navigate to="/onboarding" state={{ from: location }} replace />;
  }
  return <Outlet />;
}

export function RequireAdmin() {
  const { role, loading } = useAuth();
  if (loading) return <LoadingPage />;
  if (role !== 'teacher_admin') return <Navigate to="/" replace />;
  return <Outlet />;
}
