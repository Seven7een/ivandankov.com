# Project AI Agent Instructions

## Forge Conventions

This project was scaffolded by [The Forge](https://github.com/seven7een/the-forge) and follows its conventions:

- **Priority order:** Privacy/Security > Functionality > Extensibility > Elegance
- **Never commit:** secrets, API keys, tokens, PII, personal details, .env files
- **Environment variables:** anything that can be an env var must be one. See `.env.example` for required vars.
- `.internal/` is gitignored scratch space for planning docs, experiments, and drafts
- `docs/SPEC.md` — what this project should do (functional requirements)
- `docs/STATE.md` — what's done and what's blocked (update before every commit)
- `docs/WORKFLOW.md` — how to develop, test, and deploy
- CI/CD workflows in `.github/workflows/` are commented out by default. See `docs/WORKFLOW.md` to enable.
- A gitleaks pre-commit hook scans every commit for secrets. Treat findings as hard blockers — fix the issue, never bypass the hook.
- If scope changes, update `docs/SPEC.md` before committing.

## Project Structure

Based on [steipete.me](https://github.com/steipete/steipete.me) patterns.

```
/src
  /components
    Header.astro        # Site navigation
    Footer.astro        # Site footer
    Card.astro          # Reusable card component
    /ui/                # React islands (interactive components)
  /content
    content.config.ts   # Collection schemas (blog, projects)
    /blog/              # MDX blog posts (frontmatter: title, description, pubDatetime, tags)
    /projects/          # MDX project entries (frontmatter: + problem, solution)
  /layouts
    Layout.astro        # Global layout (head, header, footer)
  /pages
    index.astro         # Home (featured + recent posts)
    about.astro         # About page
    projects.astro      # Projects listing
    pulse.astro         # Blog listing
    search.astro        # Pagefind search
    404.astro           # Not found
    rss.xml.ts          # RSS feed
    robots.txt.ts       # Generated robots.txt
    /projects/[...slug].astro  # Individual project pages
    /pulse/[...slug].astro     # Individual post pages
    /tags/index.astro          # All tags
    /tags/[tag].astro          # Posts/projects by tag
  /styles
    global.css          # Tailwind v4 import
  consts.ts             # Centralized site config (SITE, NAV_LINKS, SOCIAL_LINKS)
/public
  /assets/              # Static assets (images, icons, videos)
  favicon.svg
/docs                   # SPEC, STATE, WORKFLOW
vercel.json             # Vercel config with security headers
```

## Tech Stack

- **Framework:** Astro v5 (SSG) with `@astrojs/mdx`, `@astrojs/react`, `@astrojs/sitemap`, `@astrojs/rss`
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin
- **Search:** Pagefind (runs post-build: `npm run build` includes `pagefind --site dist`)
- **Content:** MDX with Astro content collections using `glob` loader
- **Deployment:** Vercel with security headers
- **Path alias:** `@` maps to `/src`

## Build & Run

```bash
npm install           # Install dependencies
npm run dev           # Dev server at http://localhost:4321
npm run build         # Production build (includes pagefind indexing)
npm run preview       # Preview production build
```

## Style

- Use Astro components (`.astro`) for static content
- Use React (`.tsx`) only for interactive islands
- Content collections for blog posts and projects — use `glob` loader pattern
- Tailwind v4 utility classes — import via `@import "tailwindcss"` in `src/styles/global.css`
- All site config in `src/consts.ts` — do not scatter config across files
- Images in `/public/assets/`, referenced via absolute paths
- Sensitive config via environment variables (see `.env.example`)
