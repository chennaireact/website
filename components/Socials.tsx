import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import bsky from "@/public/socials/bluesky.png";
import cfs from "@/public/socials/callforspeakers.png";
import cfsponsors from "@/public/socials/callforsponsors.png";
import discord from "@/public/socials/discord.gif";
import github from "@/public/socials/github.gif";
import instagram from "@/public/socials/instagram.gif";
import linkedin from "@/public/socials/linkedin.gif";
import luma from "@/public/socials/luma.jpeg";
import twitter from "@/public/socials/twitter.gif";
import whatsapp from "@/public/socials/whatsapp.jpeg";
import youtube from "@/public/socials/youtube.gif";

export function Socials() {
  return (
    <div className="">
      <h2 className="mb-8 text-2xl font-bold">Socials</h2>
      <BentoGrid className="h-full">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            image={item.src}
            link={item.link}
            className={`border-slate-300 ${
              i === 1 || i === 0 || i === 4
                ? "justify-items-center lg:col-span-1 xl:col-span-2"
                : i === items.length - 3
                  ? "col-span-2 justify-items-center xl:col-span-1"
                  : i === items.length - 2 || i === items.length - 1
                    ? "col-span-2 justify-items-center"
                    : ""
            }`}
            time={i}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "LinkedIn",
    src: linkedin,
    link: "https://www.linkedin.com/company/chennaireact/",
  },
  {
    title: "Luma",
    src: luma,
    link: "https://lu.ma/chennai-react",
  },
  {
    title: "WhatsApp Community",
    src: whatsapp,
    link: "https://chat.whatsapp.com/GVVDcSrckq2FTBXtKBwVbd?mode=r_c",
  },
  {
    title: "Instagram",
    src: instagram,
    link: "https://instagram.com/chennaireact",
  },
  {
    title: "Discord",
    src: discord,
    link: "https://bit.ly/chennaireactjs",
  },
  {
    title: "Twitter",
    src: twitter,
    link: "https://x.com/chennaireact",
  },
  {
    title: "GitHub",
    src: github,
    link: "https://github.com/chennaireact",
  },
  {
    title: "Bluesky",
    src: bsky,
    link: "https://bsky.app/profile/chennaireact.bsky.social",
  },
  {
    title: "YouTube",
    src: youtube,
    link: "https://www.youtube.com/@ChennaiReactJS",
  },
  {
    title: "Call for Speakers",
    src: cfs,
    link: "https://forms.gle/WNbMPrujmdHkwbcJ8",
  },
  {
    title: "Call for Sponsors",
    src: cfsponsors,
    link: "mailto:chennaireactjs@gmail.com",
  },
];
