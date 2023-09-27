"use server"

import prisma from "../lib/prisma"
export async function funGetDatauserRole({category}: {category: string}) {
    const data = await prisma.userRole.findMany({
        where: {
            isActive: true,
            position: category
        }
    })

    // console.log(data)

    return data
    
}