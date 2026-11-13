# Atelier Oral — IT handover

This repository contains the self-hostable source and asset snapshot for the published ChatGPT Sites release 54, plus a separate React portal under active development. The original static French and Spanish practice site remains in `dist/`; the portal source is at the repository root and builds to `app-dist/`. Netlify still publishes `dist/`, so the portal is not live until deployment is deliberately switched.

The portal adds Microsoft sign-in, Supabase-backed profiles and assessment content, student browsing, and teacher administration. See [docs/SSO_SETUP.md](docs/SSO_SETUP.md) and [docs/ADMIN_GUIDE.md](docs/ADMIN_GUIDE.md). Student practice responses currently remain in browser-local storage.

## What to open

- `dist/index.html` is the website entry point. `dist/` is the complete web root, including all images, fonts and the PDF library.
- `FILES.md` contains the complete ZIP folder tree and byte-level SHA-256 manifest of the original project files included.
- `SOURCE-CODE.md` contains every original text source file in its own unabridged code block, labelled with the exact project-relative path. The ZIP also contains those files directly and the original binary assets.
- The root `.gitignore` is included for version control. The ChatGPT Sites-only manifest `.openai/hosting.json` is excluded because it identifies the original hosted project. Its portable setting was `static.directory = dist`. There are no other tracked project files outside the archive. Git history, repository credentials, account metadata and browser data are excluded.
- The school name and logo and the classroom label “Mme Neill” are part of the existing site content and are preserved.

## Run locally

### Original static site

1. Extract the ZIP to a new folder. Open a terminal in the extracted `atelier-oral-handover` folder, where `dist/` and this README sit.
2. If Python 3 is installed, run:

   ```sh
   python3 -m http.server --bind 127.0.0.1 --directory dist 8000
   ```

   On Windows with the Python launcher, use `py -3 -m http.server --bind 127.0.0.1 --directory dist 8000`.
3. Open `http://127.0.0.1:8000/` in a current browser. Keep the terminal open while you test. Press Ctrl+C to stop the preview.
4. Use the HTTP URL for testing. Opening the HTML directly as a local file can affect frame loading, browser storage and the PDF module.

### React portal

1. Install Node.js, then run `npm ci` from this repository root.
2. Copy `.env.example` to `.env.local` and set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. Never put a Supabase service-role key in a `VITE_` variable.
3. Run `npm run dev` and open the local address printed by Vite.
4. Run `npm test` for unit tests and `npm run build` for a production build. The build is written to `app-dist/` and does not replace the legacy `dist/`.

## Deploy on the school server

1. Choose a school hostname or a subdirectory of an existing school site. Copy everything **inside `dist/`**, preserving the directory structure and case, into the chosen static document root or subdirectory. Keep the handover documents outside the public web root.
2. Configure the web server to serve `index.html` as the directory index. Serve `.mjs` as JavaScript (`text/javascript` or `application/javascript`). Keep the usual MIME mappings for HTML, CSS, JS, PNG, WebP, SVG and WOFF. The app uses relative paths and does not need application routing or an SPA rewrite.
3. Use the school’s normal DNS and HTTPS setup. The pages use same-origin frames, including `srcdoc`, some inline JavaScript and CSS, a locally loaded ES module, and browser-generated downloads. If the school applies a Content Security Policy or download restrictions, test those features under the actual policy.
4. Verify the deployment on a device students will use. Run the checks below on the school URL.
5. For ongoing edits, put this source snapshot into a school-owned Git repository if desired. Update `dist/` and redeploy that directory. School repository access and school hosting access are configured by IT independently.

The current live copy is hosted on ChatGPT Sites at https://atelier-oral.amelianeill.chatgpt.site/. Its hosted source is versioned in Git and deployed as static files. The school copy runs independently and does not need a ChatGPT account or the original Sites project.

## Dependencies and settings

