'use server'

import prisma from "@/modules/_global/lib/prisma";
import { Client } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function funUpdclient({ data }: { data: Client }) {
    await prisma.client.update({
        where: {
            id: data.id,
        },
        data: {
            name: data.name,
            phone: data.phone,
            address: data.address
        }
    })

    revalidatePath('/dashboard/configuration/client')

    return {
        success: true,
        message: "success"
    }
}