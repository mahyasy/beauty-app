"use client";
import Image from "next/image";

export default function Service() {
  const service = [
    { id: self.crypto.randomUUID(), name: "ناخن", src: "/nail.jpg" },
    { id: self.crypto.randomUUID(), name: "کوتاهی", src: "/haircut.jpg" },
    { id: self.crypto.randomUUID(), name: "مژه", src: "/eyelash.jpg" },
    { id: self.crypto.randomUUID(), name: "صافی و احیا", src: "/hair.jpg" },
    { id: self.crypto.randomUUID(), name: "صافی و احیا", src: "/hair.jpg" },
    { id: self.crypto.randomUUID(), name: "صافی و احیا", src: "/hair.jpg" },
  ];

  return (
    <div className="flex justify-around flex-wrap z-20 ">
      {service.map((serv) => {
        return (
          <section
            key={serv.id}
            className="border border-brown m-8 xs:m-4  flex flex-col items-center p-10  rounded-t-full w-[120px] relative  h-40"
          >
            <Image
              className="rounded-t-full  h-20 w-110 px-2 absolute top-2"
              src={serv.src}
              width={100}
              height={190}
              alt={serv.name}
              property="false"
            />
            <h1 className="m-1 mt-10 py-4 text-nowrap  text-[12px] font-bold absolute  top-10">
              {serv.name}
            </h1>
            <button className="bg-pink rounded-lg text-[10px] break-words w-12 absolute mt-20   text-white">
              مشاهده جزییات
            </button>
          </section>
        );
      })}
    </div>
  );
}
