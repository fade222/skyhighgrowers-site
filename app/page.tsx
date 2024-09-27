import React from "react";
import Hero from "./components/hero";
import Card from "./components/card";
import Nav from "./components/nav";

import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "./../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Page() {
  const crops = await reader.collections.crops.all();

  return (
    <div>
      <Nav />
      <Hero />
      <div className="-mt-24"></div>
      {crops.length > 0 && (
        <ul>
          {crops.map((crop) => (
            <li key={crop.slug}>
              <Card
                name={crop.entry.commonName}
                scientificName={crop.entry.scientificName}
                cropPhoto={crop.entry.cropPhoto}
                cropDetails={crop.entry.cropDetails}
                harvestDate={crop.entry.harvestDate}
                cropYield={crop.entry.cropYield}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
