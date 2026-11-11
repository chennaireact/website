import Image from "@/components/MediaImage";
import { ArrowUpRight, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { mediaUrl } from "@/lib/imagekit";
import "./speakers.css";

export const metadata = pageMetadata(
  "Past Speakers",
  "Meet the speakers who have shared their knowledge at Chennai React meetups, from software engineers and community leaders to founders.",
  "/past-speakers",
);

// Add verified speaker details here. Organisations are those listed for the event.
type Speaker = { name: string; role: string | null; organization: string | null; image: string | null; linkedin: string | null; atEvent?: boolean };
const speakers: Speaker[] = [
  { name: "Sathya Gunasekaran", role: "CTO · Ex-React Team @ Meta", organization: "Numero", image: "/images/past-speaker/sathya.webp", linkedin: "https://www.linkedin.com/in/sathyagunasekaran/" },
  {"name": "Karan Ganesan", "role": "Founding Engineer", "organization": "Luma AI", "image": "/images/past-speaker/karan_ganesan.webp", "linkedin": "https://www.linkedin.com/in/karanganesan/", "atEvent": true},
  { name: "Vilva Athiban", role: "Software Architect", organization: "Omni", image: "/images/past-speaker/vilva_athiban.webp", linkedin: "https://www.linkedin.com/in/vilvaathiban/" },
  {"name": "Sreetam Das", "role": "Senior Frontend Engineer II", "organization": "Remote", "image": "/images/past-speaker/SreetamDas.webp", "linkedin": "https://www.linkedin.com/in/sreetamdas/", "atEvent": false},
  { name: "Udhayaprakasha V", role: "Module Lead", organization: "Full Creative", image: "/images/past-speaker/udhaya.webp", linkedin: "https://www.linkedin.com/in/udhayaprakasha-v-a71975a0/" },
  {"name": "Tapas Adhikary", "role": "Founder & CEO", "organization": "CreoWis", "image": "/images/past-speaker/tapas.webp", "linkedin": "https://www.linkedin.com/in/tapasadhikary/", "atEvent": false},
  {"name": "Santosh Selvasundar", "role": "Founding Engineer", "organization": "Brackett AI", "image": "/images/past-speaker/santhos_selvakumar.webp", "linkedin": "https://www.linkedin.com/in/santosh-selvasundar/", "atEvent": false},
  {"name": "Dani Akash", "role": "Founding Engineer", "organization": "BrowserOS (YC S24)", "image": "/images/past-speaker/dani_akash.webp", "linkedin": "https://www.linkedin.com/in/daniakash/", "atEvent": false},
  {"name": "Rishab Bhattacharyya", "role": "Senior Software Engineer", "organization": "Ford Pro", "image": "/images/past-speaker/rishab.webp", "linkedin": "https://www.linkedin.com/in/rishab-bhattacharyya/", "atEvent": false},
  {"name": "Syed Umair", "role": "Lead Frontend Engineer", "organization": "Full Creative", "image": "/images/past-speaker/syed_umair.webp", "linkedin": "https://www.linkedin.com/in/syed-umair/", "atEvent": false},
  { name: "Gayathri Perumal", role: "Senior Software Engineer", organization: null, image: "/images/past-speaker/gayathri.webp", linkedin: "https://www.linkedin.com/in/gayathrithedev/" },
  { name: "Harshit Budhraja", role: "Software Engineer", organization: "ImageKit", image: "/images/past-speaker/Harshit Poster Image.webp", linkedin: "https://www.linkedin.com/in/harshitbudhraja/" },
  {"name": "Hareesh Rajendran", "role": "Founder and YouTuber", "organization": "Hayan Tech", "image": "/images/past-speaker/hareesh_rajendran.webp", "linkedin": "https://www.linkedin.com/in/hareesh-r/", "atEvent": false},
  {"name": "Deepa Sankaranarayanan", "role": "Software Development Manager", "organization": "IBM", "image": "/images/past-speaker/deepa_sankaranarayanan.webp", "linkedin": "https://www.linkedin.com/in/deepa-sankaranarayanan-28093361/", "atEvent": true},
  {"name": "Adithya Viswamithiran", "role": "Staff Software Engineer", "organization": "Levels.fyi", "image": "/images/past-speaker/adhitya_viswa.webp", "linkedin": "https://www.linkedin.com/in/adithya-vis/", "atEvent": false},
  {"name": "Ragavendhar Thiyagharajan", "role": "Engineering Manager", "organization": "Workday", "image": "/images/past-speaker/ragavendhar-thiyagharajan.webp", "linkedin": "https://www.linkedin.com/in/ragavendhar-t/", "atEvent": false},
  {"name": "Saravanan Ramupillai", "role": "Engineering Manager", "organization": "Kissflow", "image": "/images/past-speaker/saravanan.webp", "linkedin": "https://in.linkedin.com/in/saravananramupillai", "atEvent": true},
  { name: "Surya Venkatapathi", role: "Engineering Manager", organization: "Talentship", image: "/images/past-speaker/surya-venkat.webp", linkedin: "https://www.linkedin.com/in/suryavenky/" },
  {"name": "Brion Silva", "role": "Technical Lead", "organization": "WSO2", "image": "/images/past-speaker/brion_mario.webp", "linkedin": "https://www.linkedin.com/in/brionmario/", "atEvent": true},
  { name: "Shanthi Palani", role: "Technical Lead", organization: "Talentship", image: "/images/past-speaker/shanthi-palani.webp", linkedin: "https://www.linkedin.com/in/shanthi-palani-0500a9100/" },
  {"name": "Bavithra Ravichandran", "role": "Senior Software Engineer", "organization": "ACV Auctions", "image": "/images/past-speaker/bavithra.webp", "linkedin": "https://www.linkedin.com/in/bavithra07/", "atEvent": false},
  { name: "Nikhil Kumaran S", role: "Senior Software Engineer", organization: "Snowflake", image: "/images/past-speaker/nikhil.webp", linkedin: "https://www.linkedin.com/in/nikhilkumaran/" },
  { name: "Dhanush Kandhan", role: "Product Engineer", organization: "letRetro Inc.", image: "/images/past-speaker/dhanush-kandhan.webp", linkedin: "https://www.linkedin.com/in/dhanushkandhan/" },
  { name: "Arun Kumar V", role: "AI/ML Engineer", organization: "Tiger Analytics", image: "/images/past-speaker/arun-kumar-v.webp", linkedin: "https://www.linkedin.com/in/arunkumarvallal/" },
  { name: "Jai Saravanan", role: "Senior Software Engineer", organization: "Walmart", image: "/images/past-speaker/jai-saravanan.webp", linkedin: "https://www.linkedin.com/in/jai-saravanan-dev/" },
  {"name": "Joel Sameul Raj", "role": "Software Engineer", "organization": "Microsoft (Azure Team)", "image": "/images/past-speaker/joel-raj-portrait.webp", "linkedin": "https://www.linkedin.com/in/useeffects/", "atEvent": false},
  {"name": "Ragav Kumar V", "role": "Corporate Trainer & Mentor", "organization": "Self-employed", "image": "/images/past-speaker/ragav-kumar-v.webp", "linkedin": "https://www.linkedin.com/in/ragavkumarv/", "atEvent": false},
  { name: "Hari Prasanth S (Namma Hari)", role: "Founder", organization: "Mahathaan", image: "/images/past-speaker/namma-hari.webp", linkedin: "https://www.linkedin.com/in/nammahari/" },
  {"name": "Justin Benito", "role": "Founder", "organization": "Lime Green Studios", "image": "/images/past-speaker/justin_benito.webp", "linkedin": "https://www.linkedin.com/in/justinbenito/", "atEvent": false},
  {"name": "Chandrakumar S", "role": "Lead Software Engineer", "organization": "Chargebee", "image": "/images/past-speaker/chandrakumar_s.webp", "linkedin": "https://www.linkedin.com/in/iam-chandrakumar/", "atEvent": false},
  {"name": "Jagadeesh J", "role": "Lead Frontend Developer", "organization": "Turing", "image": "/images/past-speaker/jagadeesh.webp", "linkedin": "https://www.linkedin.com/in/jjayy/", "atEvent": false},
  {"name": "TamilSelvan Subramaniyan", "role": "Lead Associate", "organization": "KANINI Software Solutions", "image": "/images/past-speaker/tamil_selvan.webp", "linkedin": "https://www.linkedin.com/in/tamilselvan-subramaniyan-88b847144/", "atEvent": true},
  {"name": "Dharmendra Kumar Gupta", "role": "Development Engineer IV", "organization": "Comcast", "image": "/images/past-speaker/dharmendra-kumar-gupta.webp", "linkedin": "https://www.linkedin.com/in/dharmendra-kumar-gupta/", "atEvent": false},
  {"name": "Basavaraj Patil", "role": "Software Engineer", "organization": "Octonomy", "image": "/images/past-speaker/basavaraj.webp", "linkedin": "https://www.linkedin.com/in/basavaraj-patil-56137017a/", "atEvent": false},
  {"name": "Anita R", "role": "Software Developer", "organization": "DataTerrain Inc.", "image": "/images/past-speaker/anita_r.webp", "linkedin": "https://www.linkedin.com/in/anitha-r-10734712b/", "atEvent": false},
  {"name": "Jagan Javid", "role": "Full Stack Developer", "organization": "Stoz", "image": "/images/past-speaker/jagan_javid.webp", "linkedin": "https://www.linkedin.com/in/codejavid/", "atEvent": false},
  {"name": "Vignesh M", "role": "SDE II", "organization": "IBM Software Labs", "image": "/images/past-speaker/vignesh_m.webp", "linkedin": "https://www.linkedin.com/in/vigneshrajan-m/", "atEvent": false},
  {"name": "Gopi Agasthia S", "role": "SDE", "organization": "IBM Software Labs", "image": "/images/past-speaker/gopi_agasthiya.webp", "linkedin": "https://www.linkedin.com/in/gopi-agasthia/", "atEvent": false},
  {"name": "Praveen Kumar Purushothaman", "role": "Associate Director - UI", "organization": "Fitch Group Inc.", "image": "/images/past-speaker/praveen_kumar_p.webp", "linkedin": "https://www.linkedin.com/in/praveentech/", "atEvent": false},
  {"name": "Leonard Selvaraja", "role": "CEO and Director", "organization": "iCrewsystems", "image": "/images/past-speaker/leonardi.webp", "linkedin": "https://www.linkedin.com/in/leonardselvaraja/", "atEvent": false},
];

const speakerDirectory = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/past-speakers#page`,
  url: `${siteUrl}/past-speakers`,
  name: "Past Speakers | Chennai React",
  description: "Speakers who have shared their knowledge at Chennai React meetups.",
  isPartOf: { "@id": `${siteUrl}/#website` },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: speakers.length,
    itemListElement: speakers.map((speaker, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: speaker.name,
        ...(speaker.role && !speaker.atEvent ? { jobTitle: speaker.role } : {}),
        ...(speaker.organization && !speaker.atEvent && speaker.organization !== "Self-employed"
          ? { worksFor: { "@type": "Organization", name: speaker.organization } }
          : {}),
        ...(speaker.image ? { image: new URL(mediaUrl(speaker.image), siteUrl).href } : {}),
        ...(speaker.linkedin ? { sameAs: [speaker.linkedin] } : {}),
      },
    })),
  },
};

