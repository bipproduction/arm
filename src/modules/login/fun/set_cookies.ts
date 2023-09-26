'use server'

import prisma from "@/modules/_global/lib/prisma"
import { sealData } from "iron-session"
import { cookies } from 'next/headers'

export async function funSetCookies({ phone }: { phone: string }) {
    const profile = await prisma.profile.findUnique({
        where: {
            isActive: true,
            phone: phone
        }
    })

    const user = await prisma.user.findFirst({
        where: {
            isActive: true,
            idProfile: profile?.id
        }
    })

    const tkn = await sealData(
        {
            idProfile: profile?.id,
            name: profile?.name,
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


    return {
        success: true,
        message: "success"
    }
}