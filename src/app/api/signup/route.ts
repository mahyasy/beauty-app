import { type NextRequest } from "next/server";

import { NextResponse } from "next/server";
import connectDB from "../../../utils/connectDB";
import User from "../../../models/User";
import { hashPassword } from "../../../utils/auth";

export async function POST(request: NextRequest) {
  try {
    //connect DB
    await connectDB();
    const body = await request.json();
    const {
      mobile,
      password,
      username,
    }: { mobile: string; password: string; username: string } = body;

    //check body
    if (!mobile || !password || !username) {
      return NextResponse.json(
        { error: "مقادیر معتبر وارد کنید" },
        { status: 422 }
      );
    }

    let mobileNumber: string = mobile;
    if (mobile.startsWith("+98")) {
      mobileNumber = mobileNumber.replace("+98", "0");
    }

    //check existing
    const existingUser = await User.findOne({ mobile: mobileNumber });
    const existingUserByUsername = await User.findOne({ username });
    if (existingUser || existingUserByUsername) {
      return NextResponse.json(
        {
          error: "حساب کاربری از قبل وجود دارد",
        },
        { status: 422 }
      );
    }

    //create user
    const hashedPassord = await hashPassword(password);
    const user = await User.create({
      mobile: mobileNumber,
      password: hashedPassord,
      username,
    });

    return NextResponse.json(
      {
        message: "حساب کاربری با موفقیت ایجاد شد",
        data: { user: user.mobile, username: user.username },
      },
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
