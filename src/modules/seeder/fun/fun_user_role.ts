"use server";

import { seederUserRole } from "@/modules/_global";
import prisma from "@/modules/_global/lib/prisma";

export async function funSeederUserRole() {
  for (let data of seederUserRole) {
    await prisma.userRole.upsert({
      where: {
        id: data.id,
      },
      create: {
        id: data.id,
        position: data.position,
        role: data.role,
      },
      update: {
        id: data.id,
        position: data.position,
        role: data.role,
      },
    });
  }
  return {
    success: true,
    message: "User Role Success",
  };
}
