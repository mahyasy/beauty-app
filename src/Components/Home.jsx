import Image from "next/image";
import Service from "./service";

export default function Home() {
  return (
    <div className="md:flex flex-row-reverse justify-around">
      <section className="flex flex-row-reverse justify-around md:flex-col md:justify-center ">
        <figure className="relative top-[-50px] left-2">
          <Image
            className="rounded-t-full drop-shadow-5xl h-auto  md:w-[150px] "
            src="/seven.jpg"
            width="105"
            priority={false}
            height="0"
            alt="shabgis"
          />
        </figure>
        <aside className="md:relative left-2 top-0 ">
          <h1 className="text-brown text-3xl font-cur relative left-4 font-extrabold tracking-[.20em] text-center mb-2 md:text-[30px]  ">
            SHABGIS
          </h1>
          <h1 className="text-pink  font-bold mb-2">سالن زیبایی در لواسان</h1>
          <p className="text-brown">زیبایی را از ما بخواهید</p>
        </aside>
      </section>
      <section className="flex justify-center md:w-1/2 ">
        <Service />
      </section>
    </div>
  );
}
