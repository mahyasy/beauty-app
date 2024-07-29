import { NextResponse, type NextRequest } from "next/server";
import connectDB from "../../../utils/connectDB";
import Category from "../../../models/Category";
import { checkAdmin } from "../../../utils/apiUtils";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const {
      name,
      faName,
      description,
      images,
    }: { name: string; faName: string; images: string[]; description: string } = body;

    await checkAdmin();

    if (!name || !faName || !description) {
      return NextResponse.json(
        { error: "مقادیر معتبر وارد کنید" },
        { status: 422 }
      );
    }

    const existing = await Category.findOne({ name: name.toLowerCase() });

    if (existing) {
      return NextResponse.json(
        { error: "دسته بندی از قبل وجود دارد" },
        { status: 422 }
      );
    }

    const category = await Category.create({
      name: name.toLowerCase(),
      faName,
      images,
      description
    });

    console.log(category);

    return NextResponse.json(
      { message: "دسته بندی اضافه شد", data: category },
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

    const categories = await Category.find();

    return NextResponse.json( [categories] , { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داد" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const {
      id,
      name,
      faName,
      images,
      description
    }: { name: string; faName: string; images: string[]; id: string; description: string } = body;

    await checkAdmin();

    if (!name || !faName || !description) {
      return NextResponse.json(
        { error: "فیلد ها نمیتواند خالی باشد" },
        { status: 422 }
      );
    }

    const category = await Category.findOne({ _id: id });

    if (!category) {
      return NextResponse.json(
        { error: "دسته بندی یافت نشد" },
        { status: 404 }
      );
    }

    category.name = name;
    category.faName = faName;
    category.images = images;
    category.description = description;
    await category.save();

    return NextResponse.json(
      { message: "دسته بندی بروز شد", data: category },
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

export async function DELETE(request: NextRequest) {
  try {
    await connectDB();

    const body: { id: string } = await request.json();
    const { id } = body;

    await checkAdmin();

    if (!id)
      return NextResponse.json(
        { error: "لطفا ایدی دسته بندی را وارد کنید" },
        { status: 422 }
      );

    await Category.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "دسته بندی با موفقیت حذف شد" },
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
