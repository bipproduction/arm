"use server"

import { seederProjectCategory } from "@/modules/_global";
import prisma from "@/modules/_global/lib/prisma";

export async function funSeederProjectCategory() {
  for (let data of seederProjectCategory) {
    await prisma.projectCategory.upsert({
      where: {
        id: data.id,
      },
      create: {
        id: data.id,
        name: data.name,
      },
      update: {
        id: data.id,
        name: data.name,
      },
    });
  }
  return {
    success: true,
    message: "Project Category Success",
  };
}
