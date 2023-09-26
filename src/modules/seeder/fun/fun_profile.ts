"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funSeederProfile() {
  await prisma.profile.upsert({
    where: {
      id: "adminProfileWibuDeveloperARM",
    },
    create: {
      id: "adminProfileWibuDeveloperARM",
      name: "Lukman",
      phone: "6287701790942",
      email: "lukman@gmail.com",
      address: "Denpasar",
    },
    update: {
      id: "adminProfileWibuDeveloperARM",
      name: "Lukman",
      phone: "6287701790942",
      email: "lukman@gmail.com",
      address: "Denpasar",
    },
  });

  return {
    success: true,
    message: "Profile Success",
  };
}
