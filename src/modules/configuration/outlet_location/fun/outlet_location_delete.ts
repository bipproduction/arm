"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funDeleteOutletLocation({ id }: { id: number }) {
  await prisma.outletLocation.update({
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
