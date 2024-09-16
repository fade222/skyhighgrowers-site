import Image from "next/image";
import background from "../public/coriander-bg.jpg";
import React from "react";

export default function Hero() {
  return (
    <div className="bg-green-900 grid">
      <Image
        className="w-full max-h-96 object-cover col-start-1 row-start-1"
        placeholder="blur"
        loading="lazy"
        src={background}
        alt=""
      />

      <h2 className="mt-24 col-start-1 row-start-1 font-extrabold text-transparent bg-gradient-to-r from-green-200 to-green-500 bg-clip-text  md:w-full text-center text-5xl md:text-6xl lg:text-7xl  text-green-100 p-6">
        The only coriander grower in Canterbury.
      </h2>

      <div className=" bg-gradient-to-t w-full from-green-800 to-90% p-10 col-start-1 row-start-2"></div>
    </div>
  );
}
