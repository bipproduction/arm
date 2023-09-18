"use server"

import prisma from "@/modules/_global/lib/prisma"
import { revalidatePath } from "next/cache"

export async function funDeleteProjectCategory({id}: {id: number}) {
    await prisma.projectCategory.update({
        where: {
            id: Number(id)
        },
        data: {
            isActive: false
        }
    })

    revalidatePath('/dashboard/configuration/projects-category')

    return {
        success: true,
        message: "success"
    }
    
} 