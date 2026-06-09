import { defineConfig } from 'vite';

export default defineConfig({
  // Since it's deployed to GitHub Pages root (or custom domain), base '/' is usually fine.
  base: '/',
  build: {
    outDir: 'dist'
  }
});
