# InputGuru Web

Static GitHub Pages site for InputGuru.

## Site Content

The page highlights InputGuru's core macOS workflow:

- per-app input source defaults and global fallback;
- website URL/domain rules for supported browsers;
- manual shortcuts and temporary overrides;
- pause/resume for automatic switching;
- configuration import/export backups;
- menu bar status and lightweight notifications.

Screenshot assets live in `assets/screenshots/`. Keep them in sync with the app
repo's `Documentation/Images/` screenshots when settings panes change.

## Test Locally

Install dependencies once:

```sh
npm install
```

Run the Vite dev server:

```sh
npm run dev
```

Or build the checked-in `dist/` artifact:

```sh
npm run build
```

The source files are `index.html`, `styles.css`, and `script.js`. GitHub Pages
serves the built files from `dist/`.

## Deploy

1. Push this repository to GitHub.
2. In the repository settings, open **Pages**.
3. Set **Build and deployment** to **GitHub Actions**.
4. Push to the `main` branch, or run **Deploy GitHub Pages** manually from the
   Actions tab.
