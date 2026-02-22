# Copilot Instructions — dkbachary.github.io

Jekyll technical blog. GitHub Pages. Theme: `jekyll-theme-chirpy ~> 6.2`. Ruby 3.3.

## Stack
- Ruby / Jekyll (no Python, no Node)
- Liquid templates, YAML front matter, Markdown posts

## Rules
- New posts go in `_posts/YYYY-MM-DD-title.md`
- Chirpy front matter required: `title`, `date`, `categories`, `tags`, `author`
- Drafts go in `_drafts/` — not published until moved to `_posts/`
- Do not change `url` in `_config.yml`
- Do not commit a macOS `Gemfile.lock` — CI uses Ruby 3.3
- Keep content technically accurate; this is a public engineering blog

## Content Focus
- Hardware security, side-channel attacks
- Computer architecture (gem5, cache, memory)
- VHDL / FPGA
- ML/AI systems, dev tools
