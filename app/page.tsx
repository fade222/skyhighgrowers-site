import React from "react";
import Hero from "./components/hero";
import Card from "./components/card";
import Nav from "./components/nav";

import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "./../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Page() {
  const crops = await reader.collections.crops.all();
  const publishedCrops = crops.filter((crop) => crop.entry.draft === false);
  const headingText = await reader.singletons.headings.read();

  return (
    <div>
      <Nav />
      <Hero
        heroText={
          headingText
            ? headingText.hero
            : "The only commercial coriander grower in Canterbury."
        }
      />
      <div className="-mt-24"></div>
      {publishedCrops.length > 0 && (
        <ul>
          {publishedCrops.map((crop) => (
            <li key={crop.slug}>
              <Card
                name={crop.entry.commonName ? crop.entry.commonName : ""}
                scientificName={
                  crop.entry.scientificName ? crop.entry.scientificName : ""
                }
                cropPhoto={
                  crop.entry.cropPhoto
                    ? crop.entry.cropPhoto
                    : "/images/cropPhoto/placeholder.jpeg"
                }
                cropDetails={
                  crop.entry.cropDetails ? crop.entry.cropDetails : ""
                }
                harvestDate={
                  crop.entry.harvestDate ? crop.entry.harvestDate : ""
                }
                cropYield={crop.entry.cropYield ? crop.entry.cropYield : ""}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
