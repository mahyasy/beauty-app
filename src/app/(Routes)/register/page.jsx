import Image from "next/image";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import ParentLayout from "../../ui/ParentLayout";
import SignUp from "../../../Components/Form/SignUp";

import { authOptions } from "@/utils/authOptions";

export default async function Register() {
  const user = await getServerSession(authOptions);
  if(user) redirect('/')

  return (
    <ParentLayout>
      <SignUp />
    </ParentLayout>
  );
}
