# jco-ventures repository rules

One static page (`index.html`), no build step. Deployed to https://jco.ventures by GitHub Pages
from `main` — **pushing `main` IS publishing publicly** and always needs Jack's explicit approval
that session.

## Verification

No automated verify command yet. Verify by consumer use:

```text
python3 -m http.server 8741   # from the repo root, then open http://localhost:8741/
```

Check: the page renders with content visible (also with JavaScript disabled), has no horizontal
scroll at about 375px, and its keyboard focus states remain visible. Verify the Magpie Net,
Instagram, GitHub, LinkedIn and Substack routes plus every `mailto:hello@jco.ventures` link. After
any separately approved deploy, confirm https://jco.ventures serves the new content and that the
email route still delivers to Jack.

## Content rules (protected)

- Company-first voice: this site is about J & Co Ventures; Jack's personal story remains secondary.
- Never name MicroVibe until its trademark/FTO gate clears. Never mention Holistic.
- Coco may appear as co-founder using her first name and approved photo only (Jack approved
  2026-08-07). Never add her surname, personal story or family framing without fresh approval.
- No health claims. Environmental measurements are reported only as measured and never interpreted
  as health advice.
- Development work may appear when its status and limitations are explicit. Do not imply release,
  availability, accuracy or performance that has not been demonstrated.
- Use real evidence only. Do not simulate telemetry or invent imagery, measurements, customers,
  availability or global operations.
- The public positioning is owned by `~/brand/personal-brand-plan.md`; company facts are owned by
  `jco-ops`. Quote those owners rather than creating a competing version here.
