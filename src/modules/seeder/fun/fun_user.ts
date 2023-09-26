"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funSeederUser() {
  await prisma.user.upsert({
    where: {
      id: "adminUserWibuDeveloperARM",
    },
    create: {
      id: "adminUserWibuDeveloperARM",
      idUserRole: 3,
      idProfile: "adminProfileWibuDeveloperARM",
    },
    update: {
      id: "adminUserWibuDeveloperARM",
      idUserRole: 3,
      idProfile: "adminProfileWibuDeveloperARM",
    },
  });
  return {
    success: true,
    message: "User Success",
  };
}
