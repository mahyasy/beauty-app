import Image from "next/image";
import SignUp from "../../../Components/Form/SignUp";
import ParentLayout from "../../ui/ParentLayout";

export default function register() {
  return (
    <ParentLayout>
      <SignUp />
    </ParentLayout>
  );
}