export default function PastSpeakersPage() {
  return <main id="top" className="speakers-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakerDirectory).replace(/</g, "\\u003c") }} /><SiteHeader /><section className="speakers-section wrap"><div className="speakers-intro"><p>IDEAS WORTH SHARING</p><h1>Past speakers.</h1><span>Meet the speakers who have shared their knowledge at Chennai React meetups.</span></div><div className="speakers-grid">{speakers.map(speaker => <article className="speaker-card" key={speaker.name}><div className="speaker-photo"><Image unoptimized src={speaker.image || "/logo/logo.png"} alt={speaker.image ? speaker.name : ""} fill sizes="(max-width: 600px) 40vw, 200px" className={speaker.image ? undefined : "speaker-placeholder"} /></div><h2>{speaker.name}</h2>{speaker.role && <p>{speaker.role}</p>}{speaker.organization && <span>{speaker.organization}</span>}{speaker.linkedin && <a href={speaker.linkedin} target="_blank" rel="noreferrer" aria-label={`${speaker.name} on LinkedIn`}><LinkedinLogo size={21} weight="fill"/></a>}</article>)}</div><div className="speakers-cta"><div><p>CALL FOR SPEAKERS</p><h2>Have something to share?</h2><span>Share your ideas, experiences, and lessons with Chennai’s React community.</span></div><a href="https://forms.gle/WNbMPrujmdHkwbcJ8" target="_blank" rel="noreferrer">Apply to speak <ArrowUpRight size={17} weight="bold" aria-hidden="true" /></a></div></section><SiteFooter /></main>;
}
