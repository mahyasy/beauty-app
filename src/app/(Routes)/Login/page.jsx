import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import SignIn from "../../../Components/Form/SignIn";
import ParentLayout from "../../ui/ParentLayout";

import { authOptions } from "@/utils/authOptions";

export default async function register() {
  const user = await getServerSession(authOptions);
  if(user) redirect('/')
  return (
    <ParentLayout>
      <SignIn />
    </ParentLayout>
  );
}
