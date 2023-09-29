"use server";

import prisma from "@/modules/_global/lib/prisma";
import { Profile, User } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function funCreateProfile({ data }: { data: any }) {

  const availableEmail = await prisma.profile.findUnique({
    where: {
      email: data.email,
    }
  })
  if (availableEmail) return { success: false, message: "Available email" }


  const availablePhoneNumber = await prisma.profile.findUnique({
    where: {
      phone: data.phone
    }
  })
  if (availablePhoneNumber) return { success: false, message: "Available phone number" }


  const profile = await prisma.profile.create({
    data: {
      name: data.name,
      idClient: data.idClient,
      email: data.email,
      phone: data.phone,
      address: data.address,
    },
    select: {
      id: true,
    }
  });

  for (let item of data.idUserRole) {
    await prisma.user.create({
      data: {
        idProfile: profile.id,
        idUserRole: item
      }
    });
  }

  revalidatePath("/dashboard/configuration/user");

  return {
    success: true,
    message: "Add Profile Success",
  };
}
