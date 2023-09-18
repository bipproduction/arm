"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funDeleteWarehouseLocation({ id }: { id: number }) {
  const d = await prisma.warehouseLocation.update({
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
    data: d
  };
}
