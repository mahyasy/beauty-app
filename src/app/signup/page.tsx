"use client";

import Image from "next/image";
import SignUp from "../../Components/SignUp";
import Form from "../../Components/Form";
import { FcCheckmark } from "react-icons/fc";
import { useState } from "react";
import toast from "react-hot-toast";

interface StateType {
  name: string;
  password: string;
  mobile: string;
}

export default function Register() {
  const [form, setForm] = useState<StateType>({
    name: "",
    password: "",
    mobile: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const signUpHandler = async () => {
    const phoneRegx = /^(\+98|0)?9\d{9}$/g;
    if (!form.name || !form.mobile || !form.password) {
      toast.error("فیلد هارا پر کنید");
      return;
    } else if (!phoneRegx.test(form.mobile)) {
      toast.error("شماره معتبر وارد کنید");
      return;
    }

    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Contetnt-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);

    if (data.error) toast.error(data.error)
    if (data.message) toast.success(data.message)

  };

  return (
    <section className="mt-10 flex justify-center md:justify-around items-stretch ">
      <Form
        title="ثبت نام"
        text="ورود به حساب کاربری"
        href="/Login"
        icon={<FcCheckmark />}
      >
        <div className="my-5">
          <input
            className="rounded-full p-2"
            placeholder="نام "
            name="name"
            value={form.name}
            onChange={changeHandler}
          />
        </div>
        <div className="my-5 ">
          <input
            className="rounded-full p-2"
            placeholder="کلمه عبور"
            name="password"
            value={form.password}
            onChange={changeHandler}
          />
        </div>
        <div>
          <input
            className="rounded-full p-2"
            placeholder=" شماره موبایل"
            name="mobile"
            value={form.mobile}
            onChange={changeHandler}
          />
        </div>

        <button
          type="button"
          onClick={signUpHandler}
          className="border-2 rounded-md p-1 my-2"
        >
          ثبت نام تستی
        </button>
      </Form>

      <aside className="hidden md:flex ">
        <section className="flex flex-row-reverse justify-around md:flex-col md:justify-center ">
          <figure className="relative mb-4 left-2">
            <Image
              className="rounded-t-full drop-shadow-5xl h-auto  md:w-[150px] "
              src="/seven.jpg"
              width="105"
              priority={false}
              height="0"
              alt="shabgis"
            />
          </figure>
          <aside className="md:relative left-2 top-0 ">
            <h1 className="text-brown text-3xl font-cur relative left-4 font-extrabold tracking-[.20em] text-center mb-2 md:text-[30px]  ">
              SHABGIS
            </h1>
            <h1 className="text-pink  font-bold mb-2">سالن زیبایی در لواسان</h1>
            <p className="text-brown">زیبایی را از ما بخواهید</p>
          </aside>
        </section>
      </aside>
    </section>
  );
}
