import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://www.sanmyrs.com',
  integrations: [tailwind()],
  publicDir: path.resolve(__dirname, 'public'),
  vite: {
    server: {
      fs: {
        allow: [path.resolve(__dirname)],
      },
    },
  },
});
