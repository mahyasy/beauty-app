import "./ui/global.css";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import { Toaster } from "react-hot-toast";

import { AntdRegistry } from "@ant-design/nextjs-registry";



export const metadata = {
  title: "Shabgis",
  description: "سالن زیبایی شبگیس لواسان",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <AntdRegistry>
          <Navbar />
          <Image
            priority={true}
            className="left-leaf z-0"
            src="/leaf.jpg"
            width="75"
            height="70"
            alt="leaf"
          />
          <Image
            priority={true}
            className="right-leaf z-0"
            src="/leaf.jpg"
            width="75"
            height="70"
            alt="leaf"
          />
          {children}
          <Toaster />
        </AntdRegistry>
      </body>
    </html>
  );
}
