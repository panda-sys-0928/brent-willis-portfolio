# Portfolio — Brent Willis

A single-page portfolio built with **React 19** and **Vite**, styled with plain
CSS (no UI library). Design follows the dark-teal "applied AI studio" look:
Space Grotesk headings, Instrument Serif accents, JetBrains Mono labels.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
```

## Where to edit things

| What | Where |
| --- | --- |
| All copy — summary, services, work, experience, skills | `src/data/profile.js` |
| Colours, fonts, spacing (dark + light tokens) | top of `src/styles.css` |
| Section layout | `src/components/*.jsx` |
| Résumé download | `public/Brent-Willis-Resume.pdf` — overwrite to update |

Content comes from `Brent_Willis_Full_Stack_AI_Backend_Resume_2026`. Keep the
two in step: no metrics, clients or testimonials the résumé can't back up.

## Deploying

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every
push to `main`. On the first run, set **Settings → Pages → Source** to
**GitHub Actions**. The base path is worked out from the repository name.

## Notes

- **Theme** — dark by default; the toggle remembers the visitor's choice.
- **Hero** — the node network (`NetworkCanvas.jsx`) follows the cursor and
  reads its colours from the theme tokens.
- **Workflow demo** — `WorkflowLoop.jsx` plays the runs in `loopRuns` only
  while it is on screen. They are labelled as illustrative examples.
- **Motion** — everything animated is switched off under
  `prefers-reduced-motion`.
