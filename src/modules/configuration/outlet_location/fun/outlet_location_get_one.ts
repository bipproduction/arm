"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funGetOnOutletLocation(id: any) {
  const data = await prisma.outletLocation.findUnique({
    where: {
      isActive: true,
      id: id,
    },
    select: {
      id: true,
      name: true,
    },
  });

  return data;
}
