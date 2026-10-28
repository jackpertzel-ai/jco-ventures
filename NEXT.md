# NEXT — jco-ventures

- **Capability:** Company front door for products, services and selective collaboration
- **Slice:** The lab on the site — live since 2026-10-18 (`4a49a92`); **Week 2 post live since
  2026-10-25** (`bdd9210`, pushed with Jack's word; Pages run 40161132866 green; the page, its two
  figures and the home-page line answered 200 on the live domain). **Pages now deploys only the site
  files** (`c7b3726`, Jack's call on the allowlist loose end): `/NEXT.md` answers 404 on the live
  domain, as checked after the deploy.
- **Finish-line movement:** "Explore our work reaches real work" gains a fifth real line of work
  (Pertzel Lab); research has its own chapter so current work and paid collaborations stay
  visibly separate; the notes panel points at the lab's record here and keeps Substack for essays.
- **Seat route:** native

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

Checked in the browser before the push: no horizontal scroll at 375, 744 and 1280 px; content
present without JavaScript (the only scripts are JSON-LD and the analytics beacon); keyboard focus
rings visible; every local link and asset resolves; external routes answer. **Deployed 2026-10-18:**
Jack approved the three decisions and pushed `main`; the home page, `/lab/`, the announcement, the
share image, the stylesheet and the sitemap all answered 200 on the live domain, and the live
announcement carries the corrected figure C caption.

## Single next action

Ask Jack whether to publish the implemented lab revision. His “Yep that looks good” on 28 October
approved the connected structure and opening; that direction has now been implemented locally on
`prototype/ecg-reader-journey`. Deployment remains a separate decision. No website branch was
pushed; the remote main was still `3400c59e70e0f214af52e1e741d89a7742f5a624` after the checks.

The site now has `/lab/` as the collection, `/lab/ecgfounder/` as the project overview, and
`/lab/ecgfounder/journal/` as the dated record. The project begins with Jack’s question and role,
then background, approach and sources. One real current project, with an empty archive. The
journal opens the full corrected Week 2 HTML report, and both existing weekly-post URLs have
project/journal return links. The original paper is prominent, including on the Week 1 page.
The company homepage’s lab card and entry labels now agree with the current project status.

Approved copy and figures are retained. Real ECG PNGs and exact wired SVGs are served locally;
there is no Superdesign hosting dependency in the implementation. A shared lab stylesheet serves
only the three new pages. Diagrams retain their aspect ratio at phone sizes. The new routes are
included in the sitemap and already covered by the existing Pages file allowlist.

Verification: 24 rendered combinations across all six pages, 375px/1280px and JavaScript on/off;
48 internal destinations resolved; the full collection > project > background > journal >
corrected report > journal > project > collection route was exercised in all four browser modes.
No page-width overflow, missing visible images, duplicate IDs or page JavaScript errors. The
native figures open/close from the keyboard with JavaScript off; focus is visible. Paper/PDF,
Magpie Net, Instagram, GitHub and Substack returned 200. LinkedIn returned 999 to the automated
request, so that external destination was not verified. Existing email links still address
hello@jco.ventures; delivery was not tested. A final image-scaling change passed focused checks on
all three affected pages at both widths. Browser evidence and actual screenshots are in the
private lab repo at `design/implemented-journey/`; its season Content stream owns the review links.

Before the separately approved publication: remove the draft banners and noindex markers from
all four draft pages, change the Week 2 correction wording/status to the actual publication date,
and restore the existing analytics inclusion on the four changed/new lab pages. Preserve the
historical Week 1 announcement and existing post URLs. Follow the required production review
route before pushing main; confirm the live pages and routes after deployment. No new research
analysis, inference, patient-grouped comparison or single-lead baseline ran in this UI task.

## Decisions Jack made on 2026-10-18

- The three factual corrections to his announcement text (listed at the end of
  `~/pertzel-lab-data/content/2026-10-season1-week1/announcement-draft.md`): approved as
  published. "A hospital-grade model" and "a model people are already using" stay as written.
- The lab's possessive: "Jack's research practice within J & Co" on the masthead, "an independent
  research practice run by Jack, J & Co's founder" in the ledes. Kept.
- Pushed on the dated day, so the 18 Oct dates stand.

## Hazards that remain open

- The Pages allowlist was resolved on 25 October (`c7b3726`): the workflow copies only the site
  files. The new nested lab routes are covered by its existing recursive `lab` copy. Keep it intact.
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

Extended 28 October: local prototype authoring and browser review of the agreed ECG corrections,
introductory reader journey, optional wired electrode illustration, clear result figures, source
links and roadmap. Native route for this prototype, no deployment or production write. Private
lab-repo review artifacts are authorised by the ongoing session. Superdesign review drafts are explicitly authorised. Jack approved the connected layout and opening on 28 October; implementation of that design is complete locally. Production deployment remains outside this scope.


Approved 2026-10-16 and built: the `/lab/` section, the three home-page additions, the
notes-panel copy, the shared stylesheet, the figures with attribution, the dated line, sitemap and
metadata, and the contract-text corrections that follow from them. Not approved for the model:
pushing `main`, changing the deploy workflow, any change to the Magpie, Desk Sensor, Kuuki,
services, worldview or founders copy, hosting, DNS, analytics, forms, or any health claim.

### Connected project journey — 28 October 2026

Jack prefers B navigation with the research story. His latest correction supersedes the earlier
ECG-first introduction: explain what he is researching and his role first, then background,
importance and approach, with dated work in a separate weekly journal. The Lab collection has
current and previous projects; only the current ECGFounder project exists. No invented projects.

Current review drafts: collection `d35d5fac-11ae-474e-816b-ee1af29b65ed` version 1; project
`5ea0763b-2d32-4848-a4e2-e6762c1ed688` version 5; journal
`67287403-63e0-4d31-bd9e-bafa794b9ed6` version 1. Source links, real traces and the optional wired
electrode guide remain. Proposed website paths are `/lab/`, `/lab/ecgfounder/` and
`/lab/ecgfounder/journal/`; they now exist locally and are not deployed. The season Content stream in `pertzel-lab`
owns the click-through links, screenshot record and review limits.

Superdesign sharing remains explicitly authorised for these review drafts. The latest work used
direct edits and no new generation credits. The earlier A/B artifacts are preserved privately in
`design/navigation-options/`; B’s hosted URL now shows the selected project-first version. The
full corrected Week 2 report still uses its private screenshot in the older hosted mockup after the
earlier import problem; the implemented website now links its full corrected HTML article. Jack
approved the connected layout and opening. The current publication checkpoint is above. No website
branch was pushed.
