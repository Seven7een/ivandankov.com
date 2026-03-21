import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { SITE } from './src/consts';

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
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    plugins: [tailwindcss()],
  },
});
