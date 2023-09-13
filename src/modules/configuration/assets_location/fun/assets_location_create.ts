"use server";

import prisma from "@/modules/_global/lib/prisma";
import { revalidatePath } from "next/cache";

export async function funCreateAssetsLocation({ data }: { data: any }) {
  await prisma.assetsLocation.create({
    data: {
      name: data.name,
    },
  });

  revalidatePath("/dashboard/configuration/assets-location");

  return {
    success: true,
    message: "success",
  };
}
