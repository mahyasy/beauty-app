import { NextResponse, type NextRequest } from "next/server";
import connectDB from "../../../../utils/connectDB";
import Category from "../../../../models/Category";
import mongoose from "mongoose";

interface ParamsType {
  params: { categoryId: string };
}

export async function GET(request: NextRequest, { params }: ParamsType) {
  try {
    await connectDB();
    const { categoryId } = params;

    const existing = await Category.findById(categoryId);
    console.log(existing)
    if (!existing) {
      return NextResponse.json(
        { error: "دسته بندی یافت نشد" },
        { status: 404 }
      );
    }
    const categoryObjectId = new mongoose.Types.ObjectId(categoryId);

    const category = await Category.aggregate([
      { $match: { _id: categoryObjectId } },
      {
        $lookup: {
          from: "categories",
          foreignField: "parentCategory",
          localField: "_id",
          as: "subCategories",
        },
      },
      {
        $lookup: {
          from: "services",
          foreignField: "category",
          localField: "_id",
          as: "services",
        },
      },
      {
        $unwind: { path: "$services", preserveNullAndEmptyArrays: true }
      },
      {
        $lookup: {
          from: "services",
          localField: "services._id",
          foreignField: "subServices",
          as: "services.subServices"
        }
      },
      {
        $group: {
          _id: "$_id",
          name: { $first: "$name" },
          faName: { $first: "$faName" },
          images: { $first: "$images" },
          parentCategory: { $first: "$parentCategory" },
          createdAt: { $first: "$createdAt" },
          updatedAt: { $first: "$updatedAt" },
          subCategories: { $first: "$subCategories" },
          services: { $push: "$services" } // یک سطر برای هر دسته‌بندی
        }
      }
    ]);

    console.log(category)

    return NextResponse.json({ data: category }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داد" },
      { status: 500 }
    );
  }
}
