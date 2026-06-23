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

Supported starter icon names are `radar` and `reviews`; add additional inline
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
