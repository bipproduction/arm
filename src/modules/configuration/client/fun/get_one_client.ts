'use server'

import prisma from "@/modules/_global/lib/prisma"

export async function funGetOneClient({ id }: { id: any }) {
    const data = await prisma.client.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            phone: true,
            address: true
        }
    })

    return data
}