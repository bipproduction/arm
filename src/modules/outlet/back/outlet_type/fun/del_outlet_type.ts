'use server'

import prisma from "@/modules/_global/lib/prisma"
import { revalidatePath } from "next/cache"

export async function funDelOutletType({ id }: { id: number }) {
    const data = await prisma.outletType.update({
        where: {
            id: Number(id)
        },
        data: {
            isActive: false
        },
        select: {
            id: true,
            name: true
        }
    })

    revalidatePath('/dashboard/configuration/outlet-type')

    return {
        success: true,
        message: "success",
        dataDel: data
    }

}