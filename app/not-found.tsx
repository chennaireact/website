import Link from "next/link";

export default function NotFound() {
  return <main style={{ minHeight: "70vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "24px", textAlign: "center" }}><p style={{ color: "#087cf0", fontWeight: 700 }}>404</p><h1 style={{ fontSize: "clamp(32px, 6vw, 56px)", margin: "12px 0" }}>Page not found.</h1><p>We couldn’t find the page you’re looking for.</p><Link href="/" style={{ color: "#087cf0", fontWeight: 700, marginTop: "18px" }}>Back to Chennai React</Link></main>;
}
