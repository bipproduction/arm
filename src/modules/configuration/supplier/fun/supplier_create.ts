"use server"

import prisma from "@/modules/_global/lib/prisma"
import { revalidatePath } from "next/cache"

export async function funCreateSupplier({data}: {data: any}) {
    await prisma.supplier.create({
        data: {
            name: data.name
        }
    })

    revalidatePath("/dashboard/configuration/supplier")

    return {
        sussess: true,
        message: "Success"
    }
    
}