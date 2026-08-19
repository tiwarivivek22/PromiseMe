import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

const SITE_URL = 'https://promiseme.dev';

export default defineConfig({
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      serialize(item) {
        return {
          ...item,
          changefreq: 'weekly',
          priority: item.url === SITE_URL ? 1.0 : 0.8,
        };
      },
    }),
    robotsTxt({
      host: 'promiseme.dev',
      sitemap: `${SITE_URL}/sitemap-index.xml`,
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