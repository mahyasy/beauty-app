"use client";

import React, { useState } from "react";
import Form from "@/Components/Form";
import toast from "react-hot-toast";
import { revalidatePathAction, revalidateTagAction } from "@/actions/actions";

const CategoryForm = ({ category }) => {
  console.log(category);
  const [form, setForm] = useState({
    name: "",
    faName: "",
    subCategory: "",
    images: [],
  });

  const formChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    if (name === "images") return; //upload letter

    setForm({ ...form, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/category", {
      method: "POST",
      body: JSON.stringify(form),
      header: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.error) toast.error(data.error);
    if (data.message) {
      toast.success(data.message);
      revalidatePathAction("dashboard/admin");
      revalidateTagAction;
    }
  };

  return (
    <Form title="داشبورد" href="" icon="">
      <form className="flex flex-col items-center" onChange={formChangeHandler}>
        <input
          className="rounded-full p-2 w-[170px]"
          placeholder="نام دسته بندی"
          name="faName"
        />
        <input
          className="rounded-full p-2 w-[170px]"
          placeholder="نام انگلیسی دسته بندی"
          name="name"
        />
        <label htmlFor="subCategory">
          <span>دسته بندی والد:</span>
          <select name="subCategory" id="subCategory" className="my-3">
            <option value="">بدون والد</option>
            {category &&
              category.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.faName}
                </option>
              ))}
          </select>
        </label>
        <div className="flex items-center justify-center  py-3 rounded-lg ">
          <label>
            <input type="file" hidden name="images" accept="image/*" />
            <div
              className="w-40 aspect-video rounded flex items-center
      justify-center border-2 border-dashed border-gray cursor-pointer
      "
            >
              <span className="flex items-center text-brown">
                بارگزاری عکس..
              </span>
            </div>
          </label>
        </div>
        <button
          type="button"
          onClick={submitHandler}
          className="bg-pink mt-3 text-white  rounded-full w-[170px]  py-2"
        >
          ثبت دسته بندی
        </button>
      </form>
    </Form>
  );
};

export default CategoryForm;
