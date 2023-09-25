"use server";

import prisma from "@/modules/_global/lib/prisma";
import { Supplier } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function funUpdateSupplier({ data }: { data: Supplier }) {
  await prisma.supplier.update({
    where: {
      id: Number(data.id),
    },
    data: {
      name: data.name,
    },
  });

  revalidatePath("/dashboard/configuration/supplier");

  return {
    success: true,
    message: "Success",
  };
}
