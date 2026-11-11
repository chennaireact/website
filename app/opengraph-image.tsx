import { ImageResponse } from "next/og";

export const alt = "Chennai React — Chennai’s React developer community";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", background: "#f4f9ff", color: "#172b42", padding: "90px", fontFamily: "sans-serif" }}><div style={{ fontSize: 25, fontWeight: 700, color: "#087cf0", letterSpacing: 3 }}>CHENNAI REACT</div><div style={{ display: "flex", flexDirection: "column", fontSize: 78, fontWeight: 800, lineHeight: 1.1, marginTop: 28 }}><div>Chennai’s own</div><div style={{ color: "#087cf0" }}>React community.</div></div><div style={{ fontSize: 25, color: "#536a80", marginTop: 32 }}>Meet, learn, and build together.</div></div>, size);
}
