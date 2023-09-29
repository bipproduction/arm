'use server'

import prisma from "@/modules/_global/lib/prisma"
import _ from "lodash"

export async function funGetOneUser({ id }: { id: string }) {
    const dataProfile = await prisma.profile.findUnique({
        where: {
            id: id,
        },
    })

    const dataClient = await prisma.client.findUnique({
        where: {
            id: _.toString(dataProfile?.idClient)
        }
    })

    const dataRole = await prisma.user.findMany({
        where: {
            isActive: true,
            idProfile: dataProfile?.id
        },
        select: {
            idUserRole: true
        }
    })

    let iniRole=[]
    for (let item of dataRole) {
        iniRole.push(item.idUserRole)
    }

    const allData = {
        id: dataProfile?.id,
        name: dataProfile?.name,
        email: dataProfile?.email,
        phone: dataProfile?.phone,
        address: dataProfile?.address,
        client: dataClient?.name,
        role: iniRole
    }


    return allData
}