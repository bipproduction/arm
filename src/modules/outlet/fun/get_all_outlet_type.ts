'use server'

import prisma from "@/modules/_global/lib/prisma"

export async function funGetAllOutletType() {
    const data = await prisma.outletType.findMany({
        where: {
            isActive: true
        },
        select: {
            id: true,
            name: true
        }
    })

    return data
}