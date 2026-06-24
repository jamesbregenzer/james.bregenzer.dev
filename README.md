# james.bregenzer.dev

An atmospheric, layered internet observatory for James Bregenzer.

The site is intentionally dependency-free. The homepage uses a clean empty-room
background plus separate transparent assets for every interactive object and
the standing Keeper. Smoke, weather, lantern light, and terminal activity are
generated as separate HTML/CSS effect layers. Object labels are discovered on
hover or keyboard focus on desktop.

Foreground artwork is stored as high-resolution transparent PNG layers under
`assets/img/`; the room uses an optimized WebP layer. The room and objects
remain fixed while only restrained ambient effects animate.

All pages use the same hamburger-triggered terminal navigation. The homepage is
a full-screen observatory without footer navigation. Interior pages use the
same palette, menu, and breadcrumb system. Projects renders archive-style
records from local structured content without a framework or build step.

## Observatory design system

The visual language is a research station rather than a conventional portfolio
or product interface. Near-black surfaces, low-contrast engraved artwork,
observatory green type, tarnished amber highlights, thin rules, scanlines, and
monospaced typography establish the shared system. Content should feel found
inside a working observatory: purposeful, compact, atmospheric, and legible.

Avoid generic card grids, bright marketing sections, large rounded containers,
dashboard controls, screenshots used as decoration, and ornamental elements
that do not support the research-station metaphor. The shared color tokens and
base typography live at the top of `assets/styles.css`.

## Interior page architecture

Interior pages use `body.interior`, an `.interior-shell`, and the shared
`assets/navigation.js` terminal menu. Each page supplies one focused content
composition inside the shell. The Projects implementation uses:

1. `.projects-frame` for the bordered observatory surface.
2. `.projects-intro` for breadcrumbs, title, telemetry, subtitle, and header art.
3. `.projects-workspace` for the atmospheric artwork and record list.
4. `.project-list` for text-first, data-rendered archive entries.

The Keeper artwork is decorative and faded behind the records. Mobile reduces
its visual weight so it does not push project content down.

## Project record architecture

Projects are archive records, not cards. `assets/projects.js` reads
`content/projects/projects.json` and renders one `.project-record` per project
with a custom inline SVG icon, title, compact status, description, technology
tags, and a right-aligned external action. Screenshots and preview thumbnails
are intentionally excluded.

Supported status treatments are Active, Maintained, and In Progress.

## Navigation conventions

Every page loads `assets/navigation.js`. It injects one keyboard-accessible
hamburger and terminal panel containing Observations, Projects, Logbook,
Archive, and Experiments. Escape and outside clicks close the panel, focus is
trapped while open, and body scrolling is locked. Do not add page-level footer
navigation or duplicate menu markup.

## Artwork usage

Page artwork lives in `assets/img/`. Interior artwork should be dark at its
outer edges so it can be blended with masks and gradients rather than presented
as a standalone rectangle. Artwork is decorative unless it communicates unique
content, in which case provide meaningful alternative text. Keep visual effects
subtle and honor `prefers-reduced-motion`.

The homepage uses `room-background-phase5.webp`, an empty architectural layer
with a plain right wall, plus separate desk, telescope, archive, door, and
`keeper-standing-phase5.webp` foreground layers. The Projects page uses
`projects-researcher.webp` as faded decorative context and
`projects-observatory.webp` in the header.

## Breadcrumb standards

Breadcrumbs appear first on every interior page. Use small uppercase text,
muted observatory green, and the single `›` separator with consistent spacing.
Include the current page as the final segment with `aria-current="page"`.

The Projects page uses: `OBSERVATORY › WORKBENCH`

## Project data workflow

The project list is intentionally data-driven and build-free:

1. Edit `content/projects/projects.json`.
2. Set `title`, `slug`, `status`, `order`, `description`, `tags`, and `icon`.
3. Set `url` or `repo` to the external destination used by Open Project.
4. Add or update the matching markdown source under `content/projects/` when a
   longer project record exists.
5. Preview at desktop and mobile widths before publishing.

## Adding a project

Project metadata lives in `content/projects/projects.json`. Add a new object
with these required fields:

- `title`
- `slug`
- `status`
- `order`
- `description`
- `tags`
- `icon`
- `url` or `repo`

Create a matching markdown file at `content/projects/{slug}.md` using the same
frontmatter. The markdown files are the future source for longer project
details, while the JSON file provides no-build listing data to the browser.

Project records should link directly to the live tool, project homepage, or
repository. The current static architecture intentionally avoids runtime
markdown parsing and keeps Cloudflare Pages deployment build-free.

## Local preview

From the repository root:

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

- Platform: Cloudflare Pages
- Build command: none
- Output directory: `/`
- Production branch: `main`
