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
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Spiner from "./modules/Spiner";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;
  const [role, setRole] = useState("");
  const { data, status } = useSession();

  useEffect(() => {
    (async function () {
      const res = await fetch("/api/role");
      const data = await res.json();
      if (!data.error) setRole(data.role);
    })();
  }, []);

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
        </nav>

        <aside className="ml-10 bg-pink p-3 rounded-lg flex justify-center items-center">
          {status === "loading" ? (
            <Spiner w="w-5" h="h-5" border="border-2" />
          ) : status === "authenticated" ? (
            <p className="text-white">{data.user?.name ?? "U"}</p>
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
