import React from "react";
import Image from "next/image";
import Link from "next/link";
import DeleteButton from "@/Components/modules/DeleteButton";
import EditButton from "@/Components/modules/EditButton";
import supabase from "@/lib/supabase/supabase";



const Item = ({ item }) => {
  const {
    data: { publicUrl },
  } = supabase.storage.from("images2").getPublicUrl(item.images[0]);
  return (
    <section
      key={item.id}
      className="border border-brown m-2 flex flex-col items-center py-2
        rounded-t-full w-[180px] h-60 z-20 "
    >
      <div className="w-5/6 h-2/4 my-2">
        {item.images.length !== 0 ? (
          <Image
            className="rounded-t-full mt-4 h-auto w-110 px-2"
            src={publicUrl}
            width={500}
            height={500}
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
      <div className="flex flex-col items-center pt-5 gap-2">
        <Link
          href={`/dashboard/admin/category/${item._id}`}
          className="bg-pink rounded-lg text-[10px] break-words px-3 py-2 text-white"
        >
          مشاهده جزییات
        </Link>
        <span className="flex justify-between gap-2">
        <DeleteButton id={JSON.parse(JSON.stringify(item._id))} />
        <EditButton item={JSON.parse(JSON.stringify(item))} />
        </span>
      </div>
    </section>
  );
};

export default Item;
