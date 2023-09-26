'use server'

import prisma from "@/modules/_global/lib/prisma";

export async function funLogin({ phone }: { phone: any }) {
    const profile = await prisma.profile.findUnique({
        where: {
            isActive: true,
            phone: phone
        }
    })

    if (!profile)
        return {
            success: false,
            message: "User not found"
        }

    return {
        success: true,
        message: "Success"
    }

}