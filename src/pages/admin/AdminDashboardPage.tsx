import { useEffect, useState } from 'react';
import { getAdminDashboard, type AdminDashboard } from '../../lib/api/admin';

export function AdminDashboardPage() {
  const [dashboard, setDashboard] = useState<AdminDashboard | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    void getAdminDashboard().then(data => {
      if (active) setDashboard(data);
    }).catch(reason => {
      if (active) setError(reason instanceof Error ? reason.message : 'Unable to load dashboard.');
    });
    return () => { active = false; };
  }, []);

  return (
    <section aria-labelledby="admin-dashboard-heading">
      <p className="eyebrow">Overview</p>
      <h1 id="admin-dashboard-heading">Dashboard</h1>
      {error && <p className="error-message" role="alert">{error}</p>}
      {!dashboard && !error && <p aria-live="polite">Loading dashboard…</p>}
      {dashboard && (
        <>
          <div className="admin-stat-grid">
            <article className="admin-stat"><span>Total users</span><strong>{dashboard.totalUsers}</strong></article>
            <article className="admin-stat"><span>Incomplete profiles</span><strong>{dashboard.incompleteProfiles}</strong></article>
            {dashboard.assessmentsByStatus.map(row => (
              <article className="admin-stat" key={row.label}><span>{row.label} assessments</span><strong>{row.count}</strong></article>
            ))}
          </div>
          <div className="admin-dashboard-grid">
            <CountList title="Users by year" rows={dashboard.usersByYear} />
            <CountList title="Users by language" rows={dashboard.usersByLanguage} />
          </div>
          <section className="admin-panel" aria-labelledby="recent-signins-heading">
            <h2 id="recent-signins-heading">Last 10 sign-ins</h2>
            {dashboard.lastSignIns.length ? (
              <div className="table-scroll"><table>
                <thead><tr><th>Name</th><th>Email</th><th>Last sign-in</th></tr></thead>
                <tbody>{dashboard.lastSignIns.map(user => (
                  <tr key={user.id}>
                    <td>{[user.first_name, user.last_name].filter(Boolean).join(' ') || 'Profile incomplete'}</td>
                    <td>{user.email}</td>
                    <td>{user.last_login_at ? new Date(user.last_login_at).toLocaleString() : '—'}</td>
                  </tr>
                ))}</tbody>
              </table></div>
            ) : <p>No sign-ins have been recorded yet.</p>}
          </section>
        </>
      )}
    </section>
  );
}

function CountList({ title, rows }: { title: string; rows: { label: string; count: number }[] }) {
  return (
    <section className="admin-panel">
      <h2>{title}</h2>
      {rows.length ? <ul className="count-list">
        {rows.map(row => <li key={row.label}><span>{row.label}</span><strong>{row.count}</strong></li>)}
      </ul> : <p>No data yet.</p>}
    </section>
  );
}
