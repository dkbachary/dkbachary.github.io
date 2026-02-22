# dkbachary.github.io — Claude Context

Technical blog and portfolio — https://dkbachary.github.io
Jekyll site using Chirpy theme. Focus: hardware dev, computer architecture, AI-aware design.

## Stack
- Jekyll + `jekyll-theme-chirpy` ~> 6.2 (Ruby — no conda/Python env needed)
- Timezone: America/Los_Angeles (in `_config.yml` — do not change)
- Deploy: GitHub Actions → `.github/workflows/pages-deploy.yml` (triggers on push to `main`/`master`)

## Structure
```
_posts/         ← blog posts (YYYY-MM-DD-title.md)
_drafts/        ← unpublished drafts (not deployed)
_data/          ← YAML data (locales, contact, share, etc.)
_includes/      ← HTML partials
_layouts/       ← page layouts
_tabs/          ← Chirpy sidebar tab pages (About, Archives, Tags, etc.)
_plugins/       ← custom Jekyll plugins
assets/         ← images, CSS, JS
images/         ← post images
tools/
  run.sh        ← local dev server
  test.sh       ← test build
.devcontainer/  ← VS Code devcontainer (Jekyll image, Ruby 3.3, zsh)
```

## Key Rules
- Posts: `_posts/YYYY-MM-DD-title.md` with Chirpy front matter (`title`, `date`, `categories`, `tags`, `author`)
- Drafts go in `_drafts/` — not published until moved to `_posts/`
- Do not change `url: "https://dkbachary.github.io"` in `_config.yml`
- Chirpy has strict front matter requirements — check existing posts before creating new ones
- Do not commit a macOS-generated `Gemfile.lock` — Ruby version mismatch will break CI (CI uses Ruby 3.3)
- Public technical blog — keep content accurate and professional

## Local Dev
```bash
bash tools/run.sh    # start local Jekyll server
bash tools/test.sh   # test build
```

Alternatively, open in VS Code and use the devcontainer (`.devcontainer/`) for a fully configured environment.

## Deploy
Push to `main` or `master` → GitHub Actions builds and deploys automatically.
Do not manually edit the `gh-pages` branch — CI owns it.

## Content Focus
- Hardware security and side-channel attacks
- Computer architecture (gem5, cache, memory)
- VHDL / FPGA design
- ML/AI systems
- Dev tools and workflow
