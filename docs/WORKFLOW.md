# Workflow

## Development

```bash
npm install              # Install dependencies
npm run dev              # Dev server at http://localhost:4321
```

## Build & Preview

```bash
npm run build            # Production build (includes Pagefind indexing)
npm run preview          # Preview production build locally
```

---

## Adding Content

### Blog Post

Create a new `.mdx` file in `src/content/blog/`:

```yaml
---
title: "Post Title"
description: "Short description"
pubDatetime: 2026-03-21
tags: ["devops", "security"]
featured: false
---

Your content here.
```

### Project

Create a new `.mdx` file in `src/content/projects/`:

```yaml
---
title: "Project Title"
description: "Short description"
problem: "What problem does this solve?"
solution: "How does it solve it?"
tags: ["terraform", "aws"]
pubDatetime: 2026-03-21
featured: false
---

Detailed project write-up here.
```

### Frontmatter Fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | string | yes | Page title and card heading |
| `description` | string | yes | Meta description and card summary |
| `pubDatetime` | date | yes | Publication date |
| `tags` | string[] | yes | Used for filtering and tag pages |
| `featured` | boolean | no | Show on home page highlights |
| `problem` | string | projects only | One-sentence problem statement |
| `solution` | string | projects only | One-sentence solution summary |

---

## Static Assets

Place images, icons, videos, and the resume PDF in `/public/assets/`. Reference them with absolute paths:

```astro
<img src="/assets/headshot.jpg" alt="..." />
```

Note: The CV/resume is not publicly hosted. It is available on request only — direct interested parties to the contact form on the About page.

---

## Site Configuration

All site-wide config lives in `src/consts.ts`:

- `SITE` — title, description, author, base URL
- `NAV_LINKS` — header navigation items
- `SOCIAL_LINKS` — footer/contact social profiles

Do not scatter config across files.

---

## Deployment

This site deploys to **Vercel**. Connect the GitHub repo to Vercel for automatic deploys on push to `main`.

Security headers are configured in `vercel.json`.

## Enabling CI/CD

The `.github/workflows/deploy.yml` file is commented out by default.

To enable:

1. Go to your Vercel dashboard and note your `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`
2. Add these as secrets in your GitHub repo settings (Settings > Secrets > Actions)
3. Uncomment the workflow file
4. Push to trigger the pipeline

---

## Pre-commit Hooks

A **gitleaks** pre-commit hook scans every commit for secrets. If it flags something:

1. Remove the secret from the file
2. Move the value to an environment variable (add to `.env`, reference in `.env.example`)
3. Re-stage and commit

Never bypass the hook.
