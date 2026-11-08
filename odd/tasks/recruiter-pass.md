# Recruiter pass — legibility, social card, project taxonomy, print CV

Branch: `feature/alternative-design` · Delivery: `ask-on-risk` · Runner: `npm run build` (no test runner in repo)
Objective: fix the wide-screen centering defect and ship the recruiter-facing improvements approved in L2, excluding language items and testimonials.

## Specs

- **S1 — Centering.** On 1080p, 2K and wider viewports the sheet is centered in the space right of the rail, without regressing 1024–1464px widths. Source: L1 «hay esta issue visual en pantallas 1080, 2k en adelante: el contenido no se queda centrado».
- **S2 — Legibility.** Meta labels sit at 12px or above where space allows; data-bearing hairlines gain visible contrast; the theme toggle reaches 44px on mobile. Approved: L2 «arranca con todo menos los puntos de idioma, punto 4».
- **S3 — Social card.** A dedicated 1200×630 card built with the site's own type and palette is served as `og:image` and `twitter:image`, with width, height and alt metadata. Today `og:image` is the 480×600 portrait.
- **S4 — Project taxonomy.** Every project states its type (cliente, proyecto propio, prueba técnica, proyecto académico) and its real status (en producción, repositorio público, privado) instead of a date-derived "Finalizado".
- **S5 — Availability.** The profile states work modality next to location («Mallorca · Remoto o híbrido»). No language claims (excluded by L2).
- **S6 — Printable CV.** `@media print` produces a paper-ready CV: no rail, no topbar, no mobile nav, no buttons, ink on white, unrolled grids, visible URLs. A print action is reachable from the contact block.
- **Out of scope (L2).** Testimonials (punto 4), language proficiency and ES/EN routing (puntos de idioma), real project metrics and a booking link (no source data yet).

## Tasks

| ID | Specs | Route | Status | Evidence |
| --- | --- | --- | --- | --- |
| T1 | S1 | inline | done | `bfaedee`; headless Chrome 1024/1280/1440/1920/2560; `npm run build` |
| T2 | S2 | inline | done | `f1be788`; 1920 + 375 screenshots; rail fits at 12px; no horizontal overflow at 375 |
| T3 | S3 | inline | done | `d759503`; `public/img/og-card.png` (1200x630) rendered from `design/og-card.html`; og/twitter meta present in `dist/index.html` |
| T4 | S4 | inline | done | `2cf317d`; prerendered `Tipo`/`Estado` rows for all 7 projects |
| T5 | S5 | inline | done | `2cf317d`; availability line wraps without overflow at 375 |
| T6 | S6 | inline | done | `80407d5`; `--print-to-pdf` output: white paper, chrome hidden, one column, URLs printed, 6 pages |

## Log

- **L1 (verbatim).** «hay esta issue visual en pantallas 1080, 2k en adelante: el contenido no se queda centrado y es horrible. puedes fixearlo?»
- **L2 (verbatim).** «arranca con todo menos los puntos de idioma, punto 4»
- L3: Diagnosis of L1 — `.sheet` had `margin-left: var(--rail)` plus `max-width: 1360px` and no `margin-right: auto`, so every spare pixel accumulated on the right. Fix: `margin-right: auto` plus `margin-left: max(var(--rail), calc(50% + var(--rail)/2 - var(--measure)/2))` from 1024px up; the `max()` keeps the previous rail-offset behaviour until the 1360px measure fits. Verified by screenshots, no test runner exists in the repo.
- L4: L2 scope decision — testimonials, language proficiency, ES/EN and a booking link are skipped; metrics stay out because no real figures exist and inventing them would misrepresent client work.
- L5: Verification method — the repo has no test runner, so every task was checked with `npm run build` plus headless Chrome against `dist` served over `python3 -m http.server` (screenshots and `--print-to-pdf`), and overflow was measured through a same-origin iframe harness because Chrome clamps `--window-size` below ~500px on macOS.
- L6: Print output is 6 A4 pages: profile, seven project plates without images, trajectory and contact. Project captions survive as footnotes under each plate (`order: -1` on the body column).
- L7: Open content gaps reported to the user — real project metrics, case studies, booking link, education/languages for the CV, and the "Remoto o híbrido" availability claim now lives in `TitleBlock.jsx` and must be confirmed.
