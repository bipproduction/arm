"use server";

import { seederProjectStatus } from "@/modules/_global";
import prisma from "@/modules/_global/lib/prisma";
import { ProjectStatus } from "@prisma/client";

export async function funSeederProjectStatus() {
  for (let data of seederProjectStatus) {
    await prisma.projectStatus.upsert({
      where: {
        id: data.id,
      },
      create: {
        id: data.id,
        name: data.name,
        alias: data.alias,
      },
      update: {
        id: data.id,
        name: data.name,
        alias: data.alias,
      },
    });
  }
  return {
    success: true,
    message: "Project Status Success",
  };
}
