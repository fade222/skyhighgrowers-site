import Image from "next/image";
import React from "react";
import dateFormatter from "../utils/dateFormatter";

export interface CropCardProps {
  name: string;
  scientificName: string;
  harvestDate: any;
  cropYield: string;
  cropPhoto: any;
  cropDetails: string;
}

export default function card({
  name,
  scientificName,
  harvestDate,
  cropYield,
  cropPhoto,
  cropDetails,
}: CropCardProps) {
  return (
    <div className="grid grid-cols-6 font-sans m-4 lg:m-16 lg:mx-96 lg:min-h-64 rounded-xl shadow-lg shadow-green-800/20 border isolate bg-white ">
      <div className="col-span-2 relative">
        <Image
          className=" rounded-l-xl object-cover"
          src={cropPhoto}
          alt={name}
          fill={true}
        />
      </div>

      <div className="grid col-span-4 pl-2 lg:p-4  grid-rows-3">
        <div className="lg:flex lg:items-baseline">
          <h1 className="text-2xl lg:text-4xl font-semibold text-slate-900">
            {name}
          </h1>

          <h2 className="lg:ml-2 text-sm lg:text-xl italic -mt-1 text-slate-700 ">
            {scientificName}
          </h2>
        </div>
        <p className="mt-4 text-slate-900 text-sm lg:text-xl">{cropDetails}</p>

        <div className="mt-4 mb-2 text-sm lg:text-lg font-medium  text-slate-900">
          Harvest:
          <span className="pl-1 font-normal text-slate-900">
            {dateFormatter(harvestDate, "MMM dd, yyyy")}
          </span>{" "}
          <br />
          Yield:
          <span className="pl-1 font-normal text-slate-900">{cropYield}</span>
        </div>
      </div>
    </div>
  );
}
