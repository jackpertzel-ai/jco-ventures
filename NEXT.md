# NEXT — jco-ventures

- **Capability:** Company-first website (v2 redesign, spec:
  `docs/superpowers/specs/2026-08-07-company-first-site-design.md`)
- **Slice:** Rebuild `index.html` company-first with upgraded visuals
- **Finish-line movement:** page exists and is locally verified (screenshots at 375/1440,
  benchmarked against Linear/Stripe); **not pushed, not deployed** — live site still serves v1

## Single next action

Show Jack the rendered page; on his approval: set up Cloudflare Email Routing for
hello@jco.ventures (needs his Cloudflare access), then push `main` to deploy (needs his explicit
go), then verify https://jco.ventures live and test-email hello@.

## Decisions and hazards that remain open

- hello@jco.ventures appears on the page but does not receive mail until Cloudflare Email Routing
  is configured — do not deploy before routing works or the address bounces.
- CLAUDE.md tool adapter not yet added (trivial, add with next slice).
- Record the site-vs-socials brand split in `~/brand` at the next brand session.

## Current approval boundary

Approved: local implementation of the approved spec, including visual iteration. NOT approved:
pushing `main`, deploying, DNS/email changes, or any public surface change — each needs Jack's
explicit go this session.
