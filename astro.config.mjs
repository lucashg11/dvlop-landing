// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dvlop.agency',
  image: {
    domains: ["images.unsplash.com"]
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon({
    include: {
      ri: ['*']
    }

  }
  ), sitemap()]
});