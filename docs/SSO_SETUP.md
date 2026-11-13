# Microsoft SSO setup

The portal accepts accounts ending in `@warwick.bm`. The database migration enforces this domain at `auth.users` insertion and creates each profile automatically. The configured Supabase project URL is `https://uobxwbhhdqdeoteukfvp.supabase.co`. Do not put an Azure client secret or Supabase service-role key in the browser app.

## 1. Register the application in Microsoft Entra

1. Open the **Microsoft Entra admin center**.
2. Go to **Identity → Applications → App registrations → New registration**.
3. Enter a name such as **Warwick Academy MFL Portal**.
4. Under **Supported account types**, choose **Accounts in this organizational directory only (Warwick Academy only - Single tenant)**.
5. Under **Redirect URI**, choose **Web** and enter `https://uobxwbhhdqdeoteukfvp.supabase.co/auth/v1/callback`.
6. Select **Register**.

## 2. Record the application credentials

1. On the app **Overview** page, record **Directory (tenant) ID** and **Application (client) ID**.
2. Go to **Certificates & secrets → Client secrets → New client secret**.
3. Set a description and expiry, then select **Add**.
4. Copy the secret value immediately into the school's approved password manager. It is not shown again.

## 3. Configure delegated permissions and email claim

1. Go to **API permissions → Add a permission → Microsoft Graph → Delegated permissions**.
2. Add `openid`, `email`, and `profile` if they are not already listed.
3. Select **Grant admin consent for Warwick Academy** and confirm.
4. Go to **Token configuration → Add optional claim → ID**.
5. Select the `email` claim and save. Confirm a test ID token contains the school email address.

## 4. Configure Supabase Azure provider

1. Open the Supabase project and go to **Authentication → Sign In / Providers → Azure**.
2. Enable the Azure provider.
3. Paste the Entra **Application (client) ID** and client secret.
4. Set the **Azure Tenant URL** to `https://login.microsoftonline.com/<tenant-id>`.
5. Save changes. The redirect URI displayed by Supabase must match the URI registered in Entra.

## 5. Configure Supabase redirect URLs

1. In Supabase, go to **Authentication → URL Configuration**.
2. Confirm the project URL is `https://uobxwbhhdqdeoteukfvp.supabase.co` and set **Site URL** to `https://wamflportal.netlify.app`.
3. Add `http://localhost:5173/**` under **Redirect URLs**.
4. Add the Netlify deploy-preview pattern used by the school site, for example `https://deploy-preview-*-wamflportal.netlify.app/**`. Confirm the exact preview hostname format in Netlify.

## 6. Configure Netlify environment variables

1. Open the Netlify site and go to **Site configuration → Environment variables**.
2. Add `VITE_SUPABASE_URL` with the Supabase project URL.
3. Add `VITE_SUPABASE_ANON_KEY` with the project's publishable anon key.
4. Redeploy after setting the variables.

These are the only Supabase variables exposed to the client. Never use a service-role key as a `VITE_` variable.

## 7. Apply the database migration and add the first admin

1. In Supabase, open **SQL Editor** and run the migration in `supabase/migrations/`.
2. In that migration, replace `REPLACE_ME@warwick.bm` with the initial teacher-admin account before running it.
3. In Supabase **Authentication → URL Configuration**, verify the callback and app redirect URLs are correct.
4. Sign in once with the allowlisted teacher account. The profile trigger assigns the `teacher_admin` role.
5. Verify the dashboard can read `profiles`, `admin_allowlist`, and `audit_log` before inviting students.
6. Review the content import plan with `npm run import:legacy -- --dry-run`. To import, set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in the local shell using the school's approved secret storage, then run `npm run import:legacy`. The script updates matching assessments by key, replaces their sections and prompts, and publishes them; review the target project before rerunning it. Never commit the service-role key or include it in client-side environment variables.

The project URL is prefilled in `.env.example`. The anon key, Microsoft Entra credentials, and service-role key must be supplied by an authorized project administrator; they are not included in this repository. No migration or live import is performed by this setup guide.

## Student responses

Existing practice answers stay in each browser's local storage and are downloaded by students; the migration deliberately does not create a server-side `responses` table. Keep the current site available until the new app is deployed and verified.
