import React from 'react'
import Image from 'next/image'
import { ImPhone } from "react-icons/im";

const Detail = () => {
  return (
    <div className='flex flex-col items-center w-72 border py-10 border-brown rounded-t-full'>
        <h1 className='text-pink font-extrabold '>اکستنشن کلاسیک</h1>
        <main className='flex flex-col items-center '>
            <Image
            src='/eyelash.jpg'
            width={120}
            height={100}
            priority={false}
            className='rounded-t-full w-[160px] '
            />
            <article className='text-sm text-wrap  px-10'>
            <h1 className='font-extrabold my-2'>اکستنشن کلاسیک:</h1>
            در این شیوه از مژه های تک تار استفاده میشود. شیوه کار به اینصورت هست که روی یک تار مژه ی فرد، یک تار اکستنشن مژه گذاشته میشه، به
             این صورت حجم اکستنشن مناسب با حجم مژه ی فرد پر میشود.
            </article>
        </main>
        <span className='flex justify-around gap-5 mt-2'>
        
            <time className='bg-gray drop-shadow-5xl rounded-lg '>زمان :2ساعت</time>
            <mark className='bg-pink drop-shadow-5xl rounded-lg'>قیمت:480</mark>
        </span>
        <button className='bg-green drop-shadow-5xl flex rounded-lg mt-3 px-10 whitespace-nowrap'>
      تماس با ما
      <ImPhone/>
         
          </button>
        
        </div>
  )
}

export default Detail