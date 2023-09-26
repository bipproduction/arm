"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funDeleteSuplier({ id }: { id: number }) {
  const data = await prisma.supplier.update({
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
    message: "Success",
    dataDel: data,
  };
}
