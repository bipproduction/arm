"use server";

import { seederKecamatan } from "@/modules/_global";
import prisma from "@/modules/_global/lib/prisma";

export async function funSeederKecamatan() {
  for (let data of seederKecamatan) {
    await prisma.kecamatan.upsert({
      where: {
        id: Number(data.id),
      },
      create: {
        id: Number(data.id),
        idKabupaten: Number(data.masterKabKotId),
        name: data.name,
      },
      update: {
        id: Number(data.id),
        idKabupaten: Number(data.masterKabKotId),
        name: data.name,
      },
    });
  }

  return{
    success: true,
    message: "Kecamatan Success"
  }
}
