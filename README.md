# Zenscio Web Studio

Reusable Next.js site foundation for Zenscio's website and future client-facing marketing builds.

## Stack

- Next.js App Router
- React 19
- Tailwind CSS 4
- TypeScript

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## What is included

- Single-page studio homepage with hero, services, about, portfolio, pricing, testimonials, FAQ, and contact sections
- Reusable section and navigation components
- SEO metadata defaults in `src/app/layout.tsx`
- Analytics placeholder for an approved tracking vendor
- Server-side contact intake route with validation, honeypot filtering, and webhook forwarding via environment variables

## Lead capture configuration

Set these runtime environment variables before launch:

- `LEAD_CAPTURE_WEBHOOK_URL`: HTTPS endpoint that receives lead submissions as JSON
- `LEAD_CAPTURE_WEBHOOK_TOKEN`: optional bearer token forwarded to the webhook

The contact form posts to `/api/leads`. If `LEAD_CAPTURE_WEBHOOK_URL` is missing, submissions fail closed with a setup message instead of pretending the lead was captured.

## Deployment

See `docs/deployment.md`.

## Customization

See `docs/customization-guide.md`.
