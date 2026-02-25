# DeCS Project Website (GitHub Pages)

This folder is ready for **Project Pages** deployment for repository `DECS`.

## Deploy

1. Push this `docs/` folder to the `main` branch of your `DECS` repository.
2. Open GitHub repository settings.
3. Go to **Pages**.
4. Set **Source** to `Deploy from a branch`.
5. Select branch `main` and folder `/docs`.
6. Save and wait for deployment.

Your site URL will be:

`https://<your-github-username>.github.io/DECS/`

## Customize links

Edit `assets/js/site-config.js` and fill:

- `links[1].url` for GitHub
- `links[2].url` for Hugging Face

Author email links and paper link are already configured.
