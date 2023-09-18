"use server";

import prisma from "@/modules/_global/lib/prisma";
import { revalidatePath } from "next/cache";

export async function funCreateAssetsCondition({ data }: { data: any }) {
  await prisma.assetsCondition.create({
    data: {
      name: data.name,
    },
  });

  revalidatePath("/dashboard/configuration/assets-condition");

  return {
    success: true,
    message: "success",
  };
}
