# james.bregenzer.dev

<p align="center">
  <img src="assets/img/banner.png" alt="The Observatory" width="100%">
</p>

<p align="center">

  <img src="https://img.shields.io/badge/Cloudflare_Pages-Deployed-F38020?logo=cloudflare&logoColor=white" alt="Cloudflare Pages">

  <img src="https://img.shields.io/badge/Vanilla-JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="Vanilla JavaScript">

  <img src="https://img.shields.io/badge/No-Build_Step-2E8B57" alt="No Build Step">

  <img src="https://img.shields.io/badge/Responsive-Desktop_%2B_Mobile-3B82F6" alt="Responsive">

  <img src="https://img.shields.io/badge/Accessibility-WCAG_Focused-5B21B6" alt="Accessibility">

</p>

An atmospheric personal site and portfolio presented as a small internet observatory.

The site is intentionally static, lightweight, and dependency-free. The homepage
is a layered observatory scene with separate foreground objects for the desk,
telescope, archive cabinet, experiments door, and the standing Keeper. The
objects function as spatial navigation on desktop, while the hamburger-triggered
terminal menu provides the primary navigation system across all pages.

The site is not a conventional portfolio template. It is intentionally closer to a 
small interactive art project that happens to contain a portfolio, project records,
notes, experiments, and future activity feeds.

## Current site structure

- `/` — atmospheric observatory homepage.
- `/projects/` — archive-style records for selected projects.
- `/observations/` — placeholder interior page for future signals, activity, or contribution feeds.
- `/logbook/` — placeholder interior page for future notes or recent activity.
- `/archive/` — placeholder interior page for older notes, references, or saved material.
- `/experiments/` — placeholder interior page for prototypes, side projects, and unfinished ideas.

The homepage navigation objects map to those sections:

- Telescope → Observations
- Desk / workstation → Projects
- Terminal hotspot → Logbook
- Archive cabinet → Archive
- Door → Experiments

The hamburger menu contains the same navigation destinations and is used
site-wide.

## Design direction

The visual system is a gothic observatory / terminal interface, not a normal
marketing website. The goal is to feel memorable, mysterious, polished, and
surprisingly functional.

The shared design language uses:

- near-black surfaces
- observatory green terminal text
- muted gold and amber highlights
- thin borders and small labels
- subtle scanline texture
- restrained atmospheric motion
- monospaced typography
- layered transparent artwork
- dark fantasy / research station cues

This site purposefully avoids generic portfolio cards, bright marketing sections, dashboard UI,
unnecessary screenshots, heavy rounded containers, and decorative elements that
do not support the observatory metaphor.

The shared color tokens and base typography live near the top of
`assets/styles.css`.

## Homepage architecture

The homepage is a single observatory scene.

Core elements:

- `room.webp` — empty architectural room background.
- `workstation.png` — desk/workstation foreground object.
- `telescope.png` — telescope foreground object.
- `archive.png` — archive cabinet foreground object.
- `door.png` — experiments door foreground object.
- `keeper-standing-phase5.webp` — standing Keeper foreground artwork.

The homepage intentionally has no footer navigation. It uses:

- text-only `james.bregenzer.dev` identity in the upper-left corner
- hamburger menu in the upper-right corner
- object-based scene navigation on desktop
- simplified scene behavior at narrower widths

The Keeper is decorative and non-interactive. The telescope, desk, archive
cabinet, door, and terminal hotspot are the interactive desktop navigation
targets.

At compact widths, some foreground objects are intentionally hidden so the room
simplifies to the Keeper and telescope instead of trying to preserve every
desktop object in a crowded viewport.

## Navigation

Every page loads `assets/navigation.js`.

The script injects a keyboard-accessible hamburger button and a terminal-style
menu panel containing:

- Observations
- Projects
- Logbook
- Archive
- Experiments

Navigation behavior:

- Escape closes the menu.
- Outside click closes the menu.
- Focus is managed while the menu is open.
- Body scrolling is locked while the menu is open.
- The same menu is used on homepage and interior pages.

Do not add duplicate footer navigation or separate page-level nav systems.

## Interior pages

Interior pages use the shared `body.interior` layout and terminal menu.

Current interior pages are intentionally simple shells, with Projects being the
most developed page. The other sections can be expanded later without changing
the global navigation system.

Interior pages should remain:

- readable
- useful
- atmospheric
- connected to the observatory
- more content-focused than the homepage

The interior-page system should not become a generic dashboard, blog template,
or marketing landing page.

## Projects page

The Projects page renders archive-style project records from local structured
data.

The current implementation uses:

- `assets/projects.js`
- `content/projects/projects.json`
- optional markdown source files in `content/projects/`

Project records are not screenshot cards and do not currently have individual
project detail pages. Each record should link directly to an external project,
tool, repository, or live site.

The old `/projects/{slug}/` detail-page approach has been intentionally removed
to reduce maintenance overhead.

## Project data workflow

To add or update projects:

1. Edit `content/projects/projects.json`.
2. Add or update:
   - `title`
   - `slug`
   - `status`
   - `order`
   - `description`
   - `tags`
   - `icon`
   - `url` or `repo`
3. Add or update a matching markdown file in `content/projects/` only if useful
   for future reference.
4. Preview `/projects/` locally.
5. Confirm the project record links directly to the intended external
   destination.

The JSON file is the current source used by the browser-rendered project list.
Markdown files are supporting source/reference material, not active detail-page
routes.

Supported status treatments may include:

- Active
- Maintained
- In Progress
- Experimental
- Archived

## Project record conventions

Projects should read like concise archive records.

Each project should include:

- clear title
- short status
- practical description
- relevant technology tags
- one direct action link

Do not add screenshots or preview thumbnails unless the Projects page is
intentionally redesigned later.

## Artwork usage

Artwork lives in `assets/img/`.

Guidelines:

- Keep homepage objects as separate transparent foreground assets.
- Keep the room background as architecture only.
- Avoid baking duplicate furniture, doors, cabinets, or interactive objects into
  the background.
- Use decorative artwork sparingly on interior pages.
- Fade decorative interior artwork into the background instead of presenting it
  as a hard rectangular image.
- Provide meaningful alt text only when the artwork communicates content.
- Honor `prefers-reduced-motion`.

## Breadcrumb standards

Breadcrumbs appear first on interior pages.

Use:

- small uppercase text
- muted observatory green
- the `›` separator
- `aria-current="page"` for the current page

Example:

```text
OBSERVATORY › PROJECTS
```

## Local preview

From the repository root:

```sh
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Deployment

- Platform: Cloudflare Pages
- Build command: none
- Output directory: `/`
- Production branch: `main`

The site should remain build-free unless there is a strong reason to introduce a
build step later.

## Maintenance notes

When making homepage scene changes:

- Avoid broad redesigns once object placement is approved.
- Prefer small CSS-only adjustments where possible.
- Test desktop, narrow desktop, tablet, and mobile widths.
- Confirm hover labels appear above foreground artwork.
- Confirm the compact scene hides crowded objects as intended.
- Clear cache or bump query strings when needed during deployment testing.

When making Projects changes:

- Update `content/projects/projects.json`.
- Keep project records external-link focused.
- Do not recreate individual project detail folders unless the architecture is
  intentionally changed.
