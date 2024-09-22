import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import connectDB from "../../../../utils/connectDB";
import User from "../../../../models/User";
import { verifyPassword } from "../../../../utils/auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: { username: string; password: string }) {
        const { username, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سرور رخ داد");
        }

        if (!username || !password) throw new Error("مقادیر معتبر وارد کنید");

        const user = await User.findOne({ username });
        if (!user) throw new Error("حساب کاربری یافت نشد");

        const verify = await verifyPassword(password, user.password);
        if (!verify) throw new Error("نام کاربری یا رمز اشتباه است");

        return {
          id: user._id,
          name: user?.name,
          role: user.role,
          mobile: user.mobile,
          username: user.username,
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
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      return { ...token, ...user };
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      return { ...session, mobile: token.mobile, username: token.username, id: token.id, role: token.role };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
