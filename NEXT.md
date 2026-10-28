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

The approved mobile navigation is published and verified. No further website implementation is
queued. Later research updates retain their own evidence and publication decision.

### Published mobile navigation — 29 October 2026

Jack approved the connected version-2 preview with “Publish this version”. Release commit
`c3cc3f9a01fc5ac5028bcf6060153073fd4b986f` was reviewed under `mobile-navigation-release-20261029`,
integrated after the independent check, and published through the unchanged main/Pages workflow.
[Successful deployment](https://github.com/jackpertzel-ai/jco-ventures/actions/runs/40701508229).

All six pages now have the sticky J&Co/Lab/Menu phone header with the main sections and current
research/project/journal/original-paper shortcuts. Location cues, large touch targets, keyboard
focus, Escape and selection closing are present. Native disclosure and links work without
JavaScript; automatic closing/current-section updates are enhancements. Desktop, project and
previous/next week navigation are preserved. The accepted 761–980px Week 2 grid fix is included.
README records how future projects/weeks keep the shared navigation consistent.

Observed locally: 48 renders at 320/375/768/1280 with JavaScript on/off, actual Tab/Enter use,
Escape/focus return, section jumps, short-screen scrolling, desktop resize and complete reading
journeys. Source comparison confirms original content, metadata, analytics and desktop links were
preserved. The independent review exercised the affected interface; see its report for coverage.
Observed live: 24 phone/desktop renders with JavaScript on/off, 49 internal destinations,
the connected Lab/project/journal/previous/next/home journey and exact reviewed bytes for all nine
changed public files. External routes answered 200 except LinkedIn's automated-request 999.
Email links still address hello@jco.ventures; no message was sent or delivery tested. Physical phones
and screen readers were not exercised by the automated checks.

Evidence is local and ignored under `workflow/mobile-navigation-release-2026-10-29/`; accepted
preview source remains `.superdesign/mobile-navigation/`. Work included integration, content
preservation checks, browser verification, required independent review with Windows setup recovery,
publication and live verification. No new generators, research runs, paid services, infrastructure,
analytics configuration or scientific-content changes were made. Review overhead is part of this
release effort; user benefit beyond the approved preview has not been independently measured.

### Published weekly navigation — 28 October 2026

Jack requested book-style movement at the end of each weekly entry after approving publication in
this session. The scoped follow-up is live: Week 1 links forward to Week 2, Week 2 links back to
Week 1, and both return to the weekly journal. First/latest boundaries are explanatory text with
no links to unpublished weeks. The controls form a row on desktop and stack on phones. README
records the paired-link publishing rule for future weeks.

Release commit `8eacc21852356584340ba80a4bbed5464beb028e` was independently reviewed with no supported
findings under `week-navigation-20261028`, integrated, and published through the unchanged Pages
workflow. [Successful deployment](https://github.com/jackpertzel-ai/jco-ventures/actions/runs/40690186963).
Both live post files and the shared stylesheet match the exact reviewed Git bytes. Live checks
covered 24 phone/desktop renders with JavaScript on/off, 48 internal destinations and four complete
reading journeys including previous, next and journal navigation. The independent check exercised
all four changed links, actual keyboard Tab/Enter behavior and honest boundary states. Research
content and existing project/contact/social routes were preserved. Physical-phone and screen-reader
use were not exercised; human usefulness remains unmeasured. No email was sent or delivery tested.

Evidence is local and ignored under `workflow/week-navigation-2026-10-28/` (manifest, local/live
browser checks and screenshots, independent review and deployment byte comparison). Work included
implementation, required independent review, Windows test setup recovery and live verification.
No new generation, research run, paid service, analytics, hosting or deployment configuration change
was made. This receipt closes the current navigation request; later scientific updates retain their
own evidence and publication boundary.

### Published reader journey

The approved website release is published. Jack authorised it with “Yep go let’s publish” on
28 October 2026. Release commit `03efa56c2b43e730365c17a62baf48795b44a1cd` was independently evaluated under
`lab-reader-release-20261028`, then pushed through the unchanged main/Pages workflow.
[Successful deployment](https://github.com/jackpertzel-ai/jco-ventures/actions/runs/40683724221).

Live routes: [Lab collection](https://jco.ventures/lab/),
[ECGFounder project](https://jco.ventures/lab/ecgfounder/),
[weekly journal](https://jco.ventures/lab/ecgfounder/journal/) and
[corrected Week 2](https://jco.ventures/lab/season-1-week-2.html). Existing post URLs remain.
The project introduces Jack’s research first, then background, approach and sources. Original
paper/PDF links are prominent. Real traces, optional wired electrode diagrams and corrected
figures are live. Draft/noindex markers are removed; Week 2 retains its 25 October publication
date and records its 28 October correction. Existing analytics and the Pages allowlist remain.

Observed after deployment: all 36 published files matched the reviewed Git bytes;
24 phone/desktop renders with JavaScript on/off, 48 internal destinations and four complete reader
journeys passed. Native disclosures and visible keyboard focus work without JavaScript. Working
notes and review evidence return 404 on the public domain. Paper/PDF, Magpie Net, Instagram,
GitHub and Substack returned 200; LinkedIn returned 999 to the automated request. Email links
still address hello@jco.ventures; actual delivery was not tested and no email was sent.

Private screenshots and publication evidence are in `pertzel-lab/design/published-journey/`;
local review evidence is under ignored `workflow/release-2026-10-28/`. The release required
cleanup, local browser checks, independent evaluation, a phone-table correction and targeted
recheck, deployment and live verification. No new
model generation or research analysis ran. Human comprehension has not been measured.

No additional website implementation is queued. Research follow-ups remain with the private lab:
patient-grouped uncertainty and the matched single-lead PTB-XL baseline are planned, not run;
allocate their time at Sunday planning on 1 November. Keep the unresolved headline average and
label counts explicit. Future research updates need their own evidence and publication decision.

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
links and roadmap. The earlier prototype used the native route. Publication is now explicitly approved and uses builder-evaluator. Private
lab-repo review artifacts are authorised by the ongoing session. Superdesign review drafts are explicitly authorised. Jack approved the connected layout and opening on 28 October; implementation of that design is complete locally. Jack’s later “Yep go let’s publish” extends this scope to publishing the approved version through the existing main/Pages deployment.


Approved 2026-10-16 and built: the `/lab/` section, the three home-page additions, the
notes-panel copy, the shared stylesheet, the figures with attribution, the dated line, sitemap and
metadata, and the contract-text corrections that follow from them. Not approved for the model:
changing the deploy workflow, any change to the Magpie, Desk Sensor, Kuuki,
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
`/lab/ecgfounder/journal/`; they are now published; see the release receipt above. The season Content stream in `pertzel-lab`
owns the click-through links, screenshot record and review limits.

Superdesign sharing remains explicitly authorised for these review drafts. The latest work used
direct edits and no new generation credits. The earlier A/B artifacts are preserved privately in
`design/navigation-options/`; B’s hosted URL now shows the selected project-first version. The
full corrected Week 2 report still uses its private screenshot in the older hosted mockup after the
earlier import problem; the implemented website now links its full corrected HTML article. Jack
approved the connected layout and opening. The completed publication receipt is above. The reviewed release was pushed to main and is live.
