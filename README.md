# Sheece Borgi — Portfolio

Professional portfolio for Sheece Borgi, a Software Engineer with 5+ years building enterprise SaaS platforms, multi-tenant systems, cloud infrastructure, and CI/CD automation.

Built with Next.js App Router, React, TypeScript, Tailwind CSS, Lucide React, and Framer Motion.

## Local development

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run build
```

## Environment

Set the public canonical URL before deploying:

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

This controls canonical URLs, sitemap entries, robots output, `llms.txt`, and Open Graph metadata. Vercel falls back to `VERCEL_URL`; local development falls back to `http://localhost:3000`.

No other environment variables are required.

## Deployment

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Keep the detected Next.js settings.
4. Add `NEXT_PUBLIC_SITE_URL` as an environment variable.
5. Deploy.

## SEO and AI discovery

Generated routes:

- `/robots.txt`
- `/sitemap.xml`
- `/llms.txt`
- `/opengraph-image`
- `/icon.svg`
- `/favicon.ico`
