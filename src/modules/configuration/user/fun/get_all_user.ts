'use server'

import prisma from "@/modules/_global/lib/prisma"
import _, { ceil } from "lodash";

export async function funGetAllUser({ page, search }: { page: number, search?: string }) {
    const skip = _.toNumber(page) * 10 - 10;
    const data = await prisma.profile.findMany({
        skip: skip,
        take: 10,
        where: {
            isActive: true,
            name: {
                contains: search,
                mode: 'insensitive'
            }
        },
        select: {
            id: true,
            name: true,
            phone: true,
            Client: {
                select: {
                    name: true
                }
            },
            User: {
                where: {
                    isActive: true
                },
                select: {
                    UseRole: {
                        select: {
                            role: true
                        }
                    }
                }
            }
        }
    })


    const dataOmit = data.map((item) => ({
        ..._.omit(item, ["Client"], ["User"]),
        client: item.Client?.name,
        role: item.User
    }))

    const nData = await prisma.profile.count({
        where: {
            isActive: true,
            name: {
                contains: search,
                mode: 'insensitive'
            }
        },
    })


    const allData = {
        data: dataOmit,
        nPage: ceil(nData / 10)
    }


    return allData
}