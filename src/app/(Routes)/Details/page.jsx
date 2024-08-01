import React from 'react';
import Image from 'next/image';
import Detail from './Detail';

const page = () => {
  return (
 <div className='flex justify-around items-center '>
      <div>
        <Detail/>
    </div>
    <figure className='hidden md:block '>
    <Image
            className="rounded-t-full drop-shadow-5xl h-auto  md:w-[150px] "
            src="/seven.jpg"
            width="105"
            priority={false}
            height="0"
            alt="shabgis"
          />
            <aside className="flex flex-col items-center">
          <h1 className="text-brown text-3xl font-cur relative left-4 font-extrabold tracking-[.20em] text-center my-2 md:text-[30px]  ">
            SHABGIS
          </h1>
          <h1 className="text-pink  font-bold mb-2">سالن زیبایی در لواسان</h1>
          <p className="text-brown">زیبایی را از ما بخواهید</p>
        </aside>
    </figure>
  

 </div>
  )
}

export default page