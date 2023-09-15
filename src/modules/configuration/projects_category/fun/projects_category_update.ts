"use server";

import prisma from "@/modules/_global/lib/prisma";
import { ProjectCategory } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function funUpdateProjectsCategory(data: ProjectCategory) {
  await prisma.projectCategory.update({
    where: {
      id: Number(data.id),
    },
    data: {
      name: data.name,
    },
  });
  revalidatePath("/dashboard/configuration/projects-category");

  return {
    success: true,
    message: "Success",
  };
}
