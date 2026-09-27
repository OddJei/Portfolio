# James Chisulo Portfolio — evidence update

Updated from the verified Vercel portfolio source while preserving the existing dark-green engineering design and core page structure.

## Changes in this pass

- Added an evidence publishing section to each case study.
- Added visible evidence controls for technical evidence, architecture, reviews/photos where relevant, and source/GitHub evidence.
- Unpublished evidence opens a clear “will be updated shortly” modal instead of a broken or private link.
- Added evidence status labels such as PREPARING, PENDING and PRIVATE.
- Updated the global GitHub button to `https://github.com/OddJei`.
- Split the contact area into Contact, Résumé (placeholder until published) and GitHub.
- Refined homepage evidence wording without changing the project story or layout.
- Added a Vercel SPA rewrite for `/work/*` case-study routes.

## Intentionally preserved

- Hero headline and engineering positioning.
- Dark/green visual identity and typography.
- Portrait/profile card and system status panel.
- TradeFlow → NTheemba → NCPC project order.
- Existing case-study narratives and engineering snapshot.
- About and NDS sections.
- Existing responsive design and project diagrams.

## Audit and fixes — 2026-09-27

The portfolio was audited against the supplied production-site brief and the
current local source. The audit covered the homepage, the three case-study
routes, an unknown route, responsive layout behavior, evidence interactions,
metadata, and static asset delivery.

### Fixed

- Added mobile navigation with accessible expanded/collapsed state, outside-click handling, and Escape-to-close behavior.
- Added keyboard-friendly evidence modals with focus return, focus trapping, and Escape-to-close behavior.
- Added route-specific titles and a real not-found page for unknown `/work/*` routes.
- Updated the three published source-evidence links to the public GitHub repositories:
  - `https://github.com/OddJei/TradeFlow-Standard-App`
  - `https://github.com/OddJei/NTheemba`
  - `https://github.com/OddJei/NTheemba-Central-Product-Catalogue-NCPC-`
- Added canonical, Open Graph, and Twitter metadata.
- Added visible focus, hover, active, reduced-motion, and responsive overflow safeguards.

### Verified

- `node --check main.js` passed.
- `vercel.json` parsed successfully.
- Chrome headless rendered the homepage at desktop size and the TradeFlow and NTheemba case-study routes.
- The unknown route rendered the not-found state rather than silently falling back to the homepage.
- A local SPA-compatible HTTP audit server returned the expected HTML and asset responses.
- The final tracked source includes the repository license, profile asset, HTML, JavaScript, CSS, and Vercel configuration.

Interactive browser automation through the bundled Playwright wrapper was unavailable in this environment because its WSL runtime lacks `/bin/bash`; Chrome headless was used for the available render and route checks instead.

### Evidence boundary

The résumé, client reviews/photos, and deployment-specific proof remain clearly marked as unpublished or pending. No private client data, credentials, deployment identifiers, or production exports were added.

## Route fallback follow-up — 2026-09-27

- Made the Vercel SPA fallback explicit for `/work`, `/work/`, and nested case-study paths.
- Normalized trailing slashes in the client-side route resolver so `/work/tradeflow` and `/work/tradeflow/` resolve to the same case study.
- The live Vercel URL was intentionally not redeployed in this pass; it is still serving an older deployment. The repository now contains the route fix for the next approved deployment.

## Vault-backed public evidence — 2026-09-27

The private NDS Evidence Vault was used as the source for the portfolio evidence mapping. Only public-safe derivatives were added:

- TradeFlow links to the immutable public repository commit, setup-preflight test, and implementation source.
- Ntheemba links to the immutable public repository commit, runtime entry point, inbound worker, and public test directory.
- NCPC links to the immutable public repository commit, identity API/model files, and workflow test.
- Evidence copy now states the boundary explicitly: public source/test evidence is not deployment, client permission, production-data, live WhatsApp, or payment proof.
- Private client screenshots, reviews, shop photos, company records, credentials, and vault files were not copied into this public repository.

## Local route preview — 2026-09-27

Plain `python -m http.server` does not know that `/work/*` is a client-side SPA route, so it returns a filesystem 404. Use the included fallback server instead:

```powershell
python serve.py 8002
```

Then open `http://127.0.0.1:8002/work/tradeflow` or any of the other published case-study routes.
