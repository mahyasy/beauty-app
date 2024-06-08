"use client";
import { FcPhone } from "react-icons/fc";
import { useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FcInfo } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { HiScissors } from "react-icons/hi2";
import {useOnClickOutside} from '../Components/Function/Function'

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef();

  const TogglerHandler = () => {
    setOpen(!isOpen)
    }
   
  
  useOnClickOutside(ref,()=>setOpen(false))

  if (isOpen) document.documentElement.scroll = "disable";

  return (
    <div>
      <FiMenu
        onClick={TogglerHandler}
        className="text-brown drop-shadow-3xl  "
      />
      {isOpen && (
        <section ref={ref} className="absolute flex flex-col justify-around   border border-brown/20  right-7 shadow-lg top-10 w-40 h-40 bg-cream z-30 rounded-lg">
 <nav className="flex flex-row mr-5 gap-2  items-center  text-brown ">
            <p className="text-sm"> خانه</p>
            <FcHome className="text-lg" />
          </nav>
          <div className="flex flex-row mr-5 gap-2  items-center  text-brown ">
            <p className="text-sm"> خدمات 
            
           </p>
           <HiScissors className="text-lg"/>
            
          </div>
          <div className="flex flex-row mr-5 gap-2  items-center  text-brown ">
            <p className="text-sm"> درباره با ما</p>
            <FcInfo className="text-lg" />
          </div>
          <div className="flex flex-row mr-5 gap-2  items-center  text-brown ">
            <p className="text-sm"> تماس با ما</p>
            <FcPhone className="text-lg" />
          </div>
        </section>
      )}
    </div>
  );
};

export default Menu;
