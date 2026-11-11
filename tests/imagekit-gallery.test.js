import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { GET } from "../app/api/gallery/route";
import { imageKitPath, isCommunityPhoto, isImageKitAsset } from "../lib/imagekit";

const originalFetch = globalThis.fetch;
const originalError = console.error;
const originalKey = process.env.IMAGEKIT_PRIVATE_KEY;
const originalEnabled = process.env.NEXT_PUBLIC_IMAGEKIT_ENABLED;

describe("ImageKit community gallery", () => {
  beforeEach(() => { process.env.IMAGEKIT_PRIVATE_KEY = "test-key"; process.env.NEXT_PUBLIC_IMAGEKIT_ENABLED = "true"; console.error = () => {}; });
  afterEach(() => {
    globalThis.fetch = originalFetch; console.error = originalError;
    if (originalKey === undefined) delete process.env.IMAGEKIT_PRIVATE_KEY; else process.env.IMAGEKIT_PRIVATE_KEY = originalKey;
    if (originalEnabled === undefined) delete process.env.NEXT_PUBLIC_IMAGEKIT_ENABLED; else process.env.NEXT_PUBLIC_IMAGEKIT_ENABLED = originalEnabled;
  });
  test("restricts photo migration and normalizes paths consistently", () => {
    expect(isCommunityPhoto("/images/about%20section/photo.webp")).toBe(true);
    expect(isCommunityPhoto("/team/member.jpeg")).toBe(true);
    expect(isCommunityPhoto("/logo/logo.png")).toBe(false);
    expect(isCommunityPhoto("/illustrations/kolam.png")).toBe(false);
    expect(isImageKitAsset("/illustrations/kolam.png")).toBe(true);
    expect(isImageKitAsset("/illustrations/footer_chennai.jpg")).toBe(false);
    expect(imageKitPath("/images/gallery/a%20b(1).webp")).toBe("/chennaireact/images/gallery/a_b_1_.webp");
  });
  test("filters unpublished, private, and unrelated assets", async () => {
    globalThis.fetch = async () => Response.json([
      { type: "file", fileType: "image", filePath: "/chennaireact/images/gallery/02.webp", isPublished: true },
      { type: "file", fileType: "image", filePath: "/chennaireact/images/gallery/01.webp" },
      { type: "file", fileType: "image", filePath: "/chennaireact/images/gallery/private.webp", isPrivateFile: true },
      { type: "file", fileType: "image", filePath: "/chennaireact/images/gallery/draft.webp", isPublished: false },
      { type: "file", fileType: "image", filePath: "/chennaireact/images/gallery/sub/other.webp" },
    ]);
    const result = await (await GET()).json();
    expect(result.files).toEqual(["01.webp", "02.webp"]);
  });
  test("reports errors so the client can use its local fallback", async () => {
    globalThis.fetch = async () => new Response("error", { status: 500 });
    expect((await GET()).status).toBe(502);
    delete process.env.IMAGEKIT_PRIVATE_KEY;
    expect((await GET()).status).toBe(503);
  });
});
