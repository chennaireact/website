import { pageMetadata, siteUrl } from "@/lib/seo";
import Image from "next/image";
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { teamMembers } from "@/lib/team";
import "./team.css";

export const metadata = pageMetadata("Our Team", "Meet the Chennai React core team and organizers building a welcoming community for React developers in Chennai.", "/team");

export default function TeamPage() {
  const structuredData = { "@context": "https://schema.org", "@type": "ItemList", name: "Chennai React core team", itemListElement: teamMembers.map((member, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Person", name: member.name, jobTitle: "Core team member", affiliation: { "@type": "Organization", name: "Chennai React", url: siteUrl }, image: `${siteUrl}${member.image}`, sameAs: member.link } })) };
  return <main id="top" className="team-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><SiteHeader /><section className="team-section wrap"><div className="team-intro"><p>THE PEOPLE BEHIND CHENNAI REACT</p><h1>Meet the team.</h1><span>The people bringing our community together, one meetup at a time.</span></div><div className="team-grid">{teamMembers.map(member => <article className="team-card" key={member.name}><div className="team-portrait"><Image src={member.image} alt={member.name} fill sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw" /></div><div className="team-info"><div><h2>{member.name}</h2><p>Core team</p></div><a href={member.link} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`}><LinkedinLogo size={21} weight="fill"/></a></div></article>)}</div></section><SiteFooter /></main>;
}
