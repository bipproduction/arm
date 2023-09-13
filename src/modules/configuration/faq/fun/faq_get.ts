"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funGetFaq() {
  const data = await prisma.fAQ.findMany({
    where: {
        isActive: true
    },
    select: {
      id: true,
      question: true,
      answer: true,
    },
  });
  return data
}
