# james.bregenzer.dev

An atmospheric pixel-horror developer observatory for James Bregenzer.

The site is intentionally dependency-free: semantic HTML, organized CSS, and a
local pixel-art environment asset. Navigation is embedded in the observatory
scene on desktop and becomes a clear stacked list on mobile.

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
