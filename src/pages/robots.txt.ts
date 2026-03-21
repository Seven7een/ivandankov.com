import type { APIRoute } from 'astro';
import { SITE } from '@/consts';

export const GET: APIRoute = () => {
  const sitemapURL = new URL('sitemap-index.xml', SITE.website);
  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`,
    { headers: { 'Content-Type': 'text/plain' } },
  );
};
