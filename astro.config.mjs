import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

const SITE_URL = 'https://tiwarivivek22.github.io';
const BASE_PATH = '/PromiseMe';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      serialize(item) {
        return {
          ...item,
          changefreq: 'weekly',
          priority: item.url === `${SITE_URL}${BASE_PATH}/` ? 1.0 : 0.8,
        };
      },
    }),
    robotsTxt({
      host: 'tiwarivivek22.github.io',
      sitemap: `${SITE_URL}${BASE_PATH}/sitemap-index.xml`,
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});