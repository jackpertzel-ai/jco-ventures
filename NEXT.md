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

Review the two hosted navigation alternatives with Jack, then implement his chosen direction. The season Content stream in `pertzel-lab` owns the review links. A (guided story) is saved as Superdesign draft `2c927923-98c7-422a-a48b-592d8099e967`, version 3; B (research notebook) as `5ea0763b-2d32-4848-a4e2-e6762c1ed688`, version 4. Both were checked at 375px and 1280px, including actual collection/project-return navigation. The source draft stays active until selection. These alternatives are design artifacts; the site files still contain the preceding local prototype below. No direction is approved for implementation or production deployment.

Review the 28 October ECG reader prototype with Jack before deployment. The two lab pages, the
home page’s existing Week 2 teaser, scoped reader stylesheet, social image, wiring diagrams and
new result figures are implemented on local branch `prototype/ecg-reader-journey`. No website
branch has been pushed and no deployment was made. Eight agreed corrections, source HTML/PDF
links near the top and in the phone header, ECG/model/dataset explanation, evidence-based roadmap
and a collapsed-by-default illustration are included. Both single-lead contacts measure; their
voltage difference gives one trace. The diagrams include separate wires, recorder boxes and a
legend; positions and recorder traces are explicitly schematic. Later devices stay deferred.

Actual desktop (1280px) and phone (375px) screenshots are saved and pushed only in the already
approved private lab repository: `design/reader-preview/`. Its season Content stream owns the
review links and the agreed copy. The local server is temporary. Native disclosure works with
keyboard and JavaScript off; visible focus, page width, images, local links and 31-row score table
were checked. The new graphs use saved aggregate results, not new inference or uncertainty
analysis. Compare only the same 30-finding means directly; .924 is separate and unexplained.

Jack has now explicitly authorised sharing the review drafts with Superdesign for the navigation alternatives below. The prior upload rejection is resolved for this design scope.

Before a separately approved deployment: finish Jack’s visual/wording review, remove the draft
banner and noindex marker, retain a dated substantive correction note, and restore the existing
analytics inclusion on the two lab pages (omitted from the review prototype). Keep the deploy
allowlist and all unrelated company routes unchanged. The project is not ready for an automatic
main push. Publication date of the correction must reflect actual deployment, not this draft.

## Decisions Jack made on 2026-10-18

- The three factual corrections to his announcement text (listed at the end of
  `~/pertzel-lab-data/content/2026-10-season1-week1/announcement-draft.md`): approved as
  published. "A hospital-grade model" and "a model people are already using" stay as written.
- The lab's possessive: "Jack's research practice within J & Co" on the masthead, "an independent
  research practice run by Jack, J & Co's founder" in the ledes. Kept.
- Pushed on the dated day, so the 18 Oct dates stand.

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

Extended 28 October: local prototype authoring and browser review of the agreed ECG corrections,
introductory reader journey, optional wired electrode illustration, clear result figures, source
links and roadmap. Native route for this prototype, no deployment or production write. Private
lab-repo review artifacts are authorised by the ongoing session. Superdesign review drafts are now explicitly authorised; production deployment remains outside this scope.


Approved 2026-10-16 and built: the `/lab/` section, the three home-page additions, the
notes-panel copy, the shared stylesheet, the figures with attribution, the dated line, sitemap and
metadata, and the contract-text corrections that follow from them. Not approved for the model:
pushing `main`, changing the deploy workflow, any change to the Magpie, Desk Sensor, Kuuki,
services, worldview or founders copy, hosting, DNS, analytics, forms, or any health claim.

### Navigation options requested — 28 October 2026

Jack asked for a few options before choosing the next website layout. The assistant prepared two directions: an approachable guided story and a research notebook. The durable hierarchy is Lab collection > individual project > weekly research entries. The project introduction starts with what an ECG can reveal, why it matters, and the existing real PTB-XL ten-second recording; Week 2 findings belong in the research journal. Keep primary paper/PDF links prominent, the wired electrode explanation optional, and completed work distinct from plans. Only one project is currently real; do not invent future active labs.

Jack explicitly authorised Superdesign and suitable design tools for these revisions, including sharing the review drafts. This resolves the earlier destination-approval rejection. Prepare two reviewable alternatives with phone links and inspect their rendering; preserve the eight scientific corrections. No production deployment or main push is approved. Selection and human comprehension review remain open.

The two navigation alternatives and final browser evidence are saved in the private lab repo under `design/navigation-options/`. Superdesign generation reported 112 credits for the two options; subsequent repairs used direct edits. The corrected overview upload succeeded, but the full Week 2 draft import hit asset-URL validation and remains an old remote baseline; use the corrected private report screenshots. This does not block reviewing the new navigation alternatives.
