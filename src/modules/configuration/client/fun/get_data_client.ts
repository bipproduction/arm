"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funGetDataClient() {
  const data = await prisma.client.findMany({
    where: {
      isActive: true,
    },
  });

  return data
}
