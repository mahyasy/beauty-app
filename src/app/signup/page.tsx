"use client";

import Image from "next/image";
import SignUp from "../../Components/SignUp";
import Form from "../../Components/Form";
import { FcCheckmark } from "react-icons/fc";
import { useState } from "react";
import toast from "react-hot-toast";
import ParentLayout from "../ui/ParentLayout";

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

    if (data.error) toast.error(data.error);
    if (data.message) toast.success(data.message);
  };

  return (
    <ParentLayout>
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
    </ParentLayout>
  );
}
