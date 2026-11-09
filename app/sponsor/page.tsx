import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import { ArrowUpRight, Briefcase, Globe, MicrophoneStage, ShareNetwork, UsersThree } from "@phosphor-icons/react/dist/ssr";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { sponsors } from "@/lib/sponsors";
import "./sponsor.css";

export const metadata = pageMetadata("Sponsor Chennai React", "Support Chennai React meetups and connect with Chennai’s developer community. Explore sponsorship benefits and past sponsors.", "/sponsor");
const email = "mailto:chennaireactjs@gmail.com?subject=Supporting%20Chennai%20React";

export default function SponsorPage() {
  return <main id="top" className="sponsor-page"><SiteHeader /><section className="sponsor-intro wrap"><div><p className="sponsor-kicker">SUPPORT CHENNAI REACT</p><h1>Let’s build<br/><span>community together.</span></h1><p className="sponsor-lead">Help create more spaces for Chennai’s developers to meet, share ideas, and learn from one another.</p><a className="sponsor-button" href={email}>Talk to us about sponsoring <ArrowUpRight size={19}/></a></div><div className="sponsor-intro-photo"><Image src="/images/DSC02553.JPG" alt="Community members speaking at a Chennai React event" fill sizes="(max-width: 700px) 100vw, 600px" quality={85}/></div></section>
    <section className="sponsor-why"><div className="wrap"><div className="sponsor-section-heading"><div><p className="sponsor-kicker">WHY SPONSOR</p><h2>Good things happen<br/>when we show up.</h2></div><p>Partner with a community built around curiosity, shared knowledge, and real connections.</p></div><div className="sponsor-benefits"><article><MicrophoneStage size={27}/><h3>Special talk slots</h3><p>Share your ideas and expertise with the community through a dedicated talk slot.</p></article><article><Briefcase size={27}/><h3>Product or hiring booth</h3><p>Showcase your product or connect with potential candidates at an event booth.</p></article><article><ShareNetwork size={27}/><h3>Social media presence</h3><p>Feature your logo in community social media posts.</p></article><article><Globe size={27}/><h3>Website presence</h3><p>Have your logo featured on the Chennai React website.</p></article><article><UsersThree size={27}/><h3>Developer network</h3><p>Connect with Chennai’s community of developers and builders.</p></article></div></div></section>
    <section className="sponsor-previous wrap"><p className="sponsor-kicker">COMMUNITY SUPPORTERS</p><h2>Our previous sponsors.</h2><p>Thank you to the teams who have supported Chennai React.</p><div className="sponsor-page-logos">{sponsors.map(sponsor => <a key={sponsor.name} href={sponsor.url} target="_blank" rel="noreferrer" aria-label={`${sponsor.name} website`}><Image src={sponsor.image} alt={sponsor.name} width={220} height={100} sizes="(max-width: 600px) 40vw, 180px"/></a>)}</div></section>
    <div className="sponsor-contact-area"><section className="sponsor-contact wrap"><div><p className="sponsor-kicker">LET’S MAKE IT HAPPEN</p><h2>Interested in sponsoring?</h2><p>Tell us a little about your team and we’ll explore how we can work together.</p></div><a className="sponsor-button" href={email}>Get in touch <ArrowUpRight size={19}/></a></section></div><SiteFooter /></main>;
}
