import Image from "@/components/MediaImage";
import "./contribute.css";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { sponsors } from "@/lib/sponsors";


const partners = [
  { name: "React India", image: "/partners/react-india.webp", url: "https://www.reactindia.io/" },
  { name: "React Nexus", image: "/partners/react-nexus.webp", url: "https://reactnexus.com/" },
  { name: "JS Lovers", image: "/partners/js-lovers.webp", url: "https://twitter.com/jslovers_del" },
  { name: "GDG Chennai", image: "/partners/gdg-chennai.webp", url: "https://twitter.com/gdgchennai" },
  { name: "FOSS United Chennai", image: "/partners/foss-united-chennai.webp", url: "https://fossunited.org/c/chennai" },
  { name: "TechXConf", image: "/partners/techx.webp", url: "https://techxconf.com/" },
  { name: "Global Freelance Festival", image: "/partners/global-freelance-festival.webp", url: "https://makerstribe.in/events/global-freelancers-festival/" },
];

export default function CommunitySupport() {
  return <section className="support-section"><div className="wrap section">
    <div className="support-heading"><div><p className="support-eyebrow">BE PART OF THE STORY</p><h2>Make it happen.</h2></div><p>There’s more than one way to help our community grow.</p></div>
    <div className="contribute-split">
      <a className="contribute-tile" href="https://forms.gle/WNbMPrujmdHkwbcJ8" target="_blank" rel="noreferrer"><div className="contribute-photo"><Image src="/images/DSC02590.webp" alt="" fill sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1264px) calc(100vw - 64px), 1200px" unoptimized /></div><div className="contribute-copy"><span>CALL FOR SPEAKERS</span><h3>Have a story to share?</h3><p>Bring your ideas, lessons, and experiences to the community.</p><span className="contribute-action">Speak at a meetup <ArrowUpRight size={17}/></span></div></a>
      <a className="contribute-tile" href="/sponsor"><div className="contribute-photo"><Image src="/images/DSC02553.webp" alt="" fill sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1264px) calc(100vw - 64px), 1200px" unoptimized /></div><div className="contribute-copy"><span>CALL FOR SPONSORS</span><h3>Help good things grow.</h3><p>Support the people and meetups that bring Chennai’s developers together.</p><span className="contribute-action">Partner with us <ArrowUpRight size={17}/></span></div></a>
    </div>
    <div className="support-sponsors"><div className="sponsors-heading"><h3>Our previous sponsors</h3><p>Thank you for supporting the community.</p></div><div className="sponsors-grid">{sponsors.map(sponsor => <a className="sponsor-logo" key={sponsor.name} href={sponsor.url} target="_blank" rel="noreferrer" aria-label={`${sponsor.name} website`}><Image unoptimized src={sponsor.image} alt={sponsor.name} width={220} height={100} sizes="(max-width: 600px) 160px, 220px" /></a>)}</div></div>
    <div className="support-sponsors"><div className="sponsors-heading"><h3>Community partners</h3><p>Better together, across communities.</p></div><div className="sponsors-grid partner-grid">{partners.map(partner => <a className="sponsor-logo partner-logo" key={partner.name} href={partner.url} target="_blank" rel="noreferrer" aria-label={`${partner.name} website`}><Image unoptimized src={partner.image} alt="" width={220} height={100} sizes="(max-width: 600px) 160px, 220px" /><span>{partner.name}</span></a>)}</div></div>
  </div></section>;
}
