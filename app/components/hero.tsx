import Image from 'next/image';
import backgroundImage from '../public/coriander-bg.jpg';
import React from 'react';

export interface heroProps {
  heroText: string;
}

export default function Hero({ heroText }: heroProps) {
  return (
    <div className='grid'>
      <Image
        className='col-start-1 row-start-1 h-[444px] w-full object-cover'
        placeholder='blur'
        loading='lazy'
        src={backgroundImage}
        alt=''
      />

      <h2 className='col-start-1 row-start-1 mt-20 bg-gradient-to-r from-green-200 to-green-500 bg-clip-text p-6 text-center text-5xl font-extrabold text-green-100 text-transparent md:w-full md:text-6xl lg:mt-28 lg:px-72 xl:text-7xl'>
        {heroText}
      </h2>

      <div className='col-start-1 row-start-2 w-full bg-gradient-to-b from-green-800 from-10% to-green-600 p-1'></div>
    </div>
  );
}
