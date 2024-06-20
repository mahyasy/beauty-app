import { NextResponse, type NextRequest } from "next/server";
import connectDB from "../../../../utils/connectDB";
import { checkAdmin } from "../../../../utils/apiUtils";
import Service from "../../../../models/Service";
import { Schema } from "mongoose";
import Category from "../../../../models/Category";

interface ParamsType {
  params: { serviceId: string };
}

export async function DELETE(request: NextRequest, { params }: ParamsType) {
  try {
    await connectDB();
    console.log(params);
    const slug = params.serviceId;
    await checkAdmin();

    await Service.findByIdAndDelete(slug);

    return NextResponse.json({ message: "سرویس با موفقیت حذف شد" });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داد" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest, { params }: ParamsType) {
  try {
    await connectDB();
    await checkAdmin();
    const serviceId = params.serviceId;

    const body = await request.json();
    interface BodyInterface {
      subServices: string[];
      name: string;
      faName: string;
      description: string;
      price: number | string;
      images: string[] | null;
      category: string;
      duration: number | string;
    }

    const {
      name,
      faName,
      description,
      price,
      images,
      category,
      subServices, //array -> exp ['serviceId-1', 'servceId-4'] - optional  | use multiple select option im front-end
      duration,
    }: BodyInterface = body;

    let subObjectId: Schema.Types.ObjectId[] = [];

    if (
      !name ||
      !faName ||
      !description ||
      !Array.isArray(subServices) ||
      !price ||
      !category ||
      !duration
    ) {
      return NextResponse.json(
        {
          error: "مقادیر معتبر وارد کنید",
        },
        { status: 422 }
      );
    }

    const existingCategory = await Category.findById(category);
    console.log(existingCategory);
    if (!existingCategory) {
      return NextResponse.json(
        {
          error:
            "دسته بندی مورد نظر وجود ندارد لطفا دوباره تلاش متید یا از دسته بندی دیگری استفاده کنید",
        },
        { status: 422 }
      );
    }

    if (subServices.length !== 0) {
      subServices.map(async (item) => {
        console.log(item);

        const service = await Service.findOne({ _id: item });
        if (!service) {
          return NextResponse.json(
            { error: "سرویس مود نظر برای ساب سرویس یافت نشد" },
            { status: 422 }
          );
        }

        subObjectId.push(service);
      });
    }

    const service = await Service.findOneAndUpdate(
      { _id: serviceId },
      {
        name: name.toLowerCase(),
        faName,
        description,
        price: +price,
        images,
        category: existingCategory._id,
        subServices,
        duration,
      }
    );

    console.log(service);

    return NextResponse.json(
      { message: "سرویس با موفقیت بروزرسانی شد", data: service },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داد" },
      { status: 500 }
    );
  }
}
