# Makkal Valimai / மக்கள் வலிமை — Angular 20 frontend

**Dynamic API-backed newsroom frontend, matching the approved blue/red design. Backend untouched.**

This package contains the editable Angular **source**, not compiled `out-tsc/*.js` or `dist/` output. It is a frontend-only refactor based on the Angular ZIP supplied earlier. Published news, images, issues, alerts, poll results, advertisements and audio come from the existing Node.js + MongoDB endpoints. No demonstration posts, fabricated votes, test advertisements, demo credentials or browser-local content publishing are included.

## Start on Windows

Use Node.js 22 and open the directory containing `package.json` in VS Code.

```powershell
npm ci
npm run verify:structure
npm run check
npm run check:templates
npm start
```

Open http://localhost:4200 and keep your **existing** backend running at http://localhost:5000. The development frontend API origin is in `src/environments/environment.ts` (`http://localhost:5000/api`). Do not alter your backend.

Optional live read-only endpoint check (backend must be running):

```powershell
npm run verify:api
```

## Production deployment

`npm run build` uses `src/environments/environment.production.ts`. Its default `apiBaseUrl` is `/api`, meaning your frontend hosting platform must proxy `/api/*` to the **unchanged** Node.js backend. Alternatively change that one frontend setting to your real HTTPS backend URL before building, provided your existing backend permits the frontend origin and authenticated cookies. No backend URL was supplied, so no production domain is invented.

Configure SPA fallback so `/news/:slug` and `/admin/*` serve `index.html` on refresh. Keep the original logo in `src/assets/images/makkal-valimai-logo.png`. Use HTTPS for admin sessions and microphone permission. **Do not deploy based on compiler checks alone**—test against the deployed backend, CORS/cookies and a running browser.

## Source organization

- `src/app/pages/home/` contains standalone features (`featured-news`, `category-news`, `issues-polls`, `alerts-audio`, `sidebar-ad`, `top-ad`, `quick-access`) and a thin composer page.
- `src/app/pages/` contains separate pages for each news type, full article, search, issues, alerts, polls, gallery and about.
- `src/app/shared/` has standalone public shell, header, footer, mobile bottom navigation, alerts ticker, story card, poll, audio player and recorder.
- `src/app/admin/` has separate editor, reports, polls, ads, alerts, audio, appearance, dashboard, categories and login.
- Each component owns its four files: `*.component.ts`, `*.component.html`, `*.component.css`, `*.component.responsive.css`.
- `src/styles/tokens.css` owns the approved **medium-blue / red** visual tokens. Mobile uses its own app-style bottom navigation and section-responsive CSS.
- `src/app/services/content.service.ts` holds the live **public API snapshot** and refreshes while active. `news-api.service.ts` handles direct public/admin HTTP requests; `media.service.ts` resolves backend-issued URLs.

## What works with the existing API contract

Public bootstrap, published stories, `/news/:slug`, category/date/area listing with load-more, civic reports, approved and solved issues, published alerts, poll voting, banners/sidebar/popup ads, public settings, audio URLs; authenticated admin login and article/issue/poll/alert/ad/settings operations through their existing routes.

Only the visitor's preferences (language, text size, dismissed hint, read-alert markers and voted-UI state) may use browser storage. **No published content or votes are created in localStorage.** The server remains authoritative.

## Unchanged-backend limitations (do not misrepresent these as complete)

1. The available backend archive has a fixed seven-value `News.kind` enum, not category CRUD endpoints. `Admin → Categories` therefore shows supported categories read-only, and article editor offers exactly those supported kinds. Creating categories requires backend support, which you explicitly declined.
2. It exposes ad positions **banner, sidebar, popup**, not a distinct footer position. The footer optionally reuses a *second* active banner; an independent managed footer slot is unavailable.
3. Its media middleware validates MP3 audio (plus supported images and MP4). Browsers typically record WebM/Opus, so the microphone control records, previews and downloads; to save to the existing backend, **convert to MP3 and upload using the supported file-upload field**. Do not attempt an unsupported WebM upload.
4. The backend has no full-text search endpoint. Search progressively scans published article pages, and clearly says how many were searched. It may require more pages to find older stories; it is not equivalent to server-indexed full-text search.
5. Public bootstrap returns the latest 100 articles. Individual articles are loaded directly by slug; section listing supports explicit page/date/area requests. Server-defined caps still apply.
6. Social sharing can copy a real article link, but reliable WhatsApp/Facebook preview cards require backend/hosting-generated Open Graph metadata or SSR. Angular client-side rendering alone cannot guarantee them.
7. There is no supplied backend API for editable About/Contact copy, so navigation labels, brand copy and About text remain frontend presentation copy rather than pretend MongoDB records.

**Validation in this environment:** 44 four-file components verified; TypeScript and Angular template checks pass. A complete Angular bundler run is blocked by the archive's cross-platform `esbuild` binary; browser/API integration with your running database was unavailable here. See `TESTING_CHECKLIST.md`.
