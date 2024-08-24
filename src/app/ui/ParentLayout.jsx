"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ParentLayout = ({ children }) => {
  const path = usePathname();
  return (
    <div className="md:flex flex-row-reverse justify-around  items-center ">
      <section
        className={` ${
          path !== "/"
            ? "hidden md:block"
            : "flex flex-row-reverse justify-around md:flex-col md:justify-center"
        }`}
      >
        <figure className="relative top-[-50px] left-2">
          <Image
            className="rounded-t-full drop-shadow-5xl h-auto  md:w-[150px] "
            src="/seven.png"
            width="105"
            priority={true}
            height="0"
            alt="shabgis"
          />
        </figure>
        <aside className="flex flex-col items-center md:relative left-2 top-0 ">
          <h1 className="text-brown text-xl font-cur font-extrabold tracking-[.20em] text-center mb-2 md:text-[30px]  ">
            SHABGIS
          </h1>
          <h1 className="text-pink  font-bold mb-2 ">سالن زیبایی در لواسان</h1>
          <p className="text-brown">زیبایی را از ما بخواهید</p>
        </aside>
      </section>
      <section className="flex justify-center md:w-1/2 ">{children}</section>
    </div>
  );
};

export default ParentLayout;
