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
      image: "/sponsors/talentship.jpg",
    },
    {
      name: "Imagekit.io",
      link: "https://imagekit.io/",
      image: "/sponsors/imagekit-io.png",
    },
    {
      name: "WSO2",
      link: "https://wso2.com/",
      image: "/sponsors/wso2.png",
    },
    {
      name: "IBM",
      link: "#",
      image: "/sponsors/ibm.png",
    },
    {
      name: "Yuniq",
      link: "https://yuniq.co/",
      image: "/sponsors/yuniq.jpg",
    },
    {
      name: "Think42 Labs",
      link: "https://www.think42labs.com/home",
      image: "/sponsors/think42-labs.png",
    },
    {
      name: "FULL",
      link: "http://full.io/",
      image: "/sponsors/full.png",
    },
    {
      name: "Mahathaan",
      link: "https://mahathaan.com/",
      image: "/sponsors/mahathaan.png",
    },
    {
      name: "St. Joseph's Group",
      link: "https://stjosephsgroup.org/",
      image: "/sponsors/st-joseph-s-group.png",
    },
    {
      name: "7 Angle",
      link: "https://7angle.com/",
      image: "/sponsors/7-angle.png",
    },
  ];

  return <SectionGrid title="Sponsors" items={sponsors} cardClassName="border border-slate-100 bg-white" />;
}
