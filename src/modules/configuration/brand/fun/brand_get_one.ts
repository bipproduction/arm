"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funGetOneBrand({ id }: { id: any }) {
  const data = await prisma.brand.findUnique({
    where: {
      isActive: true,
      id: Number(id),
    },
    select: {
      id: true,
      name: true,
    },
  });

  return data;
}
