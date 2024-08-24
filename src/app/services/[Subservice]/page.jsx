import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex flex-wrap justify-around mt-24 items-center'>
        <section className='bg-pink flex justify-center items-center max-w-24 max-h-24 text-white drop-shadow-5xl p-10 rounded-lg'>
         مژه موقت
        </section>
        <section className='bg-pink text-center flex justify-center items-center max-w-24 max-h-24 text-white drop-shadow-5xl p-10 rounded-lg'>
       اکستنشن مژه
        </section>
        
        

        <div className='flex justify-around items-center '>
  
    <figure className='hidden md:block '>
    <Image
            className="rounded-t-full drop-shadow-5xl h-auto  md:w-[150px] "
            src="/seven.png"
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
        
        

    </div>
  )
}

export default page