"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funGetAllAssetsLocation() {
  const data = await prisma.assetsLocation.findMany({
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
