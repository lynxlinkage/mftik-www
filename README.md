# mftik.com

Static product site for [mftik.com](https://mftik.com) — a 24/7-reliability crypto strategy deployment framework (mid-frequency algo trading). Instances live on `*.mftik.app`.

Built with **SvelteKit** (`@sveltejs/adapter-static`), **Tailwind CSS**, **shadcn-svelte**, **GSAP** + ScrollTrigger, and **Lenis**. No backend.

## Local development

```bash
npm install
npm run dev
```

Production build (fully prerendered static output in `build/`):

```bash
npm run build
npm run preview
```

## Forms

Standard and contact forms `POST` JSON to `https://lynxlinkage.com/api/v1/contact` with `kind: "mftik"`. Live CORS already allows `https://mftik.com`.

- Standard: `{ name, email, message: "Request access for {slug}.mftik.app (Standard — early access 100 USDT/month; list 300 USDT/month; 200U off permanent).", kind: "mftik" }`
- Contact: `{ name, email, company?, message, kind: "mftik" }`

Standard is a reservation/request only — no Stripe, no auto-provision.

Self-host questions: [github.com/lynxlinkage/mftik/issues](https://github.com/lynxlinkage/mftik/issues).

## GitHub Pages

The site is deployed by `.github/workflows/deploy-pages.yml`:

1. `npm ci` + `npm run build`
2. Upload the `build/` directory as a Pages artifact
3. Deploy with `actions/deploy-pages`

`static/CNAME` keeps the custom domain **mftik.com**.

### One-time repo setting

If the repository still uses **Deploy from a branch** (legacy `main` / root), switch Pages to **GitHub Actions**:

1. Repo → **Settings** → **Pages**
2. Under **Build and deployment** → **Source**, choose **GitHub Actions**
3. Push to `main` (or run the workflow manually) to publish

Until that switch is made, the Actions deploy will build but Pages will not serve the new artifact.
