// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://lhgdev.netlify.app',
  image: {
    domains: []
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: false,
    }
  },

  integrations: [icon({
    include: {
      ri: ['*']
    }

  }
  ), sitemap()]
});