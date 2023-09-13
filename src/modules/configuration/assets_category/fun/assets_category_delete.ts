"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funDeleteAssetscategory({ id }: { id: number }) {
  await prisma.assetsCategory.update({
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
