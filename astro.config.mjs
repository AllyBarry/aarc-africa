import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://aarc.africa',
  vite: {
    plugins: [tailwindcss()],
  },
});