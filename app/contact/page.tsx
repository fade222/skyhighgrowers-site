import {
  ArrowRightEndOnRectangleIcon,
  BuildingOfficeIcon,
  ClockIcon,
  EnvelopeIcon,
  LinkIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import ContactNav from '../components/contactNav';

export default function contact() {
  return (
    <>
      <ContactNav />
      <div className=''>
        <div className='mt-6 p-6 md:p-10 lg:mx-96'>
          <div className='mt-10 flex items-center rounded-xl border p-8 shadow-lg shadow-green-800/20'>
            <BuildingOfficeIcon className='size-8 w-16 text-teal-500' />
            <p className='ml-10 pl-4 md:border-l-2'> Sky Growers Limited</p>
          </div>

          <a
            className='group mt-10 flex w-full items-center rounded-xl border p-8 shadow-lg shadow-green-800/20 hover:ml-1 hover:shadow-xl hover:shadow-green-800/20'
            href='https://maps.app.goo.gl/yCGQvrvkp1aJSBpk8'
          >
            <MapPinIcon className='size-8 w-16 text-red-500' />
            <p className='ml-10 pl-4 md:border-l-2'>
              480 Pound Rd, Yaldhurst
              <br />
              Christchurch
            </p>
            {/* <ArrowRightEndOnRectangleIcon className="size-6 text-blue-400 group-hover:text-blue-500 ml-auto" /> */}
          </a>

          <a
            className='group mt-10 flex w-full items-center rounded-xl border p-8 shadow-lg shadow-green-800/20 hover:ml-1 hover:shadow-xl hover:shadow-green-800/20'
            href='tel:0277 300 400'
          >
            <PhoneIcon className='size-8 w-16 text-blue-500' />
            <p className='ml-10 px-4 md:border-l-2'>0277 300 400</p>
            {/* <ArrowRightEndOnRectangleIcon className="size-6 text-blue-400 group-hover:text-blue-500 ml-auto" /> */}
          </a>

          <a
            className='group mt-10 flex w-full items-center rounded-xl border p-8 shadow-lg shadow-green-800/20 hover:ml-1 hover:shadow-xl hover:shadow-green-800/20'
            href='mailto:skygrowers@gmail.com'
          >
            <EnvelopeIcon className='size-8 w-16 text-yellow-500' />
            <p className='ml-10 px-4 md:border-l-2'>skygrowers@gmail.com</p>
            {/* <ArrowRightEndOnRectangleIcon className="size-6 text-blue-400 ml-auto group-hover:text-blue-500" /> */}
          </a>

          <div className='mt-10 flex items-center rounded-xl border p-8 shadow-lg shadow-green-800/20'>
            <ClockIcon className='size-8 w-16 text-violet-500' />
            <p className='ml-10 pl-4 md:border-l-2'>
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
