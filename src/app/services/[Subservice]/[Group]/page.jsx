import React from 'react'
import Detail from '../../Detail'

const page = () => {
    const  groups = ['کلاسیک','اسپایکی','هیبریدی','والیوم','مگا والیوم']
  return (
<div className='flex flex-col items-center justify-around my-10 md:flex-row '>
    <div className='flex justify-center p-10 gap-4 flex-wrap'>
    {groups.map((item,index)=>(
         <section className='bg-pink flex justify-center items-center text-sm max-w-10 max-h-16 text-white drop-shadow-5xl p-10  rounded-lg'>
         {item}
        </section>

    ))}
    </div>

       
        
        <Detail/>
        </div>
  )
}

export default page