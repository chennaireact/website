# Guidance for agents

## Project and design

- Use Bun for dependency management and project scripts. Preserve the existing Next.js App Router structure and the Chennai React visual identity: clean typography, accessible contrast, community blue and navy, generous spacing, existing illustrations, and Phosphor icons where appropriate.
- Follow the surrounding design and component patterns. Make focused changes; do not introduce flashy effects or extra dependencies without a clear need. Respect `prefers-reduced-motion`, keyboard access, and accessible labels.
- Treat existing content, speaker identities, images, and working-tree changes carefully. Do not invent biographical details or overwrite user-provided work.

## SEO for new or changed content

- Review crawlability and on-page SEO whenever adding or substantially changing a page: descriptive title and description, one meaningful H1, semantic headings, useful text, descriptive image alt text, and relevant internal links.
- Use the shared `pageMetadata` helper in `lib/seo.ts` for page-specific canonical, Open Graph, and Twitter metadata where appropriate. Add new public, indexable pages to `app/sitemap.ts` and check `app/robots.ts`.
- Add structured data only where it accurately reflects visible, verified content. Escape JSON-LD safely. Never claim that metadata guarantees search rankings or indexing.

## Images

- Before committing new or updated raster images used on the site, convert them to lossless WebP and update all references. Preserve transparency, orientation, and sufficient resolution; verify the converted result against the decoded source. WebP stores 8-bit color, so disclose any bit-depth limitation instead of claiming bit-for-bit equivalence to higher-bit-depth originals.
- Keep original image files locally under `public/images/original-images/<section>/`; this folder is Git-ignored. Do not commit source files from that folder. Preserve existing SVG illustrations and use other formats when WebP cannot faithfully represent an asset (for example, animation or a format required by an integration); document the reason.
- Avoid introducing a second lossy image conversion when lossless output is requested. Lazy-load below-the-fold images and prioritize only genuinely critical imagery. Consider download size and loading performance when choosing image dimensions.
- Use the ImageKit CDN for heavy community and event photographs, including gallery, team, speaker, Code of Conduct, and speaker/sponsor photos. Use `components/MediaImage.tsx` and `lib/imagekit.ts` for supported image paths, retain responsive sizing and lossless delivery, and follow the ImageKit guidance in `README.md`. Community photo copies are ignored by Git; never expose the ImageKit private key.
- The kolam is also served through ImageKit. Keep logos, other illustrations, social graphics, and dynamically supplied Luma event covers local or on their original source unless explicitly requested otherwise.
- For the events gallery, add published images to `/chennaireact/images/gallery` in ImageKit. Regenerate the local fallback `lib/gallery-images.json` with `bun scripts/generate-gallery.ts` after changing `public/images/gallery`.

## Responsive and quality checks

- Check layouts from small phones through tablets, laptops, and large desktop screens. Verify wrapping, image crops, touch targets, spacing, horizontal overflow, keyboard navigation, and fixed or sticky elements. Record any viewport or browser checks that could not be performed.
- Run `bunx tsc --noEmit` and `bun run build` when relevant. Run other focused checks appropriate to the change; report failures or environment limitations rather than claiming unverified results.
- Review `git diff` and `git status` before committing. Never include `.env.local`, secrets, ignored originals, or unrelated changes.

## Contributions

- Follow `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`. An issue is required before a new pull request; link it in the PR. Do not create issues, publish changes, or contact people without authorization.
