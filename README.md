# Chennai React Website

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?logo=nextdotjs)](https://nextjs.org/)
[![Package manager: Bun](https://img.shields.io/badge/Package%20manager-Bun-000000?logo=bun)](https://bun.sh/)
[![Animations: Motion](https://img.shields.io/badge/Animations-Motion-0055FF)](https://motion.dev/)
[![Icons: Phosphor](https://img.shields.io/badge/Icons-Phosphor-3C402B)](https://phosphoricons.com/)
[![Contributors](https://img.shields.io/github/contributors/chennaireact/website)](https://github.com/chennaireact/website/graphs/contributors)

The website for Chennai React, a community for people in Chennai to learn, build, and share ideas about React. It includes community events, speaker profiles, the team, sponsors, and our Code of Conduct.

## Built with

- [Next.js](https://nextjs.org/), React, and TypeScript
- [Bun](https://bun.sh/) for packages and project scripts
- [Motion](https://motion.dev/), Three.js, and Phosphor Icons

## Getting started

Install Bun and Node.js 20 or later, then run:

```bash
bun install
bun dev
```

Open [localhost:3000](http://localhost:3000). For a production build and local production server:

```bash
bun run build
bun start
```

Set `LUMA_CALENDAR_ICS_URL` in `.env.local` to the community’s Luma iCalendar subscription URL for the events feed. Configure it in the deployment environment too, and keep the subscription URL private.

## Images and gallery

Use lossless WebP for new raster images, preserving the source files locally under `public/images/original-images/<section>/`. The original-images folder is ignored by Git. Keep SVG illustrations as SVG; see [AGENTS.md](AGENTS.md) for image and quality guidance.

Add published gallery photos in ImageKit as described below. If you maintain local fallback images in `public/images/gallery`, run `bun scripts/generate-gallery.ts` to update the checked-in fallback manifest.

## ImageKit community photos

Community photos are delivered from ImageKit when `NEXT_PUBLIC_IMAGEKIT_ENABLED=true` and `NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT` is configured. The kolam is also served from ImageKit; logos, other illustrations, social graphics, and Luma event covers remain local or on their original source. Set `IMAGEKIT_PRIVATE_KEY` only in the server deployment environment; it is used to list gallery photos and must never be exposed to the browser.

Add published photos to the `/chennaireact/images/gallery` ImageKit folder to update the event gallery automatically (allow five minutes for caching). Community photos are ignored by Git and remain only on ImageKit and in existing local copies. A fresh checkout or deployment must configure the ImageKit endpoint and set `NEXT_PUBLIC_IMAGEKIT_ENABLED=true` to display these photos. Setting it to `false` and rebuilding uses local copies only if they are present on that machine.

## Contributing

Contributions are welcome. **Open or find an issue before opening a pull request**, and link it in the PR. Read [CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## Contributors

Thank you to everyone who has helped build and maintain the website. See the [GitHub contributors list](https://github.com/chennaireact/website/graphs/contributors) for the current list.

## Community

Visit [Chennai React](https://www.chennaireact.in/) and follow the community on [LinkedIn](https://www.linkedin.com/company/chennaireact/) and [GitHub](https://github.com/chennaireact).
