import {
  ArrowRightEndOnRectangleIcon,
  BuildingOfficeIcon,
  ClockIcon,
  EnvelopeIcon,
  LinkIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import ContactNav from "../components/contactNav";

export default function contact() {
  return (
    <>
      <ContactNav />
      <div className="">
        <div className="p-6 md:p-10 mt-6 lg:mx-96">
          <div className="flex border shadow-lg rounded-xl p-8 items-center mt-10">
            <BuildingOfficeIcon className="size-8 text-teal-500 " />
            <p className="ml-10 md:border-l-2 pl-4"> Sky Growers Limited</p>
          </div>

          <a
            className="group flex border shadow-lg hover:shadow-xl hover:ml-1 rounded-xl p-8 items-center mt-10 w-full"
            href="https://maps.app.goo.gl/yCGQvrvkp1aJSBpk8"
          >
            <MapPinIcon className="size-8 text-red-500" />
            <p className="ml-10 md:border-l-2 pl-4">
              480 Pound Rd, Yaldhurst
              <br />
              Christchurch
            </p>
            {/* <ArrowRightEndOnRectangleIcon className="size-6 text-blue-400 group-hover:text-blue-500 ml-auto" /> */}
          </a>

          <a
            className="group flex border shadow-lg hover:shadow-xl hover:ml-1 rounded-xl p-8 items-center mt-10 w-full"
            href="tel:0277 300 400"
          >
            <PhoneIcon className="size-8 text-blue-500" />
            <p className="ml-10 md:border-l-2 px-4">0277 300 400</p>
            {/* <ArrowRightEndOnRectangleIcon className="size-6 text-blue-400 group-hover:text-blue-500 ml-auto" /> */}
          </a>

          <a
            className="group flex border shadow-lg hover:shadow-xl hover:ml-1 rounded-xl p-8 items-center mt-10 w-full"
            href="mailto:skygrowers@gmail.com"
          >
            <EnvelopeIcon className="size-8 text-yellow-500" />
            <p className="ml-10 md:border-l-2 px-4">skygrowers@gmail.com</p>
            {/* <ArrowRightEndOnRectangleIcon className="size-6 text-blue-400 ml-auto group-hover:text-blue-500" /> */}
          </a>

          <div className="flex border shadow-lg rounded-xl p-8 items-center mt-10">
            <ClockIcon className="size-8 text-violet-500" />
            <p className="ml-10 md:border-l-2 pl-4">
              8am to 5pm
              <br />
              Monday to Friday
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
