"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funGetProjectsCategory() {
  const data = await prisma.projectCategory.findMany({
    where: {
      isActive: true,
    },
    select: {
      id: true,
      name: true,
    },
  });

  return data;
}
