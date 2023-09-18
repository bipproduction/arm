"use server";

import prisma from "@/modules/_global/lib/prisma";
import { WarehouseLocation } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function funUpdateWarehouseLocation(data: WarehouseLocation) {
  await prisma.warehouseLocation.update({
    where: {
      id: Number(data.id),
    },
    data: {
      name: data.name,
    },
  });
  revalidatePath("/dashboard/configuration/warehouse-location");

  return {
    success: true,
    message: "Success",
  };
}
