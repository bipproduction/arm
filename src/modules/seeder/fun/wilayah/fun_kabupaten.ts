"use server";

import { seederKabupaten } from "@/modules/_global";
import prisma from "@/modules/_global/lib/prisma";

export async function funSeederKabupaten() {
  for (let data of seederKabupaten) {
    await prisma.kabupaten.upsert({
      where: {
        id: Number(data.id),
      },
      create: {
        id: Number(data.id),
        idProvinsi: Number(data.masterProvinceId),
        name: data.name,
      },
      update: {
        id: Number(data.id),
        idProvinsi: Number(data.masterProvinceId),
        name: data.name,
      },
    });
  }
  return {
    success: true,
    message: "Kabupaten Success",
  };
}
