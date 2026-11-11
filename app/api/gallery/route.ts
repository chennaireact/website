import { NextResponse } from "next/server";

const folder = "/chennaireact/images/gallery/";
const PAGE_SIZE = 100;

type ImageKitFile = { type?: string; filePath?: string; fileType?: string; isPublished?: boolean; isPrivateFile?: boolean };

export async function GET() {
  const key = process.env.IMAGEKIT_PRIVATE_KEY;
  if (!key || process.env.NEXT_PUBLIC_IMAGEKIT_ENABLED !== "true") {
    return NextResponse.json({ error: "Gallery unavailable" }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
  try {
    const files: string[] = [];
    for (let skip = 0; ; skip += PAGE_SIZE) {
      const url = new URL("https://api.imagekit.io/v1/files");
      url.searchParams.set("path", folder.slice(0, -1));
      url.searchParams.set("limit", String(PAGE_SIZE));
      url.searchParams.set("skip", String(skip));
      const response = await fetch(url, {
        headers: { Authorization: `Basic ${Buffer.from(`${key}:`).toString("base64")}` },
        next: { revalidate: 300 }, signal: AbortSignal.timeout(5000),
      });
      if (!response.ok) throw new Error("Gallery listing unavailable");
      const page: ImageKitFile[] = await response.json();
      if (!Array.isArray(page)) throw new Error("Invalid gallery listing");
      for (const file of page) {
        if (file.type !== "file" || file.fileType !== "image" || file.isPublished === false || file.isPrivateFile === true || !file.filePath?.startsWith(folder)) continue;
        const name = file.filePath.slice(folder.length);
        if (name && !name.includes("/") && /\.(webp|png|jpe?g|gif|avif)$/i.test(name)) files.push(name);
      }
      if (page.length < PAGE_SIZE) break;
    }
    return NextResponse.json({ files: [...new Set(files)].sort((a, b) => a.localeCompare(b, "en", { numeric: true, sensitivity: "base" })) }, {
      headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600" },
    });
  } catch {
    console.error("ImageKit gallery listing unavailable");
    return NextResponse.json({ error: "Gallery unavailable" }, { status: 502, headers: { "Cache-Control": "no-store" } });
  }
}
