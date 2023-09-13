"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funGetAllAssetsCondition() {
  const data = await prisma.assetsCondition.findMany({
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
 