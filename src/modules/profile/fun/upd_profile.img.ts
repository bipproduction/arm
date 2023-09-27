'use server'

import prisma from "@/modules/_global/lib/prisma"
import { revalidatePath } from "next/cache"

export async function funUpdProfileImg({ id, img }: { id: string, img: string }) {
    await prisma.profile.update({
        where: {
            id: id
        },
        data: {
            idImage: img
        }
    })

    revalidatePath('/dashboard/profile/edit')

    return {
        success: true,
        message: 'Success'
    }
}