"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funDeleteAssetsLocation({ id }: { id: number }) {
  await prisma.assetsLocation.update({
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
