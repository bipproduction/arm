"use server";

import prisma from "@/modules/_global/lib/prisma";
import { AssetsCategory } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function funCreateAssetsCategory({ data }: { data: AssetsCategory }) {
  await prisma.assetsCategory.create({
    data: {
      name: data.name,
    },
  });

  revalidatePath("dashboard/configuration/assets-category");

  return {
    success: true,
    message: "success",
  };
}
