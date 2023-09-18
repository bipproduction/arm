"use server"

import prisma from "@/modules/_global/lib/prisma"

export async function funGetOneFaq(id : any) {
  const data = await prisma.fAQ.findUnique({
    where: {
      isActive: true,
      id: id
    },
    select: {
      id: true,
      question:true,
      answer:true
    }
  })
  
  return data
}