"use server";

import prisma from "@/modules/_global/lib/prisma";
import { revalidatePath } from "next/cache";

export async function funCreateWarehouseLocation({ data }: { data: any }) {
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
