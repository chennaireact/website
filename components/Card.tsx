import Image from "next/image";
import { StaticImageData } from "next/image";
import React from "react";

const Card = ({ src, alt }: { src: StaticImageData; alt: string }) => {
  return (
    <>
      <Image src={src} className="my-5 w-full rounded-2xl border border-slate-100 xl:my-10 xl:w-5/12" alt={alt} />
    </>
  );
};

export default Card;
