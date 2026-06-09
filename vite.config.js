import { defineConfig } from 'vite';

export default defineConfig({
  // Set the base path to the repository name for GitHub Pages
  base: '/inputguru.app/',
  build: {
    outDir: 'dist'
  }
});