| Item | What the site uses |
| --- | --- |
| Languages | HTML5, CSS and modern JavaScript. Uses ES modules and dynamic import, with ES2021-era syntax in parts of the app. No separate JavaScript runtime is installed on the server. |
| Browser | A current browser with same-origin iframes, localStorage, Blob downloads and Web Speech synthesis. French and Spanish playback depend on the voices available to the browser and device. |
| PDF export | `dist/vendor/pdf-lib.mjs` is the exact vendored build used on the live site. Its upstream version is not recorded in the checked-in files. Its license is included and the exact file is identified by SHA-256 in `FILES.md`. |
| Fonts | System UI fonts and the bundled DejaVu Sans regular and bold WOFF files (version 2.37), with their license. |
| Server | Any ordinary static HTTP server. Python 3 is only an option for local preview. No package manager, build step, lockfile, or requirements file is needed. |
| Outside services | No application calls to a database, email, login, analytics, CDN, or pronunciation API were found in the source. The IB support content includes a link to ADEME. Speech synthesis uses the browser/OS voice implementation, which can vary by device. |
| Required settings | Static document root or subdirectory, index document and MIME mappings. DNS and TLS are school infrastructure settings when using a school URL. |
| Environment variables, API keys and passwords | None required by the current application. The original Git and hosting accounts are unnecessary to run the school copy. |

## Data and migration

There is **no database**, SQL schema, server-side student account, or seed file to import. Questions, vocabulary and default examples are bundled in the application source. Student progress is browser-local JSON and is not included in this package.

| localStorage key(s) | Data |
| --- | --- |
| `atelier-y7-v1` | `data` form selections, `include8` question setting, `completed` progress. |
| `atelier-s7-v1` | `data` form selections and `completed` progress. |
| `atelier-y8-revision-v1`, `atelier-y8-spanish-v1` | Flat form selections and custom field values. |
| `atelier-y9-revision-v1` | Flat form selections and custom field values, including the `familyPeople` list. |
| `atelier-y10-oral-v1`, `atelier-y10-wellbeing-v1`, `atelier-y10-neighbourhood-v1`, `atelier-y10-media-v1`, `atelier-y10-studying-v1`, `atelier-y10-travel-v1` | One object per theme with selected question IDs, drafts keyed by question ID, name field, and the first-question variant when applicable. |
| `atelier-igcse-es-a1-v1`, `atelier-y12-styles-v1` | The same question/draft data model. Drafts can include `answer`, `revision`, `notes`, `cues`, `targets`, `review`, `checks`, and rehearsal progress. |

Storage belongs to the browser profile and web origin. A new hostname or protocol will start with fresh storage. The site has no automatic cross-origin migration or central progress recovery. Where available, have students download or print any work they want to retain from the old site before switching.

## Acceptance checks for IT

1. Open the landing page and choose each language. Confirm the school logo, background and year cards load.
2. Open French Year 9 Revision. Select two relatives, add a fictional custom relative and switch to Repeat and Guided. Confirm the choices appear, then reopen the activity in the same browser to confirm they were saved.
3. Open GCSE French General Conversation. Write a fictional answer, run a rehearsal step, then download the Bilan. Verify the file opens. The app offers a printable HTML download if its PDF font cannot encode the entered characters.
4. Open IB French B, then Identités and the Styles de vie activity. Confirm the question list and writing support appear. Open Spanish IGCSE A1 to check the writing and rehearsal activity there.
5. Play model audio in both languages. Test with the browser and voice settings that students will actually use.

## Known limits and unfinished sections

- Speaking audio is text-to-speech. The site does not record students or score pronunciation. A future scoring service would be a separate integration.
- There is no shared login, teacher dashboard or cross-device synchronisation.
- GCSE French Read Aloud, Photo Task and Role Plays are marked coming soon. GCSE French General Conversation is available.
- IB French B has all five topic menus, with Styles de vie available for practice. The other IB French B activities are marked À venir. Spanish IGCSE has topic and question menus, with full writing and rehearsal in A1. Some year and course tiles have no activities yet.
- The Warwick Academy images, logo and teaching materials are included as used in the current school site. Keep the supplied software and font licenses with the files.
