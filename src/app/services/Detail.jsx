import React from "react";
import Image from "next/image";
import { ImPhone } from "react-icons/im";

const Detail = () => {
  return (
    <div className="flex flex-col items-center w-72  py-10  rounded-t-full">
      <main className="flex flex-col items-center ">
        <Image
          src="/eyelash.jpg"
          width={130}
          height={100}
          priority={false}
          className="rounded-t-full w-[160px] h-auto md:hidden "
          alt="مژه"
        />
        <nav className="flex justify-center gap-2 mt-8">
          <li className="list-none bg-pink text-white p-2 rounded-lg"> کلاسیک</li>
          <li className="list-none bg-pink text-white p-2 rounded-lg">هیبریدی</li>
          <li className="list-none bg-pink text-white p-2 rounded-lg">اسپایکی</li>
          <li className="list-none bg-pink text-white p-2 rounded-lg">والیوم</li>
          <li className="list-none bg-pink text-white p-2 rounded-lg">مگاوالیوم</li>
        </nav>
        <article className="text-sm text-wrap   my-8 px-4">
          <h1 className="font-extrabold my-2 ">اکستنشن کلاسیک:</h1>
          در این شیوه از مژه های تک تار استفاده میشود. شیوه کار به اینصورت هست
          که روی یک تار مژه ی فرد، یک تار اکستنشن مژه گذاشته میشه، به این صورت
          حجم اکستنشن مناسب با حجم مژه ی فرد پر میشود.
        </article>
      </main>
      <span className="flex  justify-around items-start gap-2 ">
        <time className="bg-blue-500 text-white p-2  rounded-lg z-20">زمان :2ساعت</time>
        <mark className="bg-green-400 text-white  p-2  rounded-lg z-20">قیمت:480</mark>
      </span>
      <button className="bg-pink text-white  flex rounded-lg mt-3 px-10 whitespace-nowrap z-20">
        تماس با ما
        <ImPhone className="text-green-500" />
      </button>
    </div>
  );
};

export default Detail;
