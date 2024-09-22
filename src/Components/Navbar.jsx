"use client";

import Menu from "./Menu";
import Register from "./Register";

import { FcPhone } from "react-icons/fc";
import { FcInfo } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { HiScissors } from "react-icons/hi2";
import { ImUndo2 } from "react-icons/im";
import Link from "next/link";
import { usePathname } from "next/navigation";
<<<<<<< HEAD
=======
import { useEffect, useState } from "react";
>>>>>>> 84658196a431db0835904426d8933b9ca4f6d829

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;
<<<<<<< HEAD
=======
  const [role, setRole] = useState("");

  useEffect(() => {
    (async function () {
      const res = await fetch("/api/role");
      const data = await res.json();
      if (!data.error) setRole(data.role);
    })();
  }, []);
>>>>>>> 84658196a431db0835904426d8933b9ca4f6d829

  const navLink = [
    { id: 1, name: "خانه", path: "/", tag: <FcHome /> },
    { id: 2, name: "خدمات", path: "/services", tag: <HiScissors /> },
    { id: 3, name: "درباره ما", path: "/about", tag: <FcInfo /> },
    { id: 4, name: "تماس با ما", path: "/call", tag: <FcPhone /> },
  ];
  return (
    <div>
      <section className="flex sm:hidden  justify-between w-100 mx-4 mt-3 text-2xl ">
        <Menu />
        {pathname === "/Details" ? (
          <ImUndo2 className="text-brown" />
        ) : (
          <Register />
        )}
      </section>
      <section className="hidden md:flex justify-between p-6 select-none">
        <nav className="flex mr-5  justify-between">
          {navLink.map((link) => {
            return (
              <span
                key={link.id}
                className="pr-10 flex flex-row  items-center  gap-2 "
              >
                <Link
                  className={
                    isActive(link.path)
                      ? "border-b-2 border-pink rounded-md "
                      : ""
                  }
                  href={link.path}
                >
                  {link.name}
                </Link>
                {link.tag}
              </span>
            );
          })}
<<<<<<< HEAD
=======
          {role && role === "ADMIN" && (
            <span className="pr-10 flex flex-row  items-center  gap-2 ">
              <Link
                className={
                  isActive("/dashboard/admin")
                    ? "border-b-2 border-pink rounded-md "
                    : ""
                }
                href={"/dashboard/admin"}
              >
                دشبورد
              </Link>
            </span>
          )}
>>>>>>> 84658196a431db0835904426d8933b9ca4f6d829
        </nav>

        <aside className="ml-10 bg-pink p-3 rounded-lg ">
          {pathname === "/Details" ? (
            <ImUndo2 className="text-white" />
          ) : (
            <Link href="/register" className="text-[color:white]">
              ورود/ثبت نام
            </Link>
          )}
        </aside>
      </section>
    </div>
  );
};

export default Navbar;
