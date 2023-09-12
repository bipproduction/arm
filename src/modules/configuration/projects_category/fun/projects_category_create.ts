"use server";

import prisma from "@/modules/_global/lib/prisma";
import { revalidatePath } from "next/cache";

export async function funProjectsCategoryCreate({ data }: { data: any }) {
  await prisma.projectCategory.create({
    data: {
      name: data.name,
    },
  });

  revalidatePath("/dashboard/configuration/projects-category");

  return {
    success: true,
    message: "success",
  };
}
