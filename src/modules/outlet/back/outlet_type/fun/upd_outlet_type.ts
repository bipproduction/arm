'use server'

import prisma from "@/modules/_global/lib/prisma"
import { OutletType } from "@prisma/client"
import { revalidatePath } from "next/cache"

export async function funUpdOutletType({ data }: { data: OutletType }) {
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