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
    <div className="border border-brown md:border-none rounded-t-full m-10 flex flex-col  items-center ">
      <h1 className="mt-4 text-lg">تماس با ما</h1>
      <div className="flex m-8 flex-wrap  gap-2 justify-center  items-baseline ">
        {data.map((item) => (
          <section className="p-2 flex flex-col items-center ">
            <Image
              src={item.src}
              alt={item.name}
              className=" hover:scale-125 drop-shadow-5xl"
              width={80}
              height={80}
            />
            <span className=" flex text-center py-2  rounded-lg ">
              <a className="text-wrap text-sm" href={item.link}>
                {item.smallLink}
              </a>
              <p className="bg-pink  text-white relative right-0 rounded-l-full p-1">
                {item.icon}
              </p>
            </span>
          </section>
        ))}
      </div>
    </div>
  );
}
