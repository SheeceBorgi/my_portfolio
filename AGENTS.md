# Developer Portfolio – Project Instructions

## Project Overview
A professional portfolio website for Sheece Borgi, a Software Engineer with 5+ years building enterprise SaaS platforms, multi-tenant systems, cloud infrastructure, and CI/CD automation.

## Technology Stack
- Next.js 16 App Router
- React 19
- TypeScript in strict mode
- Tailwind CSS 4 with Turbopack
- ESLint 9
- Lucide React for icons
- CSS-based reveal animations that work without JavaScript
- next-themes for light and dark themes

## Architecture Rules
- Use Next.js App Router.
- Prefer React Server Components.
- Use Client Components only when interactivity requires them.
- Keep components small, reusable and focused.
- Keep page composition in `src/app/page.tsx`.
- Keep section content in `src/components/sections`.
- Keep public site facts, metadata, JSON-LD, and AI discovery content in `src/lib/site.ts`.
- Separate content data from presentation components.
- Use TypeScript types for structured data.
- Use semantic HTML.
- Follow responsive-first design principles.

## Design Direction
- Terminal-inspired developer portfolio.
- Support dark and light themes.
- Professional, modern and minimal appearance.
- Use monospace typography for terminal elements.
- Use readable typography for general content.
- Use square corners and hard shadows defined in `src/app/globals.css`.
- Avoid excessive animations and visual clutter.
- Ensure accessibility and keyboard navigation.

## Commands
- Requires Node.js 20.9 or newer.
- Use npm because `package-lock.json` is the committed lockfile.
- `npm install` installs dependencies.
- `npm run dev` starts development.
- `npm run lint` runs ESLint.
- `npm run build` creates the production build.

## SEO and AI Discovery
- `SITE_URL` is the only deployment environment variable.
- Keep `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/opengraph-image`, `/icon.svg`, and `/favicon.ico` working.
- Update `src/lib/site.ts` when public facts, contact links, keywords, or project content change.
- Keep the custom 404 page at `src/app/not-found.tsx` and mark it `noindex`.

## Code Quality
- Avoid unnecessary dependencies.
- Avoid duplicated code.
- Avoid `any` unless absolutely necessary.
- Do not suppress TypeScript or ESLint errors without justification.
- Use meaningful component and variable names.
- Handle loading and error states where applicable.
- Keep the application compatible with static deployment where possible.
- Never hide server-rendered content behind client-only JavaScript.

## AI Coding Rules
- Inspect existing code before modifying it.
- Never overwrite files without understanding their contents.
- Explain architectural changes before implementing them.
- Implement one task at a time.
- Do not introduce unrelated changes.
- Run lint and build checks after significant changes.
- Report modified files and outstanding issues.

## Security
- Never expose secrets or API keys in client-side code.
- Never commit environment secrets.
- Do not include confidential employer information.
- Do not expose local development services publicly.

## Git
- Repository: `https://github.com/SheeceBorgi/my_portfolio.git`
- Use meaningful commit messages.
- Keep commits focused on one logical change.
- Do not commit generated build artifacts or dependencies.
