import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Image src="/chennaireact.png" alt="Chennai React Logo" width={800} height={800} />
    </div>
  );
}
