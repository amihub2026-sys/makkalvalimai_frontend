# Editing guide

Update one component at a time. Every component has the files `<name>.component.ts`, `.html`, `.css`, and `.responsive.css`. Layout copy/text lives in HTML; API calls and user interactions live in TS; desktop styles in CSS; tablet/mobile overrides in responsive CSS.

- Homepage composition: `src/app/pages/home/home.component.html`
- Featured hero slider: `src/app/pages/home/featured-news/`
- Category story grids: `src/app/pages/home/category-news/`
- Issue and poll widgets: `src/app/pages/home/issues-polls/`
- Advertisements: `src/app/pages/home/top-ad/`, `sidebar-ad/`, `src/app/shared/public-shell/`
- Header, breaking ticker, footer and mobile app bottom nav: `src/app/shared/`
- News article by slug: `src/app/pages/article-detail/`
- Archive listing and pagination: `src/app/pages/madurai-news/` (and parallel category page folders)
- API data cache/refresh: `src/app/services/content.service.ts`; authenticated API: `news-api.service.ts`
- Admin news editor: `src/app/admin/articles/`; admin settings: `src/app/admin/appearance/`
- Central colors: `src/styles/tokens.css`
- Development API URL: `src/environments/environment.ts`
- Production API URL/proxy: `src/environments/environment.production.ts`

Preserve the backend-issued `/api/public/media/:id` path in MongoDB; convert it to a display URL through `MediaService.url(...)`. New backend-only features cannot be enabled by changing Angular HTML alone.
