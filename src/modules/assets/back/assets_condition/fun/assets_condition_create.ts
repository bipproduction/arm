"use server";

import prisma from "@/modules/_global/lib/prisma";
import { AssetsCondition } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function funCreateAssetsCondition({ data }: { data: AssetsCondition }) {
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
