'use server'

import prisma from "@/modules/_global/lib/prisma"
import _ from "lodash";

export async function funGetProfile({ id }: { id: string }) {
    const data = await prisma.profile.findUnique({
        where: {
            id: id
        }
    });
    const foto = await prisma.image.findUnique({
        where: {
            id: _.toString(data?.idImage)
        }
    })

    const allData = {
        id: data?.id,
        idImage: data?.idImage,
        idClient: data?.idClient,
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        address: data?.address,
        extension: foto?.extension || null
    }

    return allData
}