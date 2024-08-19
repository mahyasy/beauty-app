import React from "react";
import Image from "next/image";
import Link from "next/link";
import DeleteButton from "@/Components/modules/DeleteButton";
import EditButton from "@/Components/modules/EditButton";

const ServiceItem = ({ item }) => {
  return (
    <section
      key={item.id}
      className="border border-brown m-8 xs:m-4  flex flex-col items-center   rounded-t-full w-[200px] h-60 z-20 "
    >
      <div className="w-5/6 h-2/4 my-2">
        {item.src ? (
          <Image
            className="rounded-t-full mt-4 h-auto w-110 px-2"
            src={item.src}
            width={100}
            height={190}
            alt={item.name}
            property="false"
          />
        ) : (
          <div className="rounded-t-full bg-[#66BFBF] h-full w-110  flex justify-center items-center">
            بدون تصاویر
          </div>
        )}
      </div>
      <h1 className="m-1 text-[12px] font-bold">{item.faName}</h1>
      <div className="flex justify-center items-center pt-5 gap-2">
        <Link
          href={`/dashboard/admin/services/${item._id}`}
          className="bg-pink rounded-lg text-[10px] break-words px-3 py-2 text-white"
        >
          مشاهده جزییات
        </Link>
        {/* <DeleteButton id={JSON.parse(JSON.stringify(item._id))} /> */}
        {/* <EditButton item={JSON.parse(JSON.stringify(item))}  /> */}
      </div>
    </section>
  );
};

export default ServiceItem;
