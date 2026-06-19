# james.bregenzer.dev

An atmospheric, layered pixel-horror developer observatory for James Bregenzer.

The site is intentionally dependency-free. The homepage uses an empty-room
background plus separate transparent assets for every navigation object, the
Whisperer, and its wisp effect. Labels are discovered on hover or keyboard focus
on desktop; mobile uses a clear stacked navigation list.

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
