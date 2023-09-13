"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funDeleteFaq({ id }: { id: string }) {
  await prisma.fAQ.update({
    where: {
      id: id
    },
    data: {
      isActive: false,
    },
  });

  return {
    success: true,
    message: "seccess",
  };
}
