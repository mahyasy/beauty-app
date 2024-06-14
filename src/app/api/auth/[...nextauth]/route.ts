import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import connectDB from "../../../../utils/connectDB";
import User from "../../../../models/User";
import { verifyPassword } from "../../../../utils/auth";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: { mobile: string; password: string }) {
        const { mobile, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سرور رخ داد");
        }

        if (!mobile || !password) throw new Error("مقادیر معتبر وارد کنید");

        const user = await User.findOne({ mobile });
        if (!user) throw new Error("حساب کاربری یافت نشد");

        const verify = await verifyPassword(password, user.password);
        if (!verify) throw new Error("شماره یا رمز اشتباه است");

        return {
          id: user._id,
          mobile: user.mobile,
          name: user?.name,
        };
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    signOut: "/register",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
