# jco.ventures

Source for [jco.ventures](https://jco.ventures) — Jack Pertzel / J & Co Ventures Pty Ltd.

A static site (home page plus `/lab/`), no build step. Deployed with GitHub Pages.

The lab collection is `/lab/`. Its first project has an overview at `/lab/ecgfounder/` and a
weekly journal at `/lab/ecgfounder/journal/`. Existing dated posts retain their original URLs.
`NEXT.md` records what is local, published, approved and next; the current prototype branch is
not automatically published.

Each published weekly post ends with the shared `.week-navigation` controls: previous published
week, back to the weekly journal, and next published week. When publishing a new week, update the
previous entry's next link and add the new entry's previous link together. Keep first/latest states
as explanatory text, never links to drafts or missing pages. Preserve the existing post URLs and
check this reading sequence on a phone and with JavaScript disabled.
