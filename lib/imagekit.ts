/** Public delivery configuration; the private API key must never be used here. */
export const imageKitEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT?.replace(/\/$/, "") || "";
export const imageKitEnabled = process.env.NEXT_PUBLIC_IMAGEKIT_ENABLED === "true" && /^https:\/\//.test(imageKitEndpoint);

/** Community photos are hosted by ImageKit; logos and other illustrations stay local. */
export function isCommunityPhoto(path: string): boolean {
  const decoded = decodeURIComponent(path.split("?")[0]);
  return /^\/images\/(?:about section|gallery|coc|past-speaker)\//.test(decoded)
    || /^\/images\/(?:DSC02553|DSC02590)\.webp$/i.test(decoded)
    || decoded.startsWith("/team/");
}

export function isImageKitAsset(path: string): boolean {
  return isCommunityPhoto(path) || path === "/illustrations/kolam.png";
}

/** Must match the deterministic path used by scripts/upload-imagekit.ts. */
export function imageKitPath(path: string): string {
  const decoded = decodeURIComponent(path.split("?")[0]);
  return "/chennaireact" + decoded.split("/").map(part => part.replace(/[^a-zA-Z0-9_.-]/g, "_")).join("/");
}

export function mediaUrl(path: string): string {
  if (!imageKitEnabled || !isImageKitAsset(path)) return path;
  return `${imageKitEndpoint}${imageKitPath(path)}?tr=orig-true`;
}
