'use server'

import prisma from "@/modules/_global/lib/prisma"
import { revalidatePath } from "next/cache"

export async function funUpdateUser({ data }: { data: any }) {
    const availableEmail = await prisma.profile.findUnique({
        where: {
            email: data.email,
        }
    })
    if (availableEmail && availableEmail.id != data.id) return { success: false, message: "Available email" }


    const availablePhoneNumber = await prisma.profile.findUnique({
        where: {
            phone: data.phone
        }
    })
    if (availablePhoneNumber && availablePhoneNumber.id != data.id) return { success: false, message: "Available phone number" }

    await prisma.profile.update({
        where: {
            id: data.id
        },
        data: {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address
        }
    })

    await prisma.user.updateMany({
        where: {
            idProfile: data.id,
            isActive: true,
        },
        data: {
            isActive: false
        }
    })

    for (let item of data.role) {
        const cekUser = await prisma.user.findFirst({
            where: {
                idUserRole: item,
                idProfile: data.id,
                isActive: false,
            }
        })
        if (cekUser) {
            const upd = await prisma.user.updateMany({
                where: {
                    idUserRole: item,
                    idProfile: data.id,
                    isActive: false,
                },
                data: {
                    isActive: true
                }
            });
        } else {
            const create = await prisma.user.create({
                data: {
                    idUserRole: item,
                    idProfile: data.id
                }
            });
        }

    }

    revalidatePath("/dashboard/configuration/user");

    return {
        success: true,
        message: "Add Profile Success",
    };
}