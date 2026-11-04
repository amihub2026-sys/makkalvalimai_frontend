# Makkal Valimai deployment / acceptance checklist

Run `npm ci`, `npm run verify:structure`, `npm run check`, `npm run check:templates`, `npm run build` and `npm run verify:api` (last command requires the existing Node API to be running).

## Public / API flows (with live MongoDB records)

- [ ] Homepage publishes only real approved/current posts from MongoDB; empty DB shows no fabricated cards or numbers.
- [ ] Featured articles, category news cards, approved issues, solved issues, published alerts, real poll totals, ticker audio and advertisements populate from the API.
- [ ] News category pages fetch API results after initial page load; date + area filters and Load More work.
- [ ] An older direct `/news/:slug` URL loads by API even when not in homepage's first 100 stories.
- [ ] Real article media/images/audio load when backend returns `/api/public/media/:id`.
- [ ] Search visibly indicates the number of articles scanned and can request older pages.
- [ ] Visitor issue report creates a pending record; it does not appear publicly until admin approves it.
- [ ] Poll vote increments backend totals and correctly handles duplicate-vote (409) responses.
- [ ] Alert bell/read badges, dismissible popup ads, Tamil/English and mobile bottom navigation work.

## Admin (existing backend, no patches)

- [ ] Correct backend login works; invalid credentials show an error; refresh restores authenticated session.
- [ ] Article draft/publish/edit/delete and bilingual body formatting persist after page reload.
- [ ] Image, MP3 and MP4 uploads store server-issued media paths, not `localhost` or browser-local blob URLs.
- [ ] Moderator can approve/reject issues; solve only with valid after-photo + resolution note.
- [ ] Alerts/polls/ads/settings CRUD work, correct csrf session used and public pages refresh.
- [ ] Category screen displays existing backend-supported kinds read-only (no fake Add/Save).
- [ ] Microphone can record/preview/download; MP3 converted file then uploads via existing form; WebM uploads are not attempted.

## Visual and production acceptance

- [ ] Compare desktop, tablet and narrow mobile screens with approved medium-blue/red reference.
- [ ] No horizontal overflow; app-like mobile bottom navigation visible and accessible.
- [ ] Native scrolling, touch target sizes, Tamil type, image proportions and popup dismissal checked on mobile.
- [ ] Production env is configured to real backend HTTPS URL or hosting `/api` proxy.
- [ ] SPA fallback works for article/share links and admin deep links.
- [ ] Hosting, API CORS/credentials, caching and cross-device behavior verified in deployed browser.

**Not performed in the isolated workspace:** Running live backend/database, authenticated browser testing, pixel-perfect screenshots or successful production bundle with correctly installed Linux-native esbuild dependencies.
