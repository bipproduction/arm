"use server";

import { seederProvinsi } from "@/modules/_global";
import prisma from "@/modules/_global/lib/prisma";

export async function funSeederProvinsi() {
  for (let data of seederProvinsi) {
    await prisma.provinsi.upsert({
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
    message: "Provinsi Success",
  };
}
