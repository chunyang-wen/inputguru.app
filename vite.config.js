import { defineConfig } from 'vite';

export default defineConfig({
  // Set the base path to the repository name for GitHub Pages
  base: '/inputguru.app/',
  plugins: [
    {
      name: 'add-trailing-slash-dev',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.startsWith('/inputguru.app?')) {
            res.statusCode = 301;
            res.setHeader('Location', req.url.replace('/inputguru.app?', '/inputguru.app/?'));
            res.end();
            return;
          }

          if (req.url === '/inputguru.app') {
            res.statusCode = 301;
            res.setHeader('Location', '/inputguru.app/');
            res.end();
            return;
          }

          next();
        });
      }
    }
  ],
  build: {
    outDir: 'dist'
  }
});
