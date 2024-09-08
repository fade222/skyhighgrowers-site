import Image from "next/image";
import background from "../public/coriander-bg.jpg";
import React from "react";

export default function Hero() {
  return (
    <div className="bg-green-900 relative">
      <Image
        className="w-full"
        placeholder="blur"
        loading="lazy"
        src={background}
        alt=""
      />
      <div className="flex bg-gradient-to-t w-full from-green-800 p-10 absolute bottom-0 left-0"></div>
      <div className="absolute top-24 left-6 transform">
        <h2 className="text-5xl font-semibold text-green-100 p-6">
          The
          <span className="text-white"> only </span>commercial coriander
          <span className="text-white"> grower</span> in Canterbury.
        </h2>
      </div>
    </div>
  );
}
