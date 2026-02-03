import { SectionGrid } from "@/components/ui/section-grid";

interface TeamMember {
  name: string;
  image: string;
  link: string;
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: "Nikhil Kumaran S",
      link: "https://www.linkedin.com/in/nikhilkumaran/",
      image: "/team/nikhil.jpeg",
    },
    {
      name: "Surya Venkat",
      link: "https://www.linkedin.com/in/suryavenky/",
      image: "/team/surya-venkat.jpeg",
    },
    {
      name: "Arun Kumar V",
      link: "https://www.linkedin.com/in/arunkumarvallal/",
      image: "/team/arun-kumar-v.jpg",
    },
    {
      name: "Dhanush Kandhan",
      link: "https://www.linkedin.com/in/dhanushkandhan/",
      image: "/team/dhanush-kandhan.jpeg",
    },
    {
      name: "Jai Saravanan",
      link: "https://www.linkedin.com/in/jai-saravanan-dev/",
      image: "/team/jai-saravanan.jpeg",
    },
    {
      name: "Nithin Kamlesh",
      link: "https://www.linkedin.com/in/nithin-kamlesh/",
      image: "/team/nithin-kamlesh.jpeg",
    },
    {
      name: "SB Praveen",
      link: "https://www.linkedin.com/in/sb-praveen-38423a154/",
      image: "/team/sb-praveen.jpeg",
    },
    {
      name: "Shanthi Palani",
      link: "https://www.linkedin.com/in/shanthi-palani-0500a9100/",
      image: "/team/shanthi-palani.jpeg",
    },
    {
      name: "Aravind Kumar",
      link: "https://www.linkedin.com/in/iamaravindkumar",
      image: "/team/aravind.png",
    },
    {
      name: "Namma Hari",
      link: "https://www.linkedin.com/in/nammahari/",
      image: "/team/namma-hari.jpeg",
    },
    {
      name: "Sarvesh M Rao",
      link: "https://www.linkedin.com/in/sarvesh-m-rao/",
      image: "/team/sarvesh-m-rao.jpeg",
    },
    {
      name: "Kamatchi Subramani",
      link: "https://www.linkedin.com/in/kamatchi-subramani/",
      image: "/team/kamatchi.jpeg",
    },
    {
      name: "Chandramouli S",
      link: "https://www.linkedin.com/in/chandramouli05/",
      image: "/team/chandramouli-s.jpeg",
    },
    {
      name: "Navin Balaji",
      link: "https://www.linkedin.com/in/navinbalaji/",
      image: "/team/navin.jpeg",
    },
    {
      name: "Roja Gnanavel",
      link: "https://www.linkedin.com/in/roja-gnanavel-55a350161/",
      image: "/team/roja.jpeg",
    },
    {
      name: "Udhayaprakasha V",
      link: "https://www.linkedin.com/in/udhayaprakasha-v-a71975a0/",
      image: "/team/udhaya.jpeg",
    },
    {
      name: "Pranav Vikraman",
      link: "https://www.linkedin.com/in/pranav-vikraman-322020242/",
      image: "/team/pranav.jpeg",
    },
  ];

  return <SectionGrid title="Core Team" items={teamMembers} className="py-16" as="h1" />;
}
