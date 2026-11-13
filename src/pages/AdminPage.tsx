import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/auth/AuthProvider';
import schoolLogoUrl from '../../dist/assets/warwick-academy-logo.png';
import { AdminUsersPage } from './admin/AdminUsersPage';
import { AdminAssessmentsPage } from './admin/AdminAssessmentsPage';
import { AdminLanguagesYearsPage } from './admin/AdminLanguagesYearsPage';
import { AdminAdminsPage } from './admin/AdminAdminsPage';
import { AdminAuditPage } from './admin/AdminAuditPage';
import { AdminDashboardPage } from './admin/AdminDashboardPage';

const navigation = [
  { path: '/admin/dashboard', label: 'Dashboard' },
  { path: '/admin/users', label: 'Users' },
  { path: '/admin/assessments', label: 'Assessments' },
  { path: '/admin/languages-years', label: 'Languages & Years' },
  { path: '/admin/admins', label: 'Admins' },
  { path: '/admin/audit-log', label: 'Audit Log' },
];

export function AdminPage() {
  const { pathname } = useLocation();
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();
  const [signOutError, setSignOutError] = useState<string | null>(null);
  const currentPath = pathname === '/admin' || pathname === '/admin/'
    ? '/admin/dashboard'
    : pathname;

  async function handleSignOut() {
    setSignOutError(null);
    try {
      await signOut();
      navigate('/login', { replace: true });
    } catch (reason) {
      setSignOutError(reason instanceof Error ? reason.message : 'Unable to sign out.');
    }
  }

  const page = currentPath === '/admin/users' ? <AdminUsersPage />
    : currentPath === '/admin/assessments' ? <AdminAssessmentsPage />
      : currentPath === '/admin/languages-years' ? <AdminLanguagesYearsPage />
        : currentPath === '/admin/admins' ? <AdminAdminsPage />
          : currentPath === '/admin/audit-log' ? <AdminAuditPage />
            : <AdminDashboardPage />;

  return (
    <div className="admin-app">
      <header className="admin-topbar">
        <Link to="/admin/dashboard" aria-label="Warwick Academy MFL admin home">
          <img className="school-logo" src={schoolLogoUrl} alt="Warwick Academy" />
        </Link>
        <div className="admin-user">
          <span>{profile?.first_name} {profile?.last_name}</span>
          <button type="button" onClick={() => void handleSignOut()}>Sign out</button>
        </div>
      </header>
      {signOutError && <p className="error-message admin-signout-error" role="alert">{signOutError}</p>}
      <div className="admin-shell">
        <nav className="admin-sidebar" aria-label="Admin navigation">
          <p className="eyebrow">MFL Administration</p>
          {navigation.map(item => (
            <Link key={item.path} to={item.path}
              className={currentPath === item.path ? 'active' : undefined}
              aria-current={currentPath === item.path ? 'page' : undefined}>
              {item.label}
            </Link>
          ))}
          <Link className="admin-return" to="/">← Student site</Link>
        </nav>
        <main className="admin-main">{page}</main>
      </div>
    </div>
  );
}
