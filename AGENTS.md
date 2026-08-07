# jco-ventures repository rules

One static page (`index.html`), no build step. Deployed to https://jco.ventures by GitHub Pages
from `main` — **pushing `main` IS publishing publicly** and always needs Jack's explicit approval
that session.

## Verification

No automated verify command yet. Verify by consumer use:

```text
python3 -m http.server 8741   # from the repo root, then open http://localhost:8741/
```

Check: page renders with content visible (also with JavaScript disabled), no horizontal scroll at
~375px, external links resolve (magpienet.com, instagram.com/j_co_adventures, GitHub, LinkedIn,
Substack), and after any deploy, https://jco.ventures serves the new content and
hello@jco.ventures delivers to Jack.

## Content rules (protected)

- Company-first voice: the site is about J & Co Ventures; Jack-as-brand lives on social channels.
- Never name MicroVibe (until trademark/FTO clear). Never mention Holistic or Coco.
- No health claims — sensor data is reported as measured, with the fine-print disclaimer kept.
- Nothing appears in the portfolio or object log before it ships; the simulated bench feed stays
  labelled SIMULATED until real telemetry exists.
- Brand facts are owned by `~/brand`; company facts by `jco-ops`. Quote, don't fork.
