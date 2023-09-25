"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funDeleteBrand({ id }: { id: number }) {
  const data = await prisma.brand.update({
    where: {
      id: Number(id),
    },
    data: {
      isActive: false,
    },
    select: {
      id: true,
      name: true,
    },
  });

  return {
    success: true,
    message: "success",
    dataDel: data,
  };
}
