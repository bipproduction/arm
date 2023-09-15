"use server";

import prisma from "@/modules/_global/lib/prisma";
import { OutletLocation } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function funUpdateOutletLocation(data: OutletLocation) {
  await prisma.outletLocation.update({
    where: {
      id: Number(data.id),
    },
    data: {
      name: data.name,
    },
  });

  revalidatePath("dashboard/configuration/outlet-location");

  return {
    success: true,
    message: "Success",
  };
}
