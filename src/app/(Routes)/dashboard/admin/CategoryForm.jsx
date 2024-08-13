"use client";

import React, { useState } from "react";
import Form from "@/Components/Form";
import toast from "react-hot-toast";
import { revalidatePathAction, revalidateTagAction } from "@/actions/actions";

import { Select } from "antd";

const CategoryForm = ({ category }) => {
  console.log(category);
  const option = category.map((item) => {
    return {
      value: item._id,
      label: item.faName,
    };
  });
  const [form, setForm] = useState({
    name: "",
    faName: "",
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
      revalidatePathAction("dashboard/admin", "layout");
      setForm({
        name: "",
        faName: "",
        subCategory: "",
        images: [],
      });
    }
  };

  const onChange = (value) => {
    setForm({ ...form, subCategory: value });
  };

  return (
    <Form title="داشبورد" href="" icon="">
      <form className="flex flex-col items-center">
        <input
          className="rounded-full p-2 w-[170px]"
          placeholder="نام دسته بندی"
          name="faName"
          value={form.faName}
          onChange={formChangeHandler}
        />
        <input
          className="rounded-full p-2 w-[170px]"
          placeholder="نام انگلیسی دسته بندی"
          name="name"
          value={form.name}
          onChange={formChangeHandler}
        />
        <label htmlFor="subCategory" className="py-4">
          <span className="pl-3">دسته بندی والد:</span>
          <Select
            showSearch
            placeholder="انتخاب دسته بندی"
            optionFilterProp="label"
            onChange={onChange}
            // onSearch={onSearch}
            options={option}
          />
        </label>
        <div className="flex items-center justify-center  py-3 rounded-lg ">
          <label>
            <input
              type="file"
              hidden
              name="images"
              accept="image/*"
              onChange={formChangeHandler}
            />
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
