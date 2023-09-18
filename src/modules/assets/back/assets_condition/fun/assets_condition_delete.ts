"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funDeleteAssetsCondition({ id }: { id: number }) {
  const data = await prisma.assetsCondition.update({
    where: {
      id: Number(id),
    },
    data: {
      isActive: false,
    },
    select: {
      id: true,
      name: true
    }
  });

  return {
    success: true,
    message: "success",
    dataDel: data
  };
}
