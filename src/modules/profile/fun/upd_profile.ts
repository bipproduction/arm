'use server'

import prisma from "@/modules/_global/lib/prisma";
import { Profile } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function funUpdProfile({ data }: { data: Profile }) {
    const cekEmail = await prisma.profile.findUnique({
        where: {
            email: data.email,
        }
    })
    if (cekEmail && cekEmail.id != data.id) return {
        success: false,
        message: 'Available email'
    }

    const cekPhone = await prisma.profile.findUnique({
        where: { phone: data.phone }
    })
    if (cekPhone && cekPhone.id != data.id) return {
        success: false,
        message: 'Available phone number'
    }

    await prisma.profile.update({
        where: {
            id: data.id,
        },
        data: {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address
        }
    })

    revalidatePath('/dashboard/profile/edit')

    return {
        success: true,
        message: 'Success'
    }
}