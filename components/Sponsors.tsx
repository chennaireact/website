import { SectionGrid } from "@/components/ui/section-grid";

interface Sponsor {
  name: string;
  image: string;
  link: string;
}

export default function Sponsors() {
  const sponsors: Sponsor[] = [
    {
      name: "Talentship",
      link: "https://talentship.io/en/",
      image: "/sponsors/talentship.webp",
    },
    {
      name: "Imagekit.io",
      link: "https://imagekit.io/",
      image: "/sponsors/imagekit-io.webp",
    },
    {
      name: "WSO2",
      link: "https://wso2.com/",
      image: "/sponsors/wso2.webp",
    },
    {
      name: "IBM",
      link: "#",
      image: "/sponsors/ibm.webp",
    },
    {
      name: "Yuniq",
      link: "https://yuniq.co/",
      image: "/sponsors/yuniq.webp",
    },
    {
      name: "Think42 Labs",
      link: "https://www.think42labs.com/home",
      image: "/sponsors/think42-labs.webp",
    },
    {
      name: "FULL",
      link: "http://full.io/",
      image: "/sponsors/full.webp",
    },
    {
      name: "Mahathaan",
      link: "https://mahathaan.com/",
      image: "/sponsors/mahathaan.webp",
    },
    {
      name: "St. Joseph's Group",
      link: "https://stjosephsgroup.org/",
      image: "/sponsors/st-joseph-s-group.webp",
    },
    {
      name: "7 Angle",
      link: "https://7angle.com/",
      image: "/sponsors/7-angle.webp",
    },
  ];

  return <SectionGrid title="Sponsors" items={sponsors} cardClassName="border border-slate-100 bg-white" />;
}
