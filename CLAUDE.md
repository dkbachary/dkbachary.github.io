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
- Drafts go in `_drafts/` - not published until moved to `_posts/`
- Do not change `url: "https://dkbachary.github.io"` in `_config.yml`
- Chirpy has strict front matter requirements - check existing posts before creating new ones
- Do not commit a macOS-generated `Gemfile.lock` - Ruby version mismatch will break CI (CI uses Ruby 3.3)
- Public technical blog - keep content accurate and professional

## Bhargav Prose Typography
- Sentence dashes: Use spaced ASCII hyphens (` - `) rather than em-dashes (`—`) or en-dashes (`–`).
- Numeric ranges & technical compounds: Use ASCII hyphens (`-`) without spaces (e.g., `20-40`, `CPU-GPU`).
- Ellipses: Use three ASCII periods (`...`) rather than unicode ellipsis characters (`…`).
- Header & list styling: Avoid decorative emojis in section headings (e.g., `🍏`, `⚙️`, `🔥`, `❄️`, `🧠`, `📣`) and bullet lists (e.g., `✅`). Keep structure clean, technical, and professional.
- Privacy baseline: Never commit precise residential street/apartment addresses or personal phone numbers. Keep public location broad (e.g., Bengaluru, Karnataka, India).

## Git Safety
- Never run destructive git commands: avoid `git checkout .`, `git reset --hard`, and `git clean -fd`.
- Explicit staging only: Stage files explicitly by path (`git add <path>`). Never use `git add .` or `git add -A`.
- Diff hygiene: Always run `git diff --check` to ensure no whitespace errors, unresolved conflict markers, or unintended modifications.
- Local verification: Verify the build with `bash tools/test.sh` before committing and pushing.
- Commit scope: Keep commits atomic, well-documented, and scoped to specific cleanup or feature goals.


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
