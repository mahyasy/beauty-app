"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const redirectTo = (path: string) => {
  redirect(path);
};

export const revalidatePathAction = (path: string) => {
  revalidatePath(path);
};

export const revalidateTagAction = (tag: string) => {
  revalidateTag(tag)
};
