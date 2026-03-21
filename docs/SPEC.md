# Project Spec: IvanDankov.com

## Purpose

A high-performance, directory-style portfolio site for a DevSecOps/Automation Engineer. The design language draws from internal corporate directory tools — high information density, clean layouts, system-native fonts — blended with a minimalist technical blog aesthetic.

**Host:** Vercel (Hobby Tier) | **Framework:** Astro v5 (SSG)

---

## Technical Stack & Architecture

- **Framework:** Astro v5, Static Site Generation, content collections with `glob` loader
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin. System-native fonts, high information density
- **Search:** Pagefind (indexed at build time via `npm run build`)
- **Content:** MDX for Projects and Blog/Pulse entries with typed frontmatter schemas
- **Components:** Astro components for static content, React islands for interactive elements (search, demos)
- **Integrations:** `@astrojs/mdx`, `@astrojs/react`, `@astrojs/sitemap`, `@astrojs/rss`
- **Config:** Centralized in `src/consts.ts` (site title, author, nav links, social links). Path alias `@` -> `/src`
- **Deployment:** Vercel with security headers (`vercel.json`)
- **CI/CD:** GitHub Actions workflow (commented out by default per Forge convention)

---

## Sitemap & Page Logic

### A. Home (The Dashboard) — `src/pages/index.astro`

- **Hero:** Left-aligned professional headshot; right-aligned name, title, and location
- **Badge Bar:** Clean horizontal flex-row of certification badges below the hero. Badge images are fetched directly from public Credly URLs (not stored locally) and each badge hyperlinks to its Credly verification page. Badge URLs configured in `src/consts.ts`
- **Quick Stats:** "Bento Box" grid showing "Current Stack," "Primary Focus (DevSecOps)," and "Latest Win"
- **Featured Highlights:** 2-3 featured project cards (extend `featured` frontmatter field to projects)

### B. About (The Narrative) — `src/pages/about.astro`

- **The Story:** Long-form professional journey and technical philosophy
- **Skills Mapping:** Categorized list of skills (e.g., "Infrastructure as Code," "Security Scanning"). Each skill links to `/tags/<skill>` to show related projects/posts
- **Contact Form:** A form that sends an email to the site owner. Use a serverless-friendly email service (e.g., Formspree, Resend, or Vercel serverless function). No resume download link — CV is available on request only via the contact form

### C. Projects (The Gallery) — `src/pages/projects.astro`

- **Search/Filter:** Pagefind search bar at the top (consider inline search component)
- **Card Design:** Title, "Problem/Solution" 2-sentence summary, and tech tags
- **Deep Dive (MDX):** `src/pages/projects/[...slug].astro` renders individual project pages with problem/solution frontmatter

### D. Pulse (Blog + Interests) — `src/pages/pulse.astro`

- **Status Header:** A "Currently Learning/Pursuing" section for micro-updates
- **The Feed:** Combined list of technical blog posts and interest pieces
- **Search:** Shared Pagefind search

### E. Already Provided by Template

- Tags listing and filtered tag pages (`/tags`, `/tags/[tag]`)
- RSS feed (`/rss.xml`)
- Search page (`/search`)
- 404 page
- Robots.txt with sitemap reference
- Sitemap generation

---

## Visual Requirements (Tailwind v4)

- **Palette:** Dark mode by default. Muted, low-contrast dark backgrounds (dark grays/slate, not pure black) with soft text tones. Professional but mellow — avoid harsh white-on-black. Subtle accent color (muted blue or slate) for links and interactive elements
- **Typography:** System-native fonts (system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Responsiveness:** Mobile-first, but optimized for desktop "directory" density
- **Interactivity:** Lightweight video players or optimized GIFs for project demos (React islands)

---

## Custom Components

| Component | Purpose |
|---|---|
| `BadgeBar.astro` | Certification badges fetched from public Credly image URLs, each linking to its verification page |
| `BentoGrid.astro` | Quick stats dashboard grid on home page |
| `SkillsMap.astro` | Categorized skills with tag links on about page |

---

## Directory Structure

Project-specific additions marked with `+`.

```text
/src
  /components
    Header.astro          # Site navigation (update NAV_LINKS in consts.ts)
    Footer.astro          # Site footer
    Card.astro            # Reusable card (title, description, tags, date)
    /ui/
  + BadgeBar.astro        # Credly certification badges
  + BentoGrid.astro       # Quick stats dashboard grid
  + SkillsMap.astro       # Categorized skills with tag links
  /content
    content.config.ts     # Collection schemas (blog + projects)
    /blog/                # MDX files (title, description, pubDatetime, tags, featured)
    /projects/            # MDX files (+ problem, solution fields)
  /layouts
    Layout.astro          # Global layout (head, header, main, footer)
  /pages
    index.astro           # Home dashboard
    about.astro           # Narrative CV
    projects.astro        # Project gallery
    pulse.astro           # Blog feed
    search.astro          # Pagefind search
    404.astro             # Not found
    rss.xml.ts            # RSS feed
    robots.txt.ts         # Generated robots.txt
    /projects/[...slug].astro  # Individual project pages
    /pulse/[...slug].astro     # Individual blog posts
    /tags/index.astro          # All tags
    /tags/[tag].astro          # Filtered by tag
  /styles
    global.css            # Tailwind v4 base (@import "tailwindcss")
  consts.ts               # Site config (SITE, NAV_LINKS, SOCIAL_LINKS)
/public
  /assets/                # Headshot, demo videos (Credly badges fetched from remote URLs)
  favicon.svg
/docs
  SPEC.md                 # This file
  STATE.md                # Progress tracking
  WORKFLOW.md             # Dev/deploy instructions
vercel.json               # Security headers, Vercel config
astro.config.mjs          # Astro + MDX + Sitemap + React + Tailwind v4
```
