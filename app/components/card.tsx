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
    <div>
      <div className="flex font-sans m-10  rounded-xl shadow-lg border bg-white">
        <div className="flex-none w-48 relative">
          <Image
            className="h-full rounded-l-xl object-cover"
            src={cropPhoto}
            alt={name}
            fill={true}
          />
        </div>
        <div className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-slate-900">
              {name}
            </h1>
            <h2 className="w-full flex-none text-sm italic text-slate-700 ">
              {scientificName}
            </h2>
            <p className="w-full text-slate-900 text-sm mt-4">{cropDetails}</p>
          </div>

          <div className="mt-6 text-sm text-slate-600">
            <p className="text-sm font-semibold text-slate-900">
              Harvest Shedule:
            </p>
            <p className="font-bold ">
              {dateFormatter(harvestDate, "MMM do, yyyy")}
            </p>
          </div>
          <div className="mt-5 text-sm flex text-slate-700">
            <p>Expected Yield:</p>
            <p className="ml-2">{cropYield}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
