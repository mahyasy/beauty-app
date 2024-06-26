"use client";

import Form from "./FormLayout";
import { FcKey } from "react-icons/fc";
import { useState, useEffect } from "react";
import { validform } from "./validform";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import Spiner from "./Spiner";

export default function SignIn() {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });
  const [err, setErr] = useState({});
  const [loading, setLoading] = useState(false);

  const [focus, setfocus] = useState({
    name: false,
    password: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    setErr(validform(form, "login"));
  }, [form, focus]);

  const focusHandler = (e) => {
    setfocus((prevState) => ({ ...prevState, [e.target.name]: true }));
  };
  const LoginHandler = async () => {
    setLoading(true);
    const res = await signIn("credentials", {
      username: form.name,
      password: form.password,
      redirect: false,
    });
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("ورود انجام شد");
    }
    setLoading(false);
  };

  return (
    <Form
      title="ورود"
      text="ایجادحساب کاربری"
      href="/register"
      icon={<FcKey />}
    >
      <div className="flex flex-col">
        <div className="my-5 flex flex-col items-center">
          <input
            className="rounded-full p-2"
            placeholder="نام کاربری"
            name="name"
            value={form.name}
            onChange={handleChange}
            onFocus={focusHandler}
          />
          {err.name && focus.name && (
            <span className="text-sm relative text-red ">{err.name}</span>
          )}
        </div>
        <div className="my-5 flex flex-col items-center ">
          <input
            className="rounded-full p-2 "
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
        {loading ? (
          <button className="bg-pink py-2 rounded-full">
            <Spiner w="w-5" h="h-5" border="border-[3px]" />
          </button>
        ) : (
          <button
            onClick={LoginHandler}
            className="bg-pink mt-3 text-white rounded-full  py-2"
          >
            ورود
          </button>
        )}
      </div>
    </Form>
  );
}
