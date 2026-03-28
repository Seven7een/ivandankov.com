import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import { SITE } from './src/consts';

const isDev = process.env.NODE_ENV !== 'production';
const env = loadEnv(isDev ? 'development' : 'production', process.cwd(), '');

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
  ...(isDev && env.DEV_HOST ? {
    server: {
      host: env.DEV_HOST,
    },
  } : {}),
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    plugins: [tailwindcss()],
    ...(isDev && env.DEV_TLS_KEY && env.DEV_TLS_CERT ? {
      server: {
        https: {
          key: fs.readFileSync(env.DEV_TLS_KEY),
          cert: fs.readFileSync(env.DEV_TLS_CERT),
        },
      },
    } : {}),
  },
});
