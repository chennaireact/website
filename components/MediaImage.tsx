import NextImage from "next/image";
import { Image as ImageKitImage } from "@imagekit/next";
import type { ComponentProps } from "react";
import { imageKitEnabled, imageKitEndpoint, imageKitPath, isCommunityPhoto } from "@/lib/imagekit";

type Props = ComponentProps<typeof NextImage>;

/** Local fallback is selected at build time using NEXT_PUBLIC_IMAGEKIT_ENABLED. */
export default function MediaImage({ src, unoptimized, ...props }: Props) {
  if (!imageKitEnabled || typeof src !== "string" || !isCommunityPhoto(src)) {
    return <NextImage src={src} unoptimized={unoptimized} {...props} />;
  }
  const original = /\.(svg|gif)$/i.test(src.split("?")[0]);
  return <ImageKitImage {...props} src={imageKitPath(src)} urlEndpoint={imageKitEndpoint}
    unoptimized={original} transformation={original ? undefined : [{ format: "webp", lossless: true }]} />;
}
