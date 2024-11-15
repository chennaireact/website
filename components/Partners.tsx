import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import reactind from "@/public/partners/react-india.png";
import foss from "@/public/partners/foss.png";
import jslovers from "@/public/partners/js-lovers.png";
import gdg from "@/public/partners/gdg.png";
import reactnexus from "@/public/partners/nexus.jpeg";
import { g } from "framer-motion/client";

interface Partner {
  name: string;
  logo: string | StaticImageData;
  link: string;
  backgroundColor: string;
}

export default function Partners() {
  const partners: Partner[] = [
    {
      name: "React India",
      logo: reactind,
      link: "https://www.reactindia.io",
      backgroundColor: "bg-[#1a1333]",
    },
    {
      name: "React Nexus",
      logo: reactnexus,
      link: "https://reactnexus.com",
      backgroundColor: "bg-black",
    },
    {
      name: "JS Lovers",
      logo: jslovers,
      link: "https://jslovers.com",
      backgroundColor: "bg-[#0000cc]",
    },
    {
      name: "GDG Chennai",
      logo: gdg,
      link: "https://gdg.community.dev/gdg-chennai",
      backgroundColor: "bg-white",
    },
    {
      name: "FOSS United Chennai",
      logo: foss,
      link: "https://fossunited.org",
      backgroundColor: "bg-black",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-8 text-2xl font-bold">Community Partners</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {partners.map((partner) => (
          <Link key={partner.name} href={partner.link} className="group relative block">
            <div
              className={`relative aspect-square overflow-hidden rounded-2xl border border-slate-100 transition-transform duration-300 ease-in-out hover:scale-105`}
            >
              <div className="absolute right-2 top-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex h-full items-center justify-center">
                <Image src={partner.logo} alt={`${partner.name} logo`} className="h-auto w-[175px] object-contain" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
