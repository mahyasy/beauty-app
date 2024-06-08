

import Menu from './Menu';
import Register from './Register'


import { FcPhone } from "react-icons/fc";
import { FcInfo } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { HiScissors } from "react-icons/hi2";


const Navbar = () => {
  const navLink = [
    {id:1, name: 'خانه', path:'/'},
    {id:2, name: 'خدمات', path:'/sevices'},
    {id:3, name: 'درباره ما', path:'/about'},
    {id:4, name:"ورود/ثبت نام", path:'/register'}

  ]
  return (
    <div>
      <section className="flex sm:hidden  justify-between w-100 mx-4 mt-3 text-2xl ">
        <Menu/>
        <Register/>

      </section>
      <section className="hidden md:flex justify-between p-6 select-none">
        <nav className="flex mr-5  justify-between">
        <span className="pr-10 flex flex-row  items-center  gap-2 ">خانه <FcHome/></span>
        <span className="mr-10 flex flex-row  items-center gap-2" >خدمات <HiScissors/></span>
        <span className="mr-10 flex flex-row  items-center gap-2">درباره ما <FcInfo/></span>
       
        <span className="mr-10 flex flex-row  items-center gap-2">تماس با ما <FcPhone/></span>
        </nav>
       
        <div className="ml-10 bg-pink p-3 rounded-lg ">
          <p className="text-[color:white]" >
            ورود/ثبت نام
          </p>
          
        </div>
      </section>

    </div>
  );
};

export default Navbar;
