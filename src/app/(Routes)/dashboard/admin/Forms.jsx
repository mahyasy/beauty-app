import React from 'react'
import Form from "../../../../../beauty-app/src/Components/Form";


const Forms = ({service,setService}) => {
  const handleSub=(e)=>{
    e.preventDefault();
    const name = e.target.service.value;
    const newService = {
      id:self.crypto.randomUUID(),
      faName:name


    }
    setService((prev)=>[...prev,newService])

  }
  return (
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
         
          </div>
          <button className="bg-pink mt-3 text-white  rounded-full w-[170px]  py-2">
              ثبت خدمات
            </button>
      </form>
      </Form>
  )
}

export default Forms