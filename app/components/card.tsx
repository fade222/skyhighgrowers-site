import Image from 'next/image';
import React from 'react';
import dateFormatter from '../utils/dateFormatter';

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
    <div className='isolate m-4 grid grid-cols-6 rounded-xl border bg-white font-sans shadow-lg shadow-green-800/20 lg:m-16 lg:mx-96 lg:min-h-64'>
      <div className='relative col-span-2'>
        <Image
          className='rounded-l-xl object-cover'
          src={cropPhoto}
          alt={name}
          fill={true}
        />
      </div>

      <div className='col-span-4 grid grid-rows-3 pl-2 lg:p-4'>
        <div className='lg:flex lg:items-baseline'>
          <h1 className='text-2xl font-semibold text-slate-900 lg:text-4xl'>
            {name}
          </h1>

          <h2 className='-mt-1 text-sm italic text-slate-700 lg:ml-2 lg:text-xl'>
            {scientificName}
          </h2>
        </div>
        <p className='mt-4 text-sm text-slate-900 lg:text-xl'>{cropDetails}</p>

        <div className='mb-2 mt-4 text-sm font-medium text-slate-900 lg:text-lg'>
          Harvest:
          <span className='pl-1 font-normal text-slate-900'>
            {dateFormatter(harvestDate, 'MMM dd, yyyy')}
          </span>{' '}
          <br />
          Yield:
          <span className='pl-1 font-normal text-slate-900'>{cropYield}</span>
        </div>
      </div>
    </div>
  );
}
