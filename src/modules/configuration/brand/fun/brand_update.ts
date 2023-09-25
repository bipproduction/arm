"use server";

import prisma from "@/modules/_global/lib/prisma";
import { Brand } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function funUpdateBrand({ data }: { data: Brand }) {
  await prisma.brand.update({
    where: {
      id: Number(data.id),
    },
    data: {
      name: data.name,
    },
  });

  revalidatePath("/dashboard/configuration/brand");

  return {
    success: true,
    message: "Success",
  };
}
