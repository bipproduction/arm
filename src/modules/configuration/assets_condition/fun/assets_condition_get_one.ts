"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funGetOneAssetsCondition(id: any) {
  const data = await prisma.assetsCondition.findUnique({
    where: {
      // isActive: true,
      id: Number(id),
    },
    select: {
      id: true,
      name: true,
    },
  });
  return data;
}
