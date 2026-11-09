# Chennai React Website

The community landing page for Chennai React, built with Next.js, Bun, Framer Motion, Three.js, and Phosphor Icons.

## Getting started

Install dependencies and start the development server:

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000). To create a production build, run `bun run build`.

Set `LUMA_CALENDAR_ICS_URL` in `.env.local` to the community’s Luma iCalendar subscription URL to enable the events feed. Configure the same variable in your deployment environment; keep the subscription URL private.

## Event gallery

Add or remove JPG, PNG, WebP, AVIF, or GIF files in `public/images/gallery`. Restart `bun dev` or run a new build to refresh the gallery. Convert HEIC photos to a supported format first.
