"use client";

import { useEffect, useState } from "react";
import Form from "./FormLayout";
import { FcCheckmark } from "react-icons/fc";
import toast from "react-hot-toast";
import { validform } from "./validform";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    password: "",
    mobile: "",
  });
  const [err, setErr] = useState({});

  const [focus, setfocus] = useState({
    name: false,
    password: false,
    mobile: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  useEffect(() => {
    setErr(validform(form));
  }, [form, focus]);

  const focusHandler = (e) => {
    setfocus((prevState) => ({ ...prevState, [e.target.name]: true }));
  };

  const submitHandler = async () => {
    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        username: form.name,
        mobile: form.mobile,
        password: form.password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // setTimeout(() => router.replace("/Login"), 2000);
    const data = await res.json();
    console.log(data);
    if (data.error) toast.error(data.error);
    if (data.message) toast.success(data.message);
  };

  return (
    <Form
      title="ثبت نام"
      text="ورود به حساب کاربری"
      href="/Login"
      icon={<FcCheckmark />}
    >
      <div className="flex flex-col">
        <div className="my-3 flex flex-col items-center ">
          <input
            className="rounded-full p-2 "
            placeholder="نام کاربری"
            name="name"
            value={form.name}
            onChange={handleChange}
            onFocus={focusHandler}
            style={{
              borderColor: err.name && focus.name ? "red" : "",
            }}
          />
          {err.name && focus.name && (
            <span className="text-sm relative text-red ">{err.name}</span>
          )}
        </div>

        <div className="my-5 flex flex-col items-center ">
          <input
            className="rounded-full p-2"
            placeholder="کلمه عبور"
            name="password"
            value={form.password}
            onChange={handleChange}
            onFocus={focusHandler}
          />
          {err.password && focus.password && (
            <span className="text-sm relative text-red ">{err.password}</span>
          )}
        </div>
        <div className="my-5 flex flex-col items-center ">
          <input
            className="rounded-full p-2"
            placeholder=" شماره موبایل"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            onFocus={focusHandler}
          />
          {err.mobile && focus.mobile && (
            <span className="text-sm text-red ">{err.mobile}</span>
          )}
        </div>

        <button
          onClick={submitHandler}
          className="bg-pink  text-white rounded-full  py-2"
        >
          ثبت نام
        </button>
      </div>
    </Form>
  );
}
