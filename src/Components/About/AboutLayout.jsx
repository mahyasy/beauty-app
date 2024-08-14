import React from "react";
import Image from "next/image";
import { content } from "./info";

const AboutLayout = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4   ">
      {content.map((item) => (
        <span className="flex justify-between border  items-center  border-brown  py-3  even:flex-row-reverse ">
          <Image
            src={item.src}
            width={70}
            height={30}
            priority={false}
            alt={item.title}
            className="rounded-t-full z-10 mx-3 drop-shadow-5xl  "
          />
          <section className="w-72 m-2 ">
            <h3 className="text-pink  font-bold">{item.title}</h3>
            <p className="text-brown  text-sm ">{item.text}</p>
          </section>
        </span>
      ))}
    </div>
  );
};

export default AboutLayout;
