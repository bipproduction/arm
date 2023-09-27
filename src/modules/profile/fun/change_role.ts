'use server'

import prisma from "@/modules/_global/lib/prisma"
import { sealData } from "iron-session"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function funChangeRole({ idUser }: { idUser: string }) {
    const user = await prisma.user.findUnique({
        where: {
            isActive: true,
            id: idUser
        },
        select: {
            id: true,
            idUserRole: true,
            Profile: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    })


    const tkn = await sealData(
        {
            idProfile: user?.Profile?.id,
            name: user?.Profile?.name,
            idUser: user?.id,
            roleUser: user?.idUserRole
        },
        { password: process.env.PWD as string })


    cookies().set(
        {
            name: "_tkn",
            value: tkn
        }
    )

    revalidatePath('/dashboard')

    return {
        success: true,
        message: "success"
    }
}