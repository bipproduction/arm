"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funGetOneAssetsLocation(id: any) {
  const data = await prisma.assetsLocation.findUnique({
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
