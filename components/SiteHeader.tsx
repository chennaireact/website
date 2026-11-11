"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
const whatsapp = "https://chat.whatsapp.com/GVVDcSrckq2FTBXtKBwVbd?mode=r_c";
export default function SiteHeader(){
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 16); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  return (
    <header className={`header-shell ${scrolled || menuOpen ? "is-scrolled" : ""}`}>
      <div className="header wrap">
        <Link href="/" className="brand" aria-label="Chennai React home" onClick={(event) => {
          setMenuOpen(false);
          if (pathname === "/" && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
          }
        }}><img className="brand-wordmark" src="/logo/black-blue-horizontal.png" alt="Chennai React JS" /><img className="brand-icon" src="/logo/logo.png" alt="" /></Link>
        <nav aria-label="Main navigation"><a href="/#about">About</a><a href="/events">Events</a><a href="/past-speakers">Past speakers</a><a href="/team">Team</a><a href="/coc">Code of Conduct</a></nav>
        <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Join the community <ArrowUpRight size={17} weight="bold" /></a>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <List size={22}/>}</button>
      </div>
      {menuOpen && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation"><a href="/#about" onClick={() => setMenuOpen(false)}>About</a><a href="/events" onClick={() => setMenuOpen(false)}>Events</a><a href="/past-speakers" onClick={() => setMenuOpen(false)}>Past speakers</a><a href="/team" onClick={() => setMenuOpen(false)}>Team</a><a href="/coc" onClick={() => setMenuOpen(false)}>Code of Conduct</a><a href={whatsapp} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Join the community <ArrowUpRight size={17}/></a></nav>}
    </header>
  );
}
