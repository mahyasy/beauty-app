import supabase from "@/lib/supabase/supabase";
import Category from "@/models/Category";
import connectDB from "@/utils/connectDB";
import Image from "next/image";
import Link from "next/link";

export default async function Service() {
  await connectDB();
  const categories = await Category.find({ parentCategory: null });
  
  return (
    <div className="flex justify-around md:justify-center flex-wrap z-20 ">
      {categories.length === 0 && <p className="text-bold">دسته بندی وجود ندارد</p>}
      {categories.map((category) => {
        return (
          <section
            key={category.id}
            className="border border-brown m-8 xs:m-4  flex flex-col items-center p-10  rounded-t-full w-[120px] relative  h-40"
          >
            <Image
              className="rounded-t-full  h-20 w-110 px-2 absolute top-2"
              src={category.images[0]}
              width={100}
              height={190}
              alt={category.name}
              property="false"
              priority={true}
            />
            <h1 className="m-1 mt-10 py-4 text-nowrap  text-[12px] font-bold absolute  top-10">
              {category.faName}
            </h1>
            <Link href={`/category/${category.id}`} className="bg-pink rounded-lg text-[10px] break-words w-12 absolute mt-20   text-white">
              مشاهده جزییات
            </Link>
          </section>
        );
      })}
    </div>
  );
}
