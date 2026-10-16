# NEXT — jco-ventures

- **Capability:** Company front door for products, services and selective collaboration
- **Slice:** The lab on the site — built and reviewed on branch `lab-page`; waiting for Jack's
  preview review, his word on the items below, and his push of `main` (that push is publication).
- **Finish-line movement:** "Explore our work reaches real work" gains a fifth real line of work
  (Pertzel Lab); research has its own chapter so current work and paid collaborations stay
  visibly separate; the notes panel points at the lab's record here and keeps Substack for essays.
- **Seat route:** none

## Where things stand

The separated Option A front door has been live since 2026-08-10 (`74ab4e6`, then `1c10d8b`).
On 2026-10-16 the lab slice was built on `lab-page` and taken through one medium review, a
correction cycle, a medium recheck, a second correction cycle and a bounded verification
(assignment `lab-on-site` in `workflow/seat-assignments.jsonl`, kept untracked; see hazards).

- `assets/site.css` holds the page styles, moved out of `index.html` line for line (the move
  alone rendered the home page identically at 1280 px). Two shared rules were then widened on
  purpose: `.eyebrow` colour and the bare `h1` rules are scoped to the hero, so the lab pages
  stop inheriting them; the home page measures the same before and after.
- Home page: nav link "Lab"; a new field-index group "Research practice" with row 04 "Pertzel
  Lab" placed above Selective collaborations, which becomes row 05; the dated "Latest from the
  lab" line under the working note; chapter "03 · Research practice" with the lab card and a
  PTB-XL lead II strip (CC BY 4.0, Wagner et al. 2020); the notes panel now stacks two links,
  the lab record and Substack essays, so it is about 24 px taller than before.
- `lab/index.html` (season status, posts, figures A–C with attribution and a text table for
  figure C, rules) and `lab/season-1-announcement.html` (the announcement, dated 18 Oct 2026).
- `lab/assets/`: the figures and card strip in the site palette, plus `s1-og.png` (1200×630) as
  the lab pages' share image. `sitemap.xml` lists the three URLs.
- `AGENTS.md`, `README.md` and the North Star destination and finish line now cover the home
  page plus `/lab/`.

Checked in the browser: no horizontal scroll at 375, 744 and 1280 px; content present without
JavaScript (the only scripts are JSON-LD and the analytics beacon); keyboard focus rings visible;
every local link and asset resolves; external routes answer. Not yet exercised by a person:
Jack's preview review. Not pushed, not deployed.

## Single next action

Jack reviews the preview at desktop and phone width (`python3 -m http.server 8741` from the repo
root, then http://localhost:8741/ and http://localhost:8741/lab/; hard-refresh, or add `?x=1`,
because the local server sends no cache headers and Chrome will otherwise show a stale page),
decides the items below, then on 2026-10-18 fast-forwards `main` to `lab-page` and pushes.
After the deploy, confirm https://jco.ventures/lab/ serves the new pages and the share image
resolves at https://jco.ventures/lab/assets/s1-og.png.

## Decisions for Jack before the push

- **His own announcement text.** The page differs from the edited draft in three places, all
  factual corrections made after review and listed at the end of
  `~/pertzel-lab-data/content/2026-10-season1-week1/announcement-draft.md`: "over the next six
  weeks" became "over the rest of this six-week season (it ends on 22 November)"; "every
  heartbeat marked by anaesthesiologists" became "with stretches where every heartbeat was
  checked by anaesthesiologists" (the dataset's page says a classifier screened about twenty
  minutes per case and at least two of five anaesthesiologists validated each segment); "what the
  anaesthesiologists marked" became "checked". Approve, reword, or revert. Two phrases were left
  as written but flagged by the reviewer as undemonstrated: "a hospital-grade model" and "a model
  people are already using".
- **The lab's possessive.** The masthead now quotes the season plan, "Jack's research practice
  within J & Co"; the ledes say "an independent research practice run by Jack, J & Co's
  founder". If Jack wants a different framing, it changes in both places and in the lab's own
  North Star.
- **Three places carry the 18 Oct 2026 date:** the home-page line, the announcement's byline and
  `article:published_time`, and every `lastmod` in `sitemap.xml`. Deploy on that day or change
  all three first.

## Hazards that remain open

- `deploy.yml` uploads the whole checkout, so every committed file is served at jco.ventures,
  including this file, `AGENTS.md` and `NORTH_STAR.md`. Decision for Jack: restrict the Pages
  upload to the site files (one-line change to the workflow). Until then the seat ledger under
  `workflow/` stays untracked rather than published.
- Figure B is derived from VitalDB waveforms loaded from vitaldb.net (CC BY-NC-SA 4.0 plus its
  data-use agreement). It appears only on the lab pages with its licence line; the home page uses
  the PTB-XL strip. PhysioNet also hosts VitalDB under CC BY 4.0; switching the lab's waveform
  source to that copy would lift the non-commercial constraint and is a Season 1 decision.
- The lab repository stays private until the Season 1 object ships, so no code link yet. No
  Bluesky handle yet; the lab pages link Instagram only.
- The lab pages carry the existing Cloudflare analytics beacon so they are counted; no analytics
  configuration changed.
- Figure C is a picture of a table; the text table under it is the accessible copy. Figures link
  to their full-size PNGs.

## Current approval boundary

Approved 2026-10-16 and built: the `/lab/` section, the three home-page additions, the
notes-panel copy, the shared stylesheet, the figures with attribution, the dated line, sitemap and
metadata, and the contract-text corrections that follow from them. Not approved for the model:
pushing `main`, changing the deploy workflow, any change to the Magpie, Desk Sensor, Kuuki,
services, worldview or founders copy, hosting, DNS, analytics, forms, or any health claim.
