import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import { SITE } from './src/consts';

const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  site: SITE.website,
  output: 'static',
  trailingSlash: 'never',
  markdown: {
    shikiConfig: {
      themes: { light: 'min-light', dark: 'night-owl' },
      wrap: true,
    },
  },
  integrations: [mdx(), sitemap(), react()],
  ...(isDev && process.env.DEV_HOST ? {
    server: {
      host: process.env.DEV_HOST,
    },
  } : {}),
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    plugins: [tailwindcss()],
    ...(isDev && process.env.DEV_TLS_KEY && process.env.DEV_TLS_CERT ? {
      server: {
        https: {
          key: fs.readFileSync(process.env.DEV_TLS_KEY),
          cert: fs.readFileSync(process.env.DEV_TLS_CERT),
        },
      },
    } : {}),
  },
});
