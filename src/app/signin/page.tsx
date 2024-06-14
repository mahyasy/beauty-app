"use client";

import { signIn, signOut } from "next-auth/react";
export default function Signin() {
  const loginHandler = async () => {
    const res = await signIn("credentials", {
      mobile: "09118636719",
      password: "111111",
      redirect: false,
    });
    console.log(res);
    if (res.error) {
      window.alert(res.error);
    } else {
      window.alert("ورود انجام شد");
    }
  };

  const signOutHandler = async () => {
    await signOut();
    window.alert("خروج از حساب انجام شد");
  };
  return (
    <>
      <h1>Signin</h1>
      <button className="border-2 p-2 rounded-md mx-52" onClick={loginHandler}>
        login test
      </button>
      <button
        className="border-2 p-2 rounded-md mx-52"
        onClick={signOutHandler}
      >
        sign out
      </button>
    </>
  );
}
