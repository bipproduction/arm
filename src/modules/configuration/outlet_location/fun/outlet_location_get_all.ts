"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funGetAllOutletLocation() {
  const data = await prisma.outletLocation.findMany({
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
