"use server"

import prisma from "@/modules/_global/lib/prisma"
import { Supplier } from "@prisma/client"
import { revalidatePath } from "next/cache"

export async function funCreateSupplier({ data }: { data: Supplier }) {
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