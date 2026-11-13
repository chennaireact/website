import "./footer-bridge.css";
import { Atom, Butterfly, CalendarBlank, DiscordLogo, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo, XLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";

const socials = [
  { name: "Instagram", url: "https://instagram.com/chennaireact", icon: InstagramLogo },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/chennaireact/", icon: LinkedinLogo },
  { name: "WhatsApp", url: "https://chat.whatsapp.com/GVVDcSrckq2FTBXtKBwVbd?mode=r_c", icon: WhatsappLogo },
  { name: "Discord", url: "https://bit.ly/chennaireactjs", icon: DiscordLogo },
  { name: "X", url: "https://x.com/chennaireact", icon: XLogo },
  { name: "GitHub", url: "https://github.com/chennaireact", icon: GithubLogo },
  { name: "Bluesky", url: "https://bsky.app/profile/chennaireact.bsky.social", icon: Butterfly },
  { name: "YouTube", url: "https://www.youtube.com/@ChennaiReactJS", icon: YoutubeLogo },
  { name: "Luma", url: "https://lu.ma/chennai-react", icon: CalendarBlank },
  { name: "react.dev", url: "https://react.dev/community/meetups#india", icon: Atom },
];

export default function SiteFooter() {
  return <footer><div className="footer-bridge" aria-hidden="true"><picture><source media="(max-width: 600px)" srcSet="/illustrations/napier-bridge-mobile.svg" /><img src="/illustrations/napier-bridge-desktop.svg" alt="" /></picture></div><div className="footer-content wrap"><div className="footer-brand-block"><img className="footer-logo" src="/logo/full_white_horizontal.png" alt="Chennai React JS" /><p>Chennai’s community for people who love to learn, build, and share.</p></div><nav className="footer-nav" aria-label="Footer navigation"><h2>Explore</h2><a href="/#about">About</a><a href="/events">Events</a><a href="/team">Team</a><a href="/past-speakers">Past speakers</a><a href="/sponsor">Become a sponsor</a><a href="/coc">Code of Conduct</a></nav><div className="footer-social"><h2>Find us online</h2><div className="footer-social-grid">{socials.map(({ name, url, icon: Icon }) => <a key={name} href={url} target="_blank" rel="noreferrer"><Icon size={19} aria-hidden="true"/><span>{name}</span></a>)}</div></div></div><div className="footer-bottom wrap"><span>© CHENNAI REACT COMMUNITY</span><span>MADE WITH ♥ IN CHENNAI</span><a href="#top">BACK TO TOP ↑</a></div></footer>;
}
