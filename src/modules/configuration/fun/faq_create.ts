"use server";

import prisma from "@/modules/_global/lib/prisma";
import { revalidatePath } from "next/cache";

export async function funFaqCreate({ data }: { data: any }) {
  await prisma.fAQ.create({
    data: {
      question: data.question,
      answer: data.answer,
    },
  });

  revalidatePath("/dashboard/configuration/faq");
  
  return {
    success: true,
    message: "success",
  };
}
