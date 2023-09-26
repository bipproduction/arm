"use server";

import prisma from "@/modules/_global/lib/prisma";
import { Profile, User } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function funCreateProfile({
  dProfile,
  dUser,
}: {
  dProfile: Profile;
  dUser: User;
}) {
  await prisma.profile.create({
    data: {
      name: dProfile.name,
      idImage: dProfile.idImage,
      idClient: dProfile.idClient,
      email: dProfile.email,
      phone: dProfile.phone,
      address: dProfile.address,
    },
  });

  await prisma.user.create({
    data: {
      idUserRole: dUser.idUserRole,
      idProfile: dUser.idProfile,
      verificationCode: dUser.verificationCode,
      expiresTime: dUser.expiresTime,
      password: dUser.password,
    },
  });

  revalidatePath("/dashboard/configuration/user");

  return {
    success: true,
    message: "Add Profile Success",
  };
}
