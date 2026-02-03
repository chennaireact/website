import { SectionGrid } from "@/components/ui/section-grid";

interface Partner {
  name: string;
  image: string;
  link: string;
}

export default function Partners() {
  const partners: Partner[] = [
    {
      name: "React India",
      link: "https://www.reactindia.io/",
      image: "/partners/react-india.png",
    },
    {
      name: "React Nexus",
      link: "https://reactnexus.com/",
      image: "/partners/react-nexus.jpeg",
    },
    {
      name: "JS Lovers",
      link: "https://twitter.com/jslovers_del",
      image: "/partners/js-lovers.png",
    },
    {
      name: "GDG Chennai",
      link: "https://twitter.com/gdgchennai",
      image: "/partners/gdg-chennai.png",
    },
    {
      name: "FOSS United Chennai",
      link: "https://fossunited.org/c/chennai",
      image: "/partners/foss-united-chennai.png",
    },
    {
      name: "TechXConf",
      link: "https://techxconf.com/",
      image: "/partners/techx.png",
    },
    {
      name: "Global Freelance Festival",
      link: "https://makerstribe.in/events/global-freelancers-festival/",
      image: "/partners/global-freelance-festival.jpeg",
    },
  ];

  return <SectionGrid title="Community Partners" items={partners} cardClassName="border border-slate-100 bg-white" />;
}
