'use server'

import prisma from "@/modules/_global/lib/prisma"
import { revalidatePath } from "next/cache"

export async function funCreateOutletType({ data }: { data: any }) {
    await prisma.outletType.create({
        data: {
            name: data.name,
        }
    })

    revalidatePath('/dashboard/configuration/outlet-type')

    return {
        success: true,
        message: "success"
    }
}