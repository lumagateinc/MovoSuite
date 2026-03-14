# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MovoSuite is the documentation and public-facing repository for "MovoSuite for Microsoft Intune" — a self-service platform for deploying apps to classroom iPads. This repo contains product documentation, legal documents, and sample files.

## Documentation System

The active docs use **Tome** (`tome-docs/`), a React/Vite-based static documentation framework. The legacy Jekyll docs (`docs/`) are still present but no longer deployed.

### Development Commands

All commands run from `tome-docs/`:

```bash
cd tome-docs
npm install          # Install dependencies
npm run dev          # Start dev server (hot reload, typically localhost:3000)
npm run build        # Build static site to tome-docs/out/
```

### Key Files

- `tome-docs/tome.config.js` — Navigation structure, theme settings (accent: `#4fa331`, preset: amber)
- `tome-docs/vite.config.js` — Vite config with `base: "/MovoSuite/"` for GitHub Pages and React optimizeDeps fix
- `tome-docs/pages/` — All documentation content as Markdown files
- `tome-docs/public/` — Static assets (screenshots, icons)

### Routing

Tome uses **hash-based SPA routing** (`#page-id`), not file-path routing:
- Internal links in markdown must use `#page-id` format (e.g., `[link](#config/schedules)`), not relative paths (`./schedules`)
- `pages/config/index.md` becomes page ID `"config"` (the `/index` suffix is stripped)
- Navigation config in `tome.config.js` must reference the stripped IDs (e.g., `"config"` not `"config/index"`)
- Image paths in markdown must include the base path prefix: `![alt](/MovoSuite/image.png)`

### Config Changes Require Restart

Changes to `tome.config.js` are read at Vite startup via virtual modules. You must restart the dev server for config changes to take effect (HMR does not pick them up).

## Deployment

GitHub Actions (`.github/workflows/docs.yml`) automatically deploys to GitHub Pages on push to `master` when `tome-docs/` or the workflow file changes. The site is served at `https://lumagateinc.github.io/MovoSuite/`.

## Repository Structure

- `tome-docs/` — Active Tome documentation site
- `docs/` — Legacy Jekyll documentation (not deployed)
- `samples/` — Sample files (e.g., Excel import template)
- `tos/` — Privacy policy and terms of service
- `images/` — Repository-level assets
