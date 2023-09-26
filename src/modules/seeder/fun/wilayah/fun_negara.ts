"use server";

import { seederNegara } from "@/modules/_global";
import prisma from "@/modules/_global/lib/prisma";

export async function funSeederNegara() {
  for (let data of seederNegara) {
    await prisma.negara.upsert({
      where: {
        id: Number(data.id),
      },
      create: {
        id: Number(data.id),
        name: data.name,
      },
      update: {
        id: Number(data.id),
        name: data.name,
      },
    });
  }
  return {
    success: true,
    message: "Negara Success",
  };
}
