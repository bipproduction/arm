"use server";

import prisma from "@/modules/_global/lib/prisma";
import { revalidatePath } from "next/cache";

export async function funCreateOutletLocation({ data }: { data: any }) {
  await prisma.outletLocation.create({
    data: {
      name: data.name,
    },
  });

  revalidatePath("/dashboard/configuration/outlet-location");

  return {
    success: true,
    message: "success",
  };
}
