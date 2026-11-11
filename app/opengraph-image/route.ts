import { NextResponse } from "next/server";

// Keep previously shared image URLs working after moving to the static OG image.
export function GET(request: Request) {
  return NextResponse.redirect(new URL("/og-image.png", request.url), 308);
}
