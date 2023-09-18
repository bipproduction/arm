'use server'

import prisma from "@/modules/_global/lib/prisma"
import { FAQ } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function funFaqEdit({ data }: { data: FAQ }) {
    await prisma.fAQ.update({
        where: {
            id: data.id
        },
        data: {
            question: data.question,
            answer: data.answer
        }
    })

    revalidatePath("/dashboard/configuration/faq");

    return {
        success: true,
        message: "success",
    };
}