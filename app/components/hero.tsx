import Image from "next/image";
import backgroundImage from "../public/coriander-bg.jpg";
import React from "react";

export interface heroProps {
  heroText: string;
}

export default function Hero({ heroText }: heroProps) {
  return (
    <div className="grid ">
      <Image
        className="w-full h-[444px] object-cover col-start-1 row-start-1"
        placeholder="blur"
        loading="lazy"
        src={backgroundImage}
        alt=""
      />

      <h2 className="lg:mt-28 mt-20 col-start-1 row-start-1 font-extrabold text-transparent bg-gradient-to-r from-green-200 to-green-500 bg-clip-text  md:w-full text-center text-5xl md:text-6xl xl:text-7xl text-green-100 p-6 lg:px-72">
        {heroText}
      </h2>

      <div className="bg-gradient-to-b from-green-800 from-10% to-green-600 p-1 w-full col-start-1 row-start-2"></div>
    </div>
  );
}
