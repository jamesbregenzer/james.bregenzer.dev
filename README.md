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
