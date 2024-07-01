"use client";
import { useState } from "react";
import Form from "../../../../../beauty-app/src/Components/Form";

export default function Admin() {
  const [loading, setLoading] = useState(false);
  const [selectImage, setSelectImage] = useState("");
  const [selectFile, setSelectFile] = useState();

  

  return (
    <div className="flex  justify-center ">
      <Form title="داشبورد" href="" icon="">
        <div  className="flex flex-col items-center">
          <input
            className="rounded-full p-2 w-[170px]"
            placeholder="نام خدمات"
            name="serviceName"
          />

          <div className="flex items-center justify-center  py-3 rounded-lg ">
            <label>
              <input
                type="file"
                hidden
                onChange={({ target }) => {
                  if (target.files) {
                    const file = target.files[0];
                    setSelectImage(URL.createObjectURL(file));
                    setSelectFile(file);
                  }
                }}
              />
              <div
                className="w-40 aspect-video rounded flex items-center
      justify-center border-2 border-dashed border-gray cursor-pointer
      "
              >
                {selectImage ? (
                  <img src={selectImage} alt="img" />
                ) : (
                  <span className="flex items-center text-brown">
                    بارگزاری عکس..
                    <button type="button" className="inline-flex justify-center ">
                      <svg
                        className="w-5 h-5 mx-[-9px]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 18"
                      >
                        <path
                          fill="currentColor"
                          d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                        />
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                        />
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                        />
                      </svg>
                    </button>
                  </span>
                )}
              </div>
            </label>
          </div>

          {loading ? (
            <button className="bg-pink py-2 rounded-full">
              <Spiner w="w-5" h="h-5" border="border-[3px]" />
            </button>
          ) : (
            <button  className="bg-pink mt-3 text-white  rounded-full w-[170px]  py-2">
              ثبت خدمات
            </button>
          )}
        </div>
      </Form>
    </div>
  );
}
