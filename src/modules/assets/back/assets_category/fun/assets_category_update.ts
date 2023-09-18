"use server";

import prisma from "@/modules/_global/lib/prisma";
import { AssetsCategory } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function funUpdateAssetsCategory({ data }: { data: AssetsCategory }) {
  await prisma.assetsCategory.update({
    where: {
      id: Number(data.id),
    },
    data: {
      name: data.name,
    },
  });

  revalidatePath("/dashboard/configuration/assets-category");

  return {
    success: true,
    message: "Success",
  };
}
