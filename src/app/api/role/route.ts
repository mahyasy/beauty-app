import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import User from "@/models/User";
import { authOptions } from "@/utils/authOptions";

export async function GET() {
  try {
    await connectDB();
    const session: any = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { error: "وارد حساب کاربری خود شوید" },
        { status: 403 }
      );
    }

    const user = await User.findById(session.id).select("-password");

    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 403 }
      );
    }

    return NextResponse.json({role: user.role});
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داد" },
      { status: 500 }
    );
  }
}
