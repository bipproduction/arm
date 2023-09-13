"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funDeleteAssetsCondition({ id }: { id: number }) {
  await prisma.assetsCondition.update({
    where: {
      id: Number(id),
    },
    data: {
      isActive: false,
    },
  });

  return {
    success: true,
    message: "success",
  };
}
