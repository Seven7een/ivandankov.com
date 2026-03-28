# ivandankov.com

Personal portfolio and blog for Ivan Dankov — a directory-style site with high information density, dark muted palette, and a technical blog.

**Live:** [ivandankov.com](https://www.ivandankov.com)

## Tech Stack

- [Astro v5](https://astro.build/) — Static site generation
- [Tailwind CSS v4](https://tailwindcss.com/) — Styling via `@tailwindcss/vite` plugin
- [MDX](https://mdxjs.com/) — Content collections for blog posts and projects
- [React](https://react.dev/) — Interactive islands (search, media carousel)
- [Pagefind](https://pagefind.app/) — Client-side search indexed at build time
- [Vercel](https://vercel.com/) — Hosting, serverless functions, analytics
- [Nodemailer](https://nodemailer.com/) — Contact form via Gmail SMTP

## Getting Started

```bash
git clone https://github.com/Seven7een/ivandankov.com.git
cd ivandankov.com
cp .env.example .env    # Fill in Gmail credentials for contact form
npm install
npm run dev             # Astro dev server (HTTPS if DEV_TLS_* set in .env)
npm run dev:full        # Includes serverless functions (requires vercel CLI)
npm run build           # Production build + Pagefind indexing
```

## Project Structure

```
src/
  components/       # Astro components (Header, Footer, Card, BadgeBar, BentoGrid, SkillsMap)
    ui/             # React islands (MediaCarousel)
  content/
    blog/           # MDX blog posts
    projects/       # MDX project entries
  layouts/          # Global layout
  pages/            # All routes (home, about, projects, pulse, search, tags, 404)
  styles/           # Tailwind v4 theme and dark palette
  consts.ts         # Centralised site config
api/
  contact.ts        # Vercel serverless function for contact form
public/assets/      # Images, videos, demo gifs
```

## Environment Variables

See `.env.example`. Required for the contact form:

- `GMAIL_USER` — Gmail address
- `GMAIL_APP_PASSWORD` — Google App Password
- `CONTACT_EMAIL` — Where form submissions are delivered

## Deployment

Deploys automatically to Vercel on push to `main`. CI runs a build check on every push and PR.

Custom domain managed via Cloudflare DNS. Email routing (`contact@ivandankov.com`) handled by Cloudflare Email Routing.

## AI-First Workflow

This project was scaffolded by [The Forge](https://github.com/seven7een/the-forge) and uses structured documentation for AI-assisted development:

- `CLAUDE.md` — Instructions and conventions for AI agents
- `docs/SPEC.md` — What the project should do
- `docs/STATE.md` — Current progress and blockers
- `docs/WORKFLOW.md` — How to develop, test, and deploy
