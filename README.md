# james.bregenzer.dev

An atmospheric, layered internet observatory for James Bregenzer.

The site is intentionally dependency-free. The homepage uses an empty-room
background plus separate transparent assets for every navigation object and the
Whisperer. Smoke, weather, lantern light, and terminal activity are generated
as separate HTML/CSS/SVG effect layers. Labels are discovered on hover or
keyboard focus on desktop; mobile uses a clear stacked navigation list.

Foreground artwork is stored as high-resolution transparent PNG layers under
`assets/img/`; the room uses an optimized WebP layer. The room and objects
remain fixed while only restrained ambient effects animate.

Interior pages use the same observatory palette, compact site-wide footer, and
breadcrumb system. The Projects page renders archive-style records from local
structured content without a framework or build step.

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
`data-site-footer` mount. Each page supplies one focused content composition
inside the shell. The Projects implementation uses:

1. `.projects-frame` for the bordered observatory surface.
2. `.projects-intro` for breadcrumbs, title, telemetry, subtitle, and header art.
3. `.projects-workspace` for the atmospheric artwork and record list.
4. `.project-list` for data-rendered archive entries.

Desktop interiors reserve meaningful space for artwork. Mobile layouts move
the artwork above the records and reduce its contrast rather than removing it.

## Project record architecture

Projects are archive records, not cards. `assets/projects.js` reads
`content/projects/projects.json` and renders one `.project-record` per project
with a glyph, title, compact status, description, technology tags, and a
right-aligned action. Records use horizontal separators and share one continuous
surface. Do not add screenshots, preview thumbnails, or independent card
backgrounds.

Supported status treatments are Active, Maintained, and In Progress. New glyphs
are inline SVG definitions in `assets/projects.js` so they remain crisp and use
the current page color.

## Footer conventions

Every page mounts the exact same footer component from `assets/footer.js`.
Do not duplicate footer markup in page templates. The footer always contains
the five observatory destinations and the protocol label; active-page state is
derived from `window.location.pathname`. Height, spacing, typography, borders,
and responsive behavior are defined once in `assets/styles.css`.

## Artwork usage

Page artwork lives in `assets/img/`. Interior artwork should be dark at its
outer edges so it can be blended with masks and gradients rather than presented
as a standalone rectangle. Artwork is decorative unless it communicates unique
content, in which case provide meaningful alternative text. Keep visual effects
subtle and honor `prefers-reduced-motion`.

The Projects page uses `projects-researcher.webp` for the left workbench scene
and `projects-observatory.webp` for the upper-right observatory structure.

## Breadcrumb standards

Breadcrumbs appear first on every interior page. Use small uppercase text,
muted observatory green, and the single `›` separator with consistent spacing.
Include the current page as the final segment with `aria-current="page"`.

Example: `OBSERVATORY › WORKBENCH › PROJECTS`

## Project data workflow

The project list is intentionally data-driven and build-free:

1. Edit `content/projects/projects.json`.
2. Set `title`, `slug`, `status`, `order`, `description`, `tags`, and `icon`.
3. Add `url` only when the View Project action should bypass the local detail
   route.
4. Add or update the matching markdown source under `content/projects/` when a
   longer project record exists.
5. Add a local detail page under `projects/{slug}/index.html` when the project
   should remain inside the observatory.
6. Preview at desktop and mobile widths before publishing.

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

Supported starter icon names are `radar`, `audit`, and `reviews`; add additional inline
SVG icon definitions in `assets/projects.js` when introducing a new icon.

Create a matching markdown file at `content/projects/{slug}.md` using the same
frontmatter. The markdown files are the future source for longer project
details, while the JSON file provides no-build listing data to the browser.

If the project has a detail page, add it at `projects/{slug}/index.html`. The
current static architecture intentionally avoids runtime markdown parsing and
keeps Cloudflare Pages deployment build-free.

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
