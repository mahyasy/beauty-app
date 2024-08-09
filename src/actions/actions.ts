"use server";

import Category from "@/models/Category";
import connectDB from "@/utils/connectDB";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const redirectTo = (path: string) => {
  redirect(path);
};

export const revalidatePathAction = (path: string) => {
  revalidatePath(path);
};

export const revalidateTagAction = (tag: string) => {
  revalidateTag(tag);
};

export const fetchCategoty = async (categoryId: string) => {
  try {
    await connectDB();
    const test = await Category.findOne({ _id: categoryId });

    const category = await Category.aggregate([
      { $match: { _id: test?._id } },
      {
        $lookup: {
          from: "categories",
          foreignField: "parentCategory",
          localField: "_id",
          as: "subServicesData",
        },
      },
    ]);

    console.log(category[0].subServicesData);

    return {
      data: JSON.parse(JSON.stringify(category[0].subServicesData)),
    };
  } catch (error) {
    console.log(error.message);
    return {
      error: "مشکلی در سرور رخ داد",
    };
  }
};
