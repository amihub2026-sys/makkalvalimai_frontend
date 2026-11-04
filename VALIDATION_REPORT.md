# Frontend validation — 2026-11-04

| Check | Result |
|---|---|
| 44 standalone sections each have TS/HTML/CSS/responsive CSS | PASS (`node scripts/verify-project.cjs`) |
| No demo repository, fake posts or IndexedDB publishing in current source | PASS (source verification) |
| TypeScript (`tsc --noEmit -p tsconfig.app.json`) | PASS |
| Angular template compiler (`ngc -p tsconfig.app.json`) | PASS |
| `npm run build` in isolated Linux container | BLOCKED by mismatched platform-specific `esbuild` binaries copied with the earlier Windows/AIX dependency folder; not a source compile error |
| `npm run verify:api` live backend probe | NOT VERIFIED: backend not running/reachable in this container |
| Logged-in browser workflows with MongoDB | NOT VERIFIED: no live credentials/server |
| Pixel-perfect comparison on running desktop/mobile browsers | NOT VERIFIED: no browser run |

Install dependencies fresh with `npm ci` on your Windows computer. Then run `npm run build` with those platform-appropriate installed dependencies and follow `TESTING_CHECKLIST.md` before deployment. The backend has not been changed.
