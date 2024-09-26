import mongoose from "mongoose";
import connectDB from "@/utils/connectDB";
import Service, { ServiceType } from "@/models/Service";
import Image from "next/image";

interface PropsInterface {
  params: { id: string };
}

const CategoryDetials = async ({ params: { id } }: PropsInterface) => {
  await connectDB();
  const service: ServiceType | null = await Service.findById(
    new mongoose.Types.ObjectId(id)
  );
  console.log(service);
  if (!service) return <h1>سرویس مورد نظر یافت نشد</h1>;

  return (
    <div className="p-4 px-10">
      {service ? (
        <>
          <div>
            <div className="mb-3">
              {service.images.length !== 0 && (
                <Image src={service.images[0]} alt={service.name} width={1000} height={1000} className="rounded-md"  />
              )}
            </div>
            <h4 className="font-bold text-xl">نام سرویس: {service.faName}</h4>
          </div>
          <div className="my-10">
            <h5 className="text-xl">توضیحات :</h5>
            <div className="flex flex-wrap">
              <p>{service.description}</p>
            </div>
          </div>
        </>
      ) : (
        <span>در گرفتن اطلاعات سرویس مشکلی پیش امد</span>
      )}
    </div>
  );
};

export default CategoryDetials;
