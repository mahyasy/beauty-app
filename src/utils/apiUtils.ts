import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import User from "../models/User";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function checkAdmin() {
  const session: any = await getServerSession(authOptions);
  console.log(session);

  if (!session) {
    redirect("/");
  }

  const user = await User.findOne({ mobile: session.mobile });
  console.log(user);
  if (!user) {
    return NextResponse.json(
      { error: "حساب کاربری یافت نشد" },
      { status: 401 }
    );
  }
  if (user.role !== "ADMIN") {
    return NextResponse.json({ error: "محدودیت دسترسی" }, { status: 401 });
  }
}
