'use server'

import prisma from "@/modules/_global/lib/prisma"
import { revalidatePath } from "next/cache"

export async function funUpdOutletType({ data }: { data: any }) {
    await prisma.outletType.update({
        where: {
            id: data.id
        },
        data: {
            name: data.name
        }
    })

    revalidatePath('/dashboard/configuration/outlet-type')

    return {
        success: true,
        message: "success"
    }
}