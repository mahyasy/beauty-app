"use client";

import { revalidatePathAction } from "@/actions/actions";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { IoTrash } from "react-icons/io5";

const DeleteButton = ({
  id,
  forCategory = true,
}: {
  id: string;
  forCategory: boolean;
}) => {
  const [isPending, startTransition] = useTransition();

  const deleteCategoryHandler = () => {
    startTransition(async () => {
      const res = await fetch("/api/category", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) toast.error(data.error);
      if (data.message) {
        toast.success(data.message);
        revalidatePathAction("/dashboard/admin", "layout");
      }
    });
  };

  const deleteServiceHandler = () => {
    startTransition(async () => {
      const res = await fetch(`/api/service/${id}`, {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) toast.error(data.error);
      if (data.message) {
        toast.success(data.message);
        revalidatePathAction("/dashboard/admin", "layout");
      }
    });
  };

  return (
    <button
<<<<<<< HEAD
      className={` bg-red rounded-md text-lg p-1 text-white  ${
        isPending ? "opacity-80 cursor-not-allowed" : ""
      }`}
      onClick={deleteCategoryHandler}
=======
      className={`border-2 p-1 text-xs rounded-md-1 border-[#FF4C4C] rounded-md ${
        isPending ? "opacity-80 cursor-not-allowed" : ""
      }`}
      onClick={forCategory ? deleteCategoryHandler : deleteServiceHandler}
>>>>>>> 84658196a431db0835904426d8933b9ca4f6d829
      disabled={isPending}
    >
      <IoTrash  />
    </button>
  );
};

export default DeleteButton;
