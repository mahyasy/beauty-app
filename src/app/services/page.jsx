import Service from "../../Components/service";
import Image from "next/image";

export default function Services() {
  return (
    <section className="flex flex-col justify-center items-center mt-8">
      <Image src="/logo.png" width={100} height={100} alt="shabgis" />
      <h1 className="text-brown text-xl font-extrabold tracking-[.20em]   ">
        SHABGIS
      </h1>

      <Service />
    </section>
  );
}
