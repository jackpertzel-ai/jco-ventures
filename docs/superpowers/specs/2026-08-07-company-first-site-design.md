# jco.ventures — company-first site (v2)

**Date:** 2026-08-07 · **Status:** approved in conversation, pending Jack's read of this file

## Why

v1 (shipped 2026-08-06) was Jack-first: "Jack Pertzel — instruments of independence", personal
hero, personal About. Jack's decision: **the website is about the company; Instagram and other
social channels carry Jack as the personal brand.** The site flips from personal anchor to
company front door.

## North Star for this site

A one-page company front door at jco.ventures that a stranger — prospect, partner, bank,
accountant or curious follower — can read in two minutes and conclude: *this is a real Melbourne
company, it ships finished things, here is what it houses, here is how to reach it, and there is
a human founder behind it worth following.*

## Decisions (made 2026-08-07, this conversation)

- **Audience/purpose:** marketing hub + portfolio holding hybrid. Human and personal in tone;
  the company is the subject.
- **Portfolio shown:** Magpie Net (→ magpienet.com), Instruments/sensing line (described
  generically — **no MicroVibe naming** until trademark/FTO clears), and a reserved "next line"
  card. **Holistic stays off the site.**
- **Jack on the page:** a founder section — the company introducing its founder — linking out to
  Instagram + existing channels ("follow the person"). Email signup stays (Substack embed) as the
  owned channel, framed as the company build log written by Jack.
- **Contact:** `hello@jco.ventures`, to be created via Cloudflare Email Routing (forward to
  Jack's Gmail). Requires Cloudflare access (Jack has offered) and destination-address
  confirmation click.
- **Approach:** company-first rebuild of the single static page. Same repo, GitHub Pages deploy,
  no build step.
- **Visual bar (Jack, 2026-08-07):** the visuals must be materially better than v1 — "highly
  professional and modern with great visuals and also personal." Method: build, screenshot at
  mobile and desktop widths, and evaluate honestly against some of the most visually compelling
  sites (e.g. Linear, Stripe, Vercel-tier craft); iterate until the comparison is not
  embarrassing. v1's technical/blueprint character (mono type, drafting title block) may be kept
  as a distinctive foundation, but only where it survives that comparison.

## Page architecture

1. **Header** — wordmark J & CO VENTURES; nav: Portfolio · How we work · Founder · Contact.
2. **Hero** — company voice, warm: "A Melbourne venture company. We build instruments that give
   individuals and small organisations capability only institutions could afford." CTAs: work
   with us (→ contact) and see the portfolio. Bench readout tile stays, reframed as the
   instruments line's bench feed, still labelled SIMULATED until Object 01 ships.
3. **Portfolio** — the three cards listed above.
4. **How we work** — the six-week finished-object cadence restated as company discipline:
   finished, documented, usable by a stranger; real measurements, real costs, honest limits.
5. **Founder** — 2–3 sentences on Jack, company framing; links: Instagram `j_co_adventures`
   (supplied by Jack 2026-08-07; verify the URL resolves before publish), GitHub
   `jackpertzel-ai`, LinkedIn `/in/pertzel`, Substack `jackpertzel.substack.com`.
6. **Subscribe** — Substack embed, company build-log framing.
7. **Contact** — business enquiries → hello@jco.ventures.
8. **Footer** — drafting title block (entity J & Co Ventures Pty Ltd, Melbourne, REV B · 2026);
   fine print: sensor readings are measurements, not health advice.

## Metadata

- `<title>` and OG tags become company-first ("J & Co Ventures — …").
- JSON-LD becomes **Organization** with a nested **founder Person** (Jack) carrying the `sameAs`
  profile links — this preserves personal search findability on a company page.

## What leaves the page

- The Writing/essays section (personal — lives on Substack, linked from the founder block).
- "I build…" voice throughout; Jack's name as page title and masthead.

## Repo contract retrofit (same slice)

Add minimal Contract v1 files: `PROJECT.json` (`project_id: "jco-ventures"`), `NORTH_STAR.md`
(the North Star above + finish line), `NEXT.md`, `AGENTS.md` (verify command, no-push-without-
approval, no-MicroVibe/no-Holistic/no-Coco/no-health-claims content rules).

## Out of scope

Holistic anywhere on the page · Coco in the public story · MicroVibe naming · hosting/DNS changes
beyond the Email Routing records · Instagram content strategy (brand-repo conversation) ·
recording the site-vs-socials brand split in `~/brand` (flagged as a follow-up for the next brand
session so the brand repo stays the owner of brand facts).

## Verification and publishing gates

1. Build locally; open the page in a real browser; check ~375px and desktop widths.
2. Jack reviews the rendered page.
3. **Push/deploy only on Jack's separate explicit go** — deploying is publishing.
4. After deploy: load https://jco.ventures, confirm new title and content live.
5. Email: send a test message to hello@jco.ventures, confirm it lands in Gmail.

## Open items

- Cloudflare access for Email Routing — Jack to grant when we reach that step.
