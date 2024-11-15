import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import nikhil from "@/public/team/nikhil.jpeg";
import surya from "@/public/team/surya.jpeg";
import nithin from "@/public/team/nithin.jpeg";
import dhanush from "@/public/team/dhanush.jpeg";
import arun from "@/public/team/arun.jpeg";
import jai from "@/public/team/jai.jpeg";
import justin from "@/public/team/justin.jpeg";
import shanthi from "@/public/team/shanthi.jpeg";
import praveen from "@/public/team/praveen.jpeg";
import aneena from "@/public/team/aneena.jpeg";
import hari from "@/public/team/hari.jpeg";
import arul from "@/public/team/arul.jpeg";
import preethi from "@/public/team/preethi.jpeg";
import { pre } from "framer-motion/client";

interface TeamMember {
  name: string;
  image: string | StaticImageData;
  link: string;
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    { name: "Surya Venkat", image: surya, link: "#" },
    { name: "Nikhil Kumaran S", image: nikhil, link: "#" },
    { name: "Nithin Kamlesh", image: nithin, link: "#" },
    { name: "Dhanush Kandhan", image: dhanush, link: "#" },
    { name: "Arun Kumar V", image: arun, link: "#" },
    { name: "Jai Saravanan", image: jai, link: "#" },
    { name: "Justin Benito", image: justin, link: "#" },
    { name: "Shanthi Palani", image: shanthi, link: "#" },
    { name: "SB Praveen", image: praveen, link: "#" },
    { name: "Aneena John", image: aneena, link: "#" },
    { name: "Namma Hari", image: hari, link: "#" },
    { name: "Arul Kumar", image: arul, link: "#" },
    { name: "Preethi", image: preethi, link: "#" },
  ];

  return (
    <div className="mx-auto px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold">Core Team</h1>
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {teamMembers.map((member) => (
          <Link key={member.name} href={member.link} className="group relative block aspect-square">
            <div className="relative h-full overflow-hidden rounded-3xl">
              <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" className="ransition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute right-2 top-2 rounded-full bg-white/30 p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4 text-white" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="translate-y-2 transform rounded-xl bg-white px-3 py-2 text-center opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-sm font-medium">{member.name}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
