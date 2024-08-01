import Form from "@/Components/Form";
import React from "react";

const DetailFrom = ({ service }) => {
  console.log(service, "mshy");
  return (
    <div>
      <Form title="داشبورد" href="" icon="">
        <form className="max-w-sm mx-auto flex flex-col ">
          <span className="flex">
            <select
              id="services"
              className="bg-gray-50 w-20  text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {service.data?.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.faName}
                </option>
              ))}
            </select>
            <input
              className="rounded-lg p-1 w-[170px]"
              placeholder="نام دسته"
              name="service"
              id="service"
            />
          </span>
          <span className="flex justify-between my-6">
            <input
              className="rounded-lg p-2 w-[70px] text-xs"
              placeholder="نام زیردسته"
              name="service"
              id="service"
            />
            <input
              className="rounded-lg p-2 w-[70px]"
              placeholder="قیمت"
              name="service"
              id="service"
            />
            <input
              className="rounded-lg p-2 w-[70px]"
              placeholder="زمان"
              name="service"
              id="service"
            />
          </span>
          <span className="flex  justify-center    ">
            <label>
              <input
                type="file"
                hidden
                name="picture"
                id="picture"
                accept="image/*"
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
          </span>
          <span className="flex  justify-center my-6 bg-transparent  ">
            <textarea
              className="bg-cream bg-opacity-10  text-center border border-gray rounded-lg p-8 "
              placeholder="توضیحات"
            ></textarea>
          </span>
          <span className="flex  justify-center  bg-transparent  ">
            <button className="bg-pink  text-white  rounded-full w-[170px]  py-2">
              ثبت خدمات
            </button>
          </span>
        </form>
      </Form>
    </div>
  );
};

export default DetailFrom;
