'use server'

import prisma from "@/modules/_global/lib/prisma"

export async function funGetOneOutletType({ id }: { id: any }) {
    const data = await prisma.outletType.findUnique({
        where: {
            id: Number(id)
        },
        select: {
            id: true,
            name: true
        }
    })

    return data
}