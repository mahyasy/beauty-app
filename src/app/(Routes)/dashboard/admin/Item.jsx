import React from "react";
import Image from "next/image";

const Item = ({ item, setService }) => {
  return (
    <section
      key={item.id}
      className="border border-brown m-8 xs:m-4  flex flex-col items-center   rounded-t-full w-[120px] h-40 z-20 "
    >
      <Image
        className="rounded-t-full mt-4 h-auto w-110 px-2"
        src={item.src}
        width={100}
        height={190}
        alt={item.name}
        property="false"
      />
      <h1 className="m-1 text-[12px] font-bold">{item.faName}</h1>
      <button className="bg-pink rounded-lg text-[10px] break-words w-12 text-white">
        مشاهده جزییات
      </button>
    </section>
  );
};

export default Item;
