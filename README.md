# InputGuru Web

Static GitHub Pages site for InputGuru.

## Test Locally

Run a local static server from this directory:

```sh
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080/
```

The site has no build step, so this local server mirrors the deployed Pages
artifact closely.

## Deploy

1. Push this repository to GitHub.
2. In the repository settings, open **Pages**.
3. Set **Build and deployment** to **GitHub Actions**.
4. Push to the `main` branch, or run **Deploy GitHub Pages** manually from the
   Actions tab.
