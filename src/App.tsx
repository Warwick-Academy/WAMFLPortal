import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { RequireAdmin, RequireAuth, RequireProfile } from './components/RouteGuards';
import { AuthProvider } from './lib/auth/AuthProvider';
import { AuthCallbackPage } from './pages/AuthCallbackPage';
import { AdminPage } from './pages/AdminPage';
import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';
import {
  AssessmentPage,
  AssessmentsPage,
  StudentCatalogProvider,
  StudentHomePage,
  StudentLayout,
  YearGroupsPage,
} from './pages/StudentPages';
import './styles.css';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/auth/callback" element={<AuthCallbackPage />} />
          <Route element={<RequireAuth />}>
            <Route path="/onboarding" element={<ProfilePage onboarding />} />
            <Route element={<RequireProfile />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route element={<RequireAdmin />}>
                <Route path="/admin/*" element={<AdminPage />} />
              </Route>
              <Route element={<StudentCatalogProvider />}>
                <Route element={<StudentLayout />}>
                  <Route path="/" element={<StudentHomePage />} />
                  <Route path="/language/:languageId" element={<YearGroupsPage />} />
                  <Route path="/language/:languageId/year/:yearGroupId" element={<AssessmentsPage />} />
                  <Route path="/assessment/:assessmentId" element={<AssessmentPage />} />
                </Route>
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
