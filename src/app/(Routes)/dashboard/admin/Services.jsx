import React from 'react';
import Image from 'next/image';
import { GoTrash } from "react-icons/go";
import { CiEdit } from "react-icons/ci";

const Services = ({service,setService}) => {

  
  return (
    <div>
{service.data?.map((item,index)=>(
    <div key={index}>
                  <section
 
            className="border border-brown m-8 xs:m-10  flex flex-col items-center   rounded-t-full w-[120px] h-40  "
          >
            <Image
              className="rounded-t-full mt-4 h-auto w-110 px-2"
              src={item.images}
              width={100}
              height={190}
              alt={item.name}
              property="false"
            />
            <h1 className="m-1 text-[12px] font-bold ">{item.faName}</h1>
            <button className="bg-pink rounded-lg text-[10px] break-words w-12 text-white ">
              مشاهده جزییات
            </button>
            <span className='relative top-10 '>
        <button className='bg-red text-white mx-3 p-1 rounded-lg'>
          <GoTrash/>
        </button>
        <button className='bg-gray text-white mx-3 mt-2 p-1 rounded-lg'>
          <CiEdit/>
        </button>
      </span>
          </section>

    </div>
       
      ))}
     
    </div>
  )
}

export default Services