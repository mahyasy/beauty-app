import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

export default function call() {
  const data = [
    {
      name: "instagram",
      src: "/instag.png",
      link: "https://www.instagram.com/shabgis_beauty_salon/",
      smallLink: "shabgis_beauty_salon",
      icon: <FaInstagram />,
    },
    {
      name: "mobile",
      src: "/mobile.png",
      link: "09126142891",
      smallLink: "09126142891",
      icon: <FaMobileAlt />,
    },
    {
      name: "whatsapp",
      src: "/whats.png",
      link: "https://w.app/Shabgis ",
      smallLink: "https://w.app/Shabgis ",
      icon: <FaWhatsapp />,
    },
    {
      name: "telepone",
      src: "/phone.png",
      link: "https://www.instagram.com/shabgis_beauty_salon/",
      smallLink: "021-26570195",
      icon: <FaPhoneAlt />,
    },
  ];
  return (
<div className="flex justify-center">
<section className="flex flex-col items-center  rounded-t-full  border border-brown p-10 w-70 h-auto">
  <Image src='/logo.png' width={100} height={100} alt="shabgis" />
  <h1 className="text-brown text-3xl font-extrabold">تماس با ما</h1>
  <main className="flex flex-col items-end gap-4 m-10" >
    {data.map((item)=>
    <a href={item.link} className="flex" >
      <p className="text-nowrap bg-brown text-white rounded-r-full ">{item.smallLink}</p>
      <span className="bg-pink text-white rounded--full p-1" >{item.icon}</span>

    </a>
    
    )}

  </main>

</section>
</div>
  );
}
