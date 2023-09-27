"use server";

import prisma from "@/modules/_global/lib/prisma";
import { Profile, User } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function funCreateProfile({data}: {data: any}) {
  const availableEmail = await prisma.profile.findUnique({
    where:{
      email: data.email,
    }
  })
  if (availableEmail) return {success: true, message: "Email Telah digunakan"}  
  const availablePhoneNumber = await prisma.profile.findUnique({
    where:{
      phone: data.phone
    }
  })
  if (availablePhoneNumber) return {success: true, message: "Phone Telah digunakan"}  

 const profile =  await prisma.profile.create({
    data: {
      name: data.name,
      idClient: data.idClient,
      email: data.email,
      phone: data.phone,
      address: data.address,
    },
    select: {
      id: true ,
    }
  });

  await prisma.user.create({
    data:{ 
      idProfile: profile.id,
      idUserRole: data.idUserRole
    }

  });

  revalidatePath("/dashboard/configuration/user");

  return {
    success: true,
    message: "Add Profile Success",
  };
}
