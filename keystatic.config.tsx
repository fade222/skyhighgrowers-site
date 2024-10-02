import { config, collection, fields, singleton } from "@keystatic/core";

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  storage: {
    kind: "local",
  },
  ui: {
    brand: {
      name: "SKY GROWERS",
      mark: () => (
        <svg fill="currentColor" viewBox="0 0 24 18" width="24" height="24">
          <path d="M6.892.176c-.424-.128-1.307-.3-1.731-.043-.213.172-.107.472-.036.729.106.686.248 1.329.46 2.014.353 1.372.707 3.129 1.449 4.243.495.643 1.166 1.157 1.767 1.586.389.3.813.6 1.202.9.177.085.353.257.53.128.177-.171.07-.685.036-.9a31.551 31.551 0 0 0-.213-2.571c-.141-1.414-.247-2.957-.813-4.243-.14-.429-.353-.9-.706-1.2C8.307.305 7.529.262 6.892.176ZM3.888.69C3.605.433 2.792.605 2.474.605 2.085.733 1.06.562.813 1.119c-.141.343.318.857.53 1.072.707.942 1.485 1.67 2.298 2.485.353.3 1.237 1.372 1.732 1.286.212-.086.141-.386.106-.557-.177-.557-.354-1.072-.53-1.586-.248-.771-.495-1.543-.743-2.271C4.171 1.29 4.1.862 3.888.69ZM12.018 1.29c-.354-.128-1.237-.728-1.59-.557-.213.129 0 .6.034.815.213.771.425 1.5.566 2.314.247 1.414.283 2.829.46 4.243.035.728.035 1.585.282 2.228.354.772 1.838 1.543 2.475 1.243.247-.128.353-.471.424-.814.106-.771.035-1.586.035-2.357 0-1.5-.035-3.086-.389-4.5-.106-.514-.212-1.072-.53-1.5-.424-.643-1.131-.857-1.767-1.114ZM.46 4.29C.352 3.433.423 2.576 0 1.848c.813.514 1.838 2.271 2.545 3a36.382 36.382 0 0 0 4.1 3.471c.495.386 1.06.814 1.485 1.243.176.129.424.343.424.6 0 .6-1.202.6-1.52.686-1.167.171-2.333.342-3.5.342-.53 0-1.095.086-1.484-.47-.353-.558-.565-1.287-.778-1.972C.884 7.29.672 5.833.46 4.29ZM16.542 13.29a31.607 31.607 0 0 0 3.252 2.186L23.399 18 24 16.89c-1.378-1.157-2.828-2.185-4.348-3.17-.494-.3-.954-.6-1.449-.9-.177-.13-.46-.258-.565-.43-.142-.385-.036-1.07-.036-1.414 0-.986 0-1.928-.212-2.871-.212-1.2-.6-2.229-1.13-3.257-.072-.258-.425-1.029-.708-.729-.176.214-.176.772-.176 1.072-.071.857 0 1.8-.071 2.657-.035 1.028-.035 2.057-.035 3.128 0 .343-.106.986.035 1.286.212.428.884.729 1.237 1.028ZM12.477 12.433c-.813-.471-1.696-1.328-2.65-1.242-1.733.257-3.359.857-5.055 1.114-.46.085-.884.128-1.308.128-.177 0-.424-.043-.53.043-.142.129 0 .386.106.514.247.343.565.73.813 1.03.46.556.954 1.242 1.555 1.585.707.386 1.626.257 2.368.214 1.414-.214 2.899-.686 4.171-1.5.389-.214 1.06-.6 1.237-1.071.177-.386-.495-.686-.707-.815ZM16.26 14.448c-.425-.343-1.344-1.029-1.91-.9-.636.128-1.272 1.071-1.802 1.585-1.025.772-2.298 1.286-3.5 1.543-.388.043-.848 0-1.272.043-.141 0-.389.043-.389.257 0 .472.955.472 1.202.557 1.308.215 2.58.215 3.888 0 1.308-.343 3.181-.814 3.994-2.271.212-.386.071-.557-.212-.814Z" />
        </svg>
      ),
    },
  },
  singletons: {
    headings: singleton({
      label: "Headings",
      schema: {
        hero: fields.text({ label: "Hero text" }),
        footer: fields.text({ label: "Footer text" }),
      },
    }),
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
