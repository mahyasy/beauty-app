import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import User from "@/models/User";

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

    console.log(session);
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
