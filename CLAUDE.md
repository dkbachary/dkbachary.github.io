# dkbachary.github.io — Claude Context

Technical blog and portfolio — https://dkbachary.github.io
Jekyll site using Chirpy theme. Focus: hardware dev, computer architecture, AI-aware design.

## Stack
- Jekyll + `jekyll-theme-chirpy`
- Timezone: America/Los_Angeles (in config — do not change)
- Deployed via GitHub Pages

## Structure
```
_posts/         ← blog posts (YYYY-MM-DD-title.md)
_drafts/        ← unpublished drafts
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
.devcontainer/  ← devcontainer config for VS Code
```

## Key Rules
- Posts: `_posts/YYYY-MM-DD-title.md` with Chirpy front matter (`title`, `date`, `categories`, `tags`, `author`)
- Drafts go in `_drafts/` — they are not published until moved to `_posts/`
- Do not change `url: "https://dkbachary.github.io"` in `_config.yml`
- Chirpy has specific front matter requirements — check existing posts as reference
- This is a public technical blog — keep content professional and accurate

## Local Dev
```bash
bash tools/run.sh    # start local Jekyll server
bash tools/test.sh   # test build
```

## Content Focus
- Hardware security and side-channel attacks
- Computer architecture (gem5, cache, memory)
- VHDL / FPGA design
- ML/AI systems
- Dev tools and workflow
