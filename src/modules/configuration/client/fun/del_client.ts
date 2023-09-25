'use server'

import prisma from "@/modules/_global/lib/prisma"
import { revalidatePath } from "next/cache"


export async function funDelClient({ id }: { id: string }) {
    const data = await prisma.client.update({
        where: {
            id: id
        },
        data: {
            isActive: false
        },
        select: {
            id: true,
            name: true,
            phone: true,
            address: true,
        }
    })

    revalidatePath('/dashboard/configuration/client')

    return {
        success: true,
        message: "success",
        dataDel: data
    }
}