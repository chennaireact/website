# Contributing to Chennai React

Thank you for helping improve the community website. All contributors must follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Before you start

1. Search the [issues](https://github.com/chennaireact/website/issues) for existing work. If none covers your change, open an issue describing the problem or proposal.
2. Discuss the intended approach in the issue when the change is substantial. A linked issue is required before opening a pull request.
3. Fork or clone the repository, create a branch, and install dependencies with `bun install`.

## Develop and verify

- Run `bun dev` and visit [localhost:3000](http://localhost:3000).
- Follow the design, SEO, image, accessibility, and responsive guidance in [AGENTS.md](AGENTS.md). Check the affected experience on small and large screens.
- Use lossless WebP for new raster images where suitable. Keep originals in the Git-ignored `public/images/original-images/<section>/` folder, preserve image quality, and avoid committing credentials or local environment files.
- Run `bunx tsc --noEmit` and `bun run build`, plus any focused checks appropriate to your change. If a check cannot run, say why in the pull request.
- For gallery changes, run `bun scripts/generate-gallery.ts` to refresh the manifest.

## Open a pull request

1. Review your changes and commit them with a descriptive message.
2. Push your branch and open a pull request against `main`.
3. Link the existing issue (for example, `Closes #123`), explain the change and its motivation, and describe the checks you ran. Include screenshots or a recording for visible changes.
4. Respond to review feedback and keep the change focused.
