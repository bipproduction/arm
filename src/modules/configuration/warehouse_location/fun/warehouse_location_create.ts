"use server";

import prisma from "@/modules/_global/lib/prisma";
import { WarehouseLocation } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function funCreateWarehouseLocation({ data }: { data: WarehouseLocation }) {
  await prisma.warehouseLocation.create({
    data: {
      name: data.name,
    },
  });

  revalidatePath("/dashboard/configuration/warehouse-location");

  return {
    success: true,
    message: "success",
  };
}
