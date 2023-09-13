"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funGetAllAssetsCategory() {
  const data = await prisma.assetsCategory.findMany({
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
