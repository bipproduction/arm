'use server'

import prisma from "../lib/prisma";

export async function funUserLog({ user, activity, desc }: { user: string, activity: string, desc: string }) {

    await prisma.userLog.create({
        data: {
            idUser: user,
            activity: activity,
            description: desc,
        }
    })

    return {
        success: true,
        message: "success",
    };
}