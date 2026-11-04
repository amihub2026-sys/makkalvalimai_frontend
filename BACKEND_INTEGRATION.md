# Actual API contract used by this frontend

The frontend was checked against the earlier uploaded `Makkal_Valimai_Cloudflare_R2_Proper_Backend.zip` **for reference only**. NO Node, MongoDB, Express, database, file upload or backend files were changed. If your currently running backend is a different revision, run `npm run verify:api` and review its existing routes before deploying.

## Public GET/POST routes

- GET `/api/public/bootstrap` → `{articles,issues,alerts,polls,ads,settings}`
- GET `/api/public/articles?kind=...&date=YYYY-MM-DD&area=...&page=1&limit=30` → published array
- GET `/api/public/articles/:slug` → single article
- GET `/api/public/issues?status=approved|solved` → public issue array
- POST `/api/public/issues` → multipart citizen form (always pending moderation)
- GET `/api/public/alerts`, `/api/public/polls`, `/api/public/ads`, `/api/public/settings`
- POST `/api/public/polls/:id/votes` with `{option:number}`; votes enforced server-side
- GET `/api/public/media/:id` → public published media

## Authenticated admin routes

- POST `/api/admin/auth/login`, GET `/api/admin/auth/me`, POST `/api/admin/auth/logout` (cookie session/CSRF token)
- GET/PUT/DELETE `/api/admin/articles[/:id]`; GET `/api/admin/issues`, PATCH `/api/admin/issues/:id`
- GET/PUT/DELETE `/api/admin/alerts[/:id]`, `/api/admin/polls[/:id]`, `/api/admin/ads[/:id]`
- GET/PUT `/api/admin/settings`; POST `/api/admin/media`

The attached backend archive has **no** `/api/admin/categories`, `/api/public/categories`, footer-ad position or dedicated full-text search endpoint. The frontend does not call these missing endpoints or persist fictional values. Backend-issued media paths are **kept relative** (e.g. `/api/public/media/:id`) when saving, so they satisfy the API's URL validation; the media UI resolves them to the configured API origin only for display.

For production frontend hosting, configure a `/api` proxy or select the real HTTPS backend base URL in the Angular production environment. With cross-origin cookie auth, the existing server's CORS/session cookie settings must already permit that deployment. This project deliberately does not alter those server settings.
