# Workflow

## Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev
```

## Adding Content

### Blog Post
Create a new `.mdx` file in `src/content/blog/`:
```yaml
---
title: "Post Title"
description: "Short description"
date: 2024-01-15
tags: ["tag1", "tag2"]
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
tags: ["tag1", "tag2"]
date: 2024-01-15
---
Detailed project write-up here.
```

## Building

```bash
npm run build    # Build for production
npm run preview  # Preview the build locally
```

## Deployment

This site is configured for Vercel. Connect your GitHub repo to Vercel for automatic deploys on push to `main`.

## Enabling CI/CD

The `.github/workflows/deploy.yml` file is commented out by default.

To enable:
1. Go to your Vercel dashboard and note your `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`
2. Add these as secrets in your GitHub repo settings (Settings > Secrets > Actions)
3. Uncomment the workflow file
4. Push to trigger the pipeline
