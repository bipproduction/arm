'use server'

import prisma from "@/modules/_global/lib/prisma"
import _ from "lodash"

export async function funGetListRole({ profile, user }: { profile: string, user: string }) {

    const dataUser = await prisma.user.findMany({
        where: {
            isActive: true,
            idProfile: profile
        },
        select: {
            id: true,
            idUserRole: true,
            UseRole: {
                select: {
                    role: true
                }
            }
        }
    })

    const dataOmit = dataUser.map((item) => ({
        ..._.omit(item, ["UseRole"]),
        role: item.UseRole?.role
    }))


    const d = _.cloneDeep(dataOmit)
    const n = d.filter((v) => v.id !== user)

    return n

}