"use client";
import { FcPhone } from "react-icons/fc";
import { useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FcInfo } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { HiScissors } from "react-icons/hi2";
import {useOnClickOutside} from '../Function/Function'
import Link from "next/link";

const Menu = () => {
  const navLink = [
    {id:1, name: 'خانه', path:'/',tag:<FcHome/>},
    {id:2, name: 'خدمات', path:'/services',tag:<HiScissors/>},
    {id:3, name: 'درباره ما', path:'/about',tag:<FcInfo/>},
    {id:4, name:"تماس با ما", path:'/call',tag:<FcPhone/>}

  ]
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
        <nav  ref={ref} className="absolute flex flex-col justify-around   border border-brown/20  right-7 shadow-lg top-10 w-40 h-40 bg-cream z-30 rounded-lg">

  {navLink.map((link)=>{
    return(
   
   <Link onClick={TogglerHandler} key={link.id}  className="flex flex-row mr-5 gap-2  items-center  text-brown "  href={link.path}>
    <p className="text-sm">{link.name}</p>
   <span className="text-lg">{link.tag}</span>
   </Link>
   

  )})}
       
        </nav>
      )}
    </div>
  );
};

export default Menu;
