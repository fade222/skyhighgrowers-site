import { config, collection, fields } from "@keystatic/core";

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    crops: collection({
      label: "Crops",
      slugField: "commonName",
      path: "crops/*",
      format: { contentField: "body" },
      schema: {
        commonName: fields.slug({ name: { label: "Common Name" } }),
        scientificName: fields.text({ label: "Scientific Name" }),
        body: fields.markdoc({ label: "Body" }),
        harvestDate: fields.date({
          label: "Harvest date",
          description: "Expected date to harvest crop",
        }),
        cropDetails: fields.text({ label: "Details" }),
        cropYield: fields.text({ label: "Yield" }),
        cropPhoto: fields.image({
          label: "Crop Photo",
          directory: "public/images/cropPhoto",
          publicPath: "/images/cropPhoto/",
        }),
      },
    }),
  },
});
