import type { APIRoute } from 'astro';

const manifest = {
  name: import.meta.env.DEV ? 'IDankov Dev' : 'Ivan Dankov',
  short_name: import.meta.env.DEV ? 'IDankov Dev' : 'Ivan D',
  start_url: '/',
  scope: '/',
  icons: [
    {
      src: import.meta.env.DEV ? '/icon-192-dev.png' : '/icon-192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: import.meta.env.DEV ? '/icon-512-dev.png' : '/icon-512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
  theme_color: '#141419',
  background_color: '#141419',
  display: 'standalone',
};

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json' },
  });
};
