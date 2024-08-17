import React from 'react';
import Image from 'next/image';
import Detail from '../../services/Detail';

const page = () => {
  return (
 <div className='flex justify-center items-center '>
   
    <figure className='hidden md:block '>
    <Image
            className="rounded-t-full ml-10 drop-shadow-5xl  md:w-auto  h-72"
            src="/eyelash.jpg"
            width={200}
            priority={false}
            height={180}
            alt="eyelash"
          />
    
    </figure>
    <div>
        <Detail/>
    </div>
  

 </div>
  )
}

export default page