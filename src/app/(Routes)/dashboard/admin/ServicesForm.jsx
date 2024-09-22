import { fetchCategoty, revalidatePathAction } from "@/actions/actions";
import Form from "@/Components/Form";
import supabase from "@/lib/supabase/supabase";
import { Spin } from "antd";
import Image from "next/image";
import React, { useEffect, useState, useTransition } from "react";
import toast from "react-hot-toast";

const ServicesForm = ({ category }) => {
  const [isPending, startTransition] = useTransition();

  const [form, setForm] = useState({
    name: "",
    faName: "",
    description: "",
    price: "",
    images: [],
    category: "", //finally
    duration: 0,
  });

  const [subCategories, setSubCategories] = useState({ sub1: [] });

  const [selectedMainCategory, setSelectedMainCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState({ sub1: "" });
  const [filesURL, setFilesURL] = useState([]);

  useEffect(() => {
    setForm({ ...form, category: selectedMainCategory });
    const fetch = async () => {
      const res = await fetchCategoty(selectedMainCategory);
      if (res?.data && res?.data.length !== 0) {
        setSubCategories({ sub1: res?.data });
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMainCategory]);

  useEffect(() => {
    const keys = Object.keys(selectedSubCategory);
    // const filteredKeys = keys.filter(item => item.length !==)
    const latest = selectedSubCategory[keys[keys.length - 1]];
    if (!latest) {
      setForm({ ...form, category: selectedMainCategory });
      return;
    }
    setForm({ ...form, category: latest });
    const fetch = async () => {
      const res = await fetchCategoty(latest);
      if (res.data) {
        setSubCategories({
          ...subCategories,
          [`sub${keys.length + 1}`]: res.data,
        });
      }
    };
    fetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSubCategory]);

  const handleMainCategoryChange = (event) => {
    setSelectedMainCategory(event.target.value);
    setSelectedSubCategory({ sub1: "" }); // Reset sub category
    setSubCategories({ sub1: [] });
  };

  const handleSubCategoryChange = (event, index) => {
    const prevState = { ...subCategories };

    for (let i = 20; i > index + 1; i--) {
      if (i === index) break;
      delete prevState[`sub${i}`];
    }
    setSubCategories({
      ...prevState,
    });
    if (index === 0) {
      setSelectedSubCategory({
        [`sub${index + 1}`]: event.target.value,
      });
    } else {
      setSelectedSubCategory({
        ...selectedSubCategory,
        [`sub${index + 1}`]: event.target.value,
      });
    }
  };

  const inputChangeHandler = async (e) => {
    const { name, value } = e.target;
    if (name === "images") {
      const file = e.target.files[0];
      const localImageUrl = URL.createObjectURL(file);
      setFilesURL([localImageUrl]);
      startTransition(async () => {
        const { data, error } = await supabase.storage
          .from("images2")
          .upload(
            `images/${Math.floor(Math.random() * 10)}-${Date.now()}.png`,
            file,
            {
              cacheControl: "3600",
              upsert: false,
            }
          );
        setForm({ ...form, images: [data.path] });
        return;
      });
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(form);

    const res = await fetch("/api/service", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    if (data.error) toast.error(data.error);
    if (data.message) {
      toast.success(data.message);
      setForm({
        name: "",
        faName: "",
        description: "",
        price: "",
        images: [],
        category: "",
        duration: 0,
      });
      setSelectedSubCategory({ sub1: "" });
      setSubCategories({ sub1: [] });
      setFilesURL([]);
    }
    revalidatePathAction("/dashboard/admin");
  };

  return (
    <div>
      <Form title="داشبورد" href="" icon="">
        <form
          className="max-w-sm mx-auto flex flex-col items-center"
          onSubmit={submitHandler}
        >
          <span className="flex flex-col">
            <input
              className="rounded-full my-3 p-1 w-[170px]"
              placeholder="نام سرویس"
              name="faName"
              value={form.faName}
              onChange={inputChangeHandler}
            />
            <input
              className="rounded-full p-1 w-[170px] "
              placeholder="نام انگلیسی"
              name="name"
              value={form.name}
              onChange={inputChangeHandler}
            />
          </span>
          <span className="flex justify-between gap-3 my-6">
            <input
              className="rounded-lg p-1 w-[70px] text-center"
              placeholder="قیمت"
              name="price"
              value={form.price}
              onChange={inputChangeHandler}
            />
            <input
              className="rounded-lg p-1 w-[70px] text-center"
              placeholder="زمان"
              name="duration"
              value={form.duration}
              onChange={inputChangeHandler}
            />
          </span>
          <label htmlFor="subCategory">
            <span>دسته بندی :</span>
            <select
              name="category"
              id="category"
              className="my-3"
              onChange={handleMainCategoryChange}
              defaultValue="default"
              
            >
              <option value={""} id="default" name="default">
                هیچ کدام
              </option>
              {category &&
                category.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.faName}
                  </option>
                ))}
            </select>
          </label>

          {Object.keys(subCategories).map((item, index) =>
            subCategories[item] && subCategories[item].length ? (
              <label key={index}>
                <span>زیر دسته :</span>
                <select
                  name="subCategory"
                  className="my-3"
                  onChange={(e) => handleSubCategoryChange(e, index)}
                  defaultValue="default"
                >
                  <option value={""} id="default" name="default">
                    هیچ کدام
                  </option>
                  faName
                  {subCategories[item] &&
                    subCategories[item].map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.faName}
                      </option>
                    ))}
                </select>
              </label>
            ) : null
          )}

          <span className="flex justify-center">
            <label>
              <input
                type="file"
                hidden
                name="images"
                onChange={inputChangeHandler}
              />
              <div
                className="w-40 aspect-video rounded flex items-center
      justify-center border-2 border-dashed border-gray cursor-pointer
      "
              >
                {filesURL.length === 0 ? (
                  <span className="flex items-center text-brown">
                    بارگزاری عکس..
                  </span>
                ) : (
                  <Spin tip="Loading" spinning={isPending} size="small">
                    <Image
                      src={filesURL[0]}
                      alt="img"
                      width={500}
                      height={500}
                      className=" rounded-md"
                    />
                  </Spin>
                )}
              </div>
            </label>
          </span>
          <span className="flex  justify-center my-6 bg-transparent  ">
            <textarea
              className="bg-cream bg-opacity-10  text-center border border-gray rounded-lg p-8 "
              placeholder="توضیحات"
              name="description"
              value={form.description}
              onChange={inputChangeHandler}
            ></textarea>
          </span>
          <span className="flex  justify-center  bg-transparent  ">
            <button
              disabled={isPending}
              type="submit"
              className="bg-pink  text-white  rounded-full w-[170px]  py-2"
            >
              ثبت خدمات
            </button>
          </span>
        </form>
      </Form>
    </div>
  );
};

export default ServicesForm;
