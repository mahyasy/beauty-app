import AboutLayout from "@/Components/About/AboutLayout";
import Image from "next/image";


export default function About() {
  return (
    <div className="px-10 flex flex-col items-center ">
          <Image src="/logo.png" width={100} height={100} alt="shabgis" />
      <AboutLayout />
    </div>
  );
}
