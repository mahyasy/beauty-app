import Image from "next/image";
import "../../ui/call.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

export default function call() {
  const data = [
    {
      name: "instagram",
      link: "https://www.instagram.com/shabgis_beauty_salon/",
      smallLink: "shabgis_beauty_salon",
      icon: <FaInstagram />,
    },
    {
      name: "mobile",
      link: "09126142891",
      smallLink: "09126142891",
      icon: <FaMobileAlt />,
    },
    {
      name: "whatsapp",
      link: "https://w.app/Shabgis ",
      smallLink: "https://w.app/Shabgis ",
      icon: <FaWhatsapp />,
    },
    {
      name: "telepone",
      link: "https://www.instagram.com/shabgis_beauty_salon/",
      smallLink: "021-26570195",
      icon: <FaPhoneAlt />,
    },
  ];
  return (
    <div className="flex justify-center mx-10">
      <section className="flex flex-col items-center  rounded-t-full  border border-brown  overflow-hidden py-10 min-w-[350px]   h-auto">
        <Image src="/logo.png" width={100} height={100} alt="shabgis" />
        <h1 className="text-brown text-3xl font-extrabold">تماس با ما</h1>
        <main className="flex flex-col items-end gap-4 m-10">
          {data.map((item) => (
            <a href={item.link} className="flex overflow-hidden text-nowrap">
              <div className="container">
                <p className="text-nowrap text-lg rounded-r-full link">
                  {item.smallLink}
                </p>
              </div>

              <span className="bg-pink text-white rounded-r-full p-1 icon">
                {item.icon}
              </span>
            </a>
          ))}
        </main>
      </section>
    </div>
  );
}
