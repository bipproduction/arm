'use server'

import prisma from "@/modules/_global/lib/prisma"

export async function funDeleteUser({ id }: { id: string }) {
    await prisma.user.updateMany({
        where: {
            idProfile: id,
            isActive: true
        },
        data: {
            isActive: false
        }
    })

    await prisma.profile.update({
        where: {
            id: id,
        },
        data: {
            isActive: false
        }
    })

    return {
        success: true,
        message: 'Success'
    }
}