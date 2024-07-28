import { useState } from "react";
import Form from "../../../../../beauty-app/src/Components/Form";
import Image from "next/image";

const Forms = ({ setService, service }) => {
  const [loading, setLoading] = useState(false);
  const [selectImage, setSelectImage] = useState("");
  const [selectFile, setSelectFile] = useState();
  const handleSub = (e) => {
    e.preventDefault();
    const text = e.target.service.value;
    const pic = e.target.picture.src;
   
    const newService = {
      id: self.crypto.randomUUID(),
      name: text,
      faName: text,
      images: pic,
    };
    setService((prev) => [...prev, newService]);
    e.target.reset();
  };
  const handleChange = ({ target }) => {
    if (target.files && target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        target.src = e.target.result;
      };
      reader.readAsDataURL(target.files[0]);
    }
  };

  return (
    <div>
      <Form title="داشبورد" href="" icon="">
        <form onSubmit={handleSub} className="flex flex-col items-center">
          <input
            className="rounded-full p-2 w-[170px]"
            placeholder="نام خدمات"
            name="service"
            id="service"
          />

          <div className="flex items-center justify-center  py-3 rounded-lg ">
            <label>
              <input
                type="file"
                hidden
                onChange={handleChange}
                name="picture"
                id="picture"
                accept="image/*"
              />
              <div
                className="w-40 aspect-video rounded flex items-center
      justify-center border-2 border-dashed border-gray cursor-pointer
      "
              >
                {selectImage !== "" ? (
                  <Image width={100} height={50} src={selectImage} alt="img" />
                ) : (
                  <span className="flex items-center text-brown">
                    بارگزاری عکس..
                    <button
                      type="button"
                      className="inline-flex justify-center "
                    >
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
            <button className="bg-pink mt-3 text-white  rounded-full w-[170px]  py-2">
              ثبت خدمات
            </button>
          )}
        </form>
      </Form>
    </div>
  );
};

export default Forms;
