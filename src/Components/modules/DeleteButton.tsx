"use client";

import { revalidatePathAction } from "@/actions/actions";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { IoTrash } from "react-icons/io5";

const DeleteButton = ({ id }: { id: string }) => {
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

  return (
    <button
      className={` bg-red rounded-md text-lg p-1 text-white  ${
        isPending ? "opacity-80 cursor-not-allowed" : ""
      }`}
      onClick={deleteCategoryHandler}
      disabled={isPending}
    >
      <IoTrash  />
    </button>
  );
};

export default DeleteButton;
