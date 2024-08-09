import { NextResponse, type NextRequest } from "next/server";
import connectDB from "../../../utils/connectDB";
import Service from "../../../models/Service";
import Category from "../../../models/Category";
import { checkAdmin } from "../../../utils/apiUtils";
import { Schema } from "mongoose";

//Create service
export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
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

    await checkAdmin();

    if (
      !name ||
      !faName ||
      !description ||
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

    const existingService = await Service.findOne({ name: name.toLowerCase().trim() });
    if (existingService) {
      return NextResponse.json(
        {
          error: "سرویس مورد نظر از قبل وجود دارد",
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
        { status: 404 }
      );
    }

    // if (subServices.length !== 0) {
    //   subServices.map(async (item) => {
    //     console.log(item);

    //     const service = await Service.findOne({ _id: item });
    //     if (!service) {
    //       return NextResponse.json(
    //         { error: "سرویس مود نظر برای ساب سرویس یافت نشد" },
    //         { status: 422 }
    //       );
    //     }

    //     subObjectId.push(service);
    //   });
    // }

    const service = await Service.create({
      name: name.toLowerCase(),
      faName,
      description,
      price: +price,
      images,
      category: existingCategory._id,
      duration,
    });

    console.log(service);

    return NextResponse.json(
      { message: "سرویس اضافه شد", data: service },
      { status: 201 }
    );
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داد" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const services = await Service.aggregate([
      {
        $lookup: {
          from: "services", 
          foreignField: "subServices",
          localField: "_id", 
          as: "subServicesData", 
        },
      },
    ]);

    return NextResponse.json({ data: services });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داد" },
      { status: 500 }
    );
  }
}


