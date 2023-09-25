"use server"

import prisma from "@/modules/_global/lib/prisma"
import { Brand } from "@prisma/client"
import { revalidatePath } from "next/cache"

export async function funCreateBrand({ data }: { data: Brand }) {
    await prisma.brand.create({
        data: {
            name: data.name
        }
    })
    revalidatePath("/dahsboard/configuration/brand")

    return {
        success: true,
        message: "Success"
    }
} 