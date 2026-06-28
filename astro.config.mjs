import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Project page on GitHub Pages: https://dananzmolt.github.io/pinpoint/
export default defineConfig({
  site: 'https://dananzmolt.github.io',
  base: '/pinpoint',
  integrations: [tailwind()],
});
