# james.bregenzer.dev

Public development terminal and project hub.

This site is intentionally built as a static Cloudflare Pages project. The homepage is designed as a retro terminal-inspired operations dashboard for projects, activity, signals, and experiments.

## Live surfaces

- Developer hub: https://james.bregenzer.dev
- WP Core Radar: https://radar.james.bregenzer.dev
- Source: https://github.com/jamesbregenzer/james.bregenzer.dev

## Structure

```text
/
├── index.html
├── projects/
├── project/radar/
├── activity/
├── now/
├── uses/
└── assets/styles.css
```

## Deployment

Hosted on Cloudflare Pages with no build step.

Set the Pages build command to blank and the output directory to the repository
root. Static assets live under `/assets/`; `_headers` keeps them revalidated so
HTML and CSS releases cannot drift behind Cloudflare's browser cache.

For a local preview, serve the repository root with any static file server, for
example:

```sh
python3 -m http.server 8080
```
