"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funGetOneAssetsCategory(id: any) {
  const data = await prisma.assetsCategory.findUnique({
    where: {
      isActive: true,
      id: id,
    },
    select: {
      id: true,
      name: true,
    },
  });
  return data;
}
