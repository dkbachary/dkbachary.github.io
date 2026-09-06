# dkbachary.github.io — Technical Engineering Publication

Production: [https://dkbachary.github.io/](https://dkbachary.github.io/)  
Default Branch: `main`

The technical engineering publication, research archive, and systems performance notebook of **D K Bhargav Achary**. 

This site serves as the high-signal, technical counterpart to [BhargavAchary.in](https://bhargavachary.in/) (personal & creator portfolio), focusing on computer architecture, hardware/software co-design, performance modeling, and AI systems.

---

## Technical Pillars

- **Computer Architecture & Microarchitecture**: Core designs, cache hierarchies, execution pipelines, and ISA developments (x86, ARM, RISC-V, DSP).
- **Systems Performance & Modeling**: Performance monitoring counters (PMC/PMU), roofline modeling, simulation correlation, and workload characterization.
- **Hardware/Software Co-Design & Edge AI**: On-device LLM/DNN inference constraints, memory bandwidth bottlenecks, quantization dynamics (FP16/INT8/INT4), and runtime engines (Core ML, MLX, llama.cpp, ONNX).
- **Interconnects & Memory Systems**: Unified memory architectures, cache coherence, NVLink, CXL, and high-performance fabric behavior.
- **Hardware Security**: Performance counter side-channel attacks and microarchitectural security analysis.
- **Engineering Workflows & Reliability**: System-level resilience, deployment strategies (canary, isolation), and development environments.

---

## Technical Stack & Architecture

- **Engine**: Jekyll 4.4+
- **Theme**: [jekyll-theme-chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) (`~> 6.2`)
- **Runtime**: Ruby 3.3
- **Hosting**: GitHub Pages
- **Continuous Integration & Deployment**: GitHub Actions (`.github/workflows/pages-deploy.yml`)
- **PWA & Search**: Built-in Progressive Web App offline caching and client-side index search

---

## Repository Structure

```text
├── .github/
│   ├── workflows/pages-deploy.yml  # Production CI/CD workflow
│   └── copilot-instructions.md     # AI assistant operational context
├── _config.yml                     # Jekyll and theme site configuration
├── _data/                          # Data files (contact, social links, share)
├── _drafts/                        # Unpublished draft posts and templates
├── _includes/                      # Theme partial overrides & discovery hooks
├── _layouts/                       # Layout overrides (default, post, personal)
├── _plugins/                       # Jekyll plugins (posts-lastmod-hook.rb)
├── _posts/                         # Published technical articles (YYYY-MM-DD-title.md)
├── _tabs/                          # Navigation tabs (About, Resume, Categories, Tags, Archives, Personal)
├── assets/                         # Static assets (CSS, JS, Resume PDF, Avatar)
├── images/posts/                   # Article hero and inline diagram images
├── tools/                          # Local execution and build scripts (run.sh, test.sh)
└── Gemfile                         # Bundler configuration (Gemfile.lock is gitignored)
```

---

## Content Model & Front Matter

Posts are written in standard Markdown and placed in `_posts/YYYY-MM-DD-title.md`. Each post requires Chirpy-compliant front matter:

```yaml
---
layout: post
title: "Article Title Here"
date: YYYY-MM-DD HH:MM:SS +0530
categories: [Primary Pillar, Subtopic]
tags: [tag1, tag2, tag3]
toc: true
description: "Precise, source-backed abstract for SEO and preview cards (150-160 characters)."
image:
  path: /images/posts/your-image.jpg
  alt: "Descriptive alt text for image"
---
```

### Publishing Workflow
1. Draft new technical posts in `_drafts/` using `_drafts/post-template.md`.
2. Verify all quantitative claims against vendor whitepapers, architecture manuals, or empirical benchmarks.
3. Use relative permalinks for internal cross-references (`/posts/:title/`).
4. Move verified drafts into `_posts/` with the publication date in the filename and front matter.

---

## Local Development & Validation

### Prerequisites
- Ruby 3.3+
- Bundler (`gem install bundler`)

### Setup & Installation
Dependencies are configured locally in `vendor/bundle` to avoid polluting the global Ruby environment:

```bash
bundle config set path 'vendor/bundle'
bundle config set without 'development test'
bundle install
```

> **Note:** Never commit a locally generated `Gemfile.lock`. GitHub Actions uses an Ubuntu runner with dynamic dependency resolution. `Gemfile.lock` is intentionally tracked in `.gitignore`.

### Running Local Server
```bash
bash tools/run.sh
```
Access the local preview at `http://127.0.0.1:4000/`.

### Running Test Build
```bash
bash tools/test.sh
```
This runs a clean production-mode Jekyll build (`JEKYLL_ENV=production`) ensuring templates, assets, and permalinks compile with zero errors.

---

## Deployment Pipeline

Deployment is 100% automated:
1. Every commit pushed to `main` triggers the **Build and Deploy** workflow (`.github/workflows/pages-deploy.yml`).
2. GitHub Actions sets up Ruby 3.3, installs gems with caching enabled, compiles the site in production mode, and uploads the artifact.
3. The official GitHub Pages deployment action deploys the site to production.
4. The live site is served with HTTPS and HTTP/2 at [https://dkbachary.github.io/](https://dkbachary.github.io/).

---

## Complementary Sites & Boundaries

| Site | Role | Primary Content |
|---|---|---|
| **[dkbachary.github.io](https://dkbachary.github.io/)** | Technical Engineering Publication | Systems architecture, performance modeling, hardware experiments, accelerators, engineering notes |
| **[bhargavachary.in](https://bhargavachary.in/)** | Personal & Creative Portfolio | Essays, cultural narratives, photography, life observations, personal projects |

---

## License

Content & articles © D K Bhargav Achary. Code and theme components are published under the [MIT License](LICENSE).
