import { prisma, seederProjectStatus, seederUserDev, seederUserRole } from "@/modules/_global"
import { redirect } from "next/navigation"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { pass: string } }) {
    if (params.pass != "ARM_wibudev") return redirect('/')
    for (let e of seederUserRole) {
        await prisma.userRole.upsert({
            where: {
                id: e.id
            },
            create: {
                id: e.id,
                position: e.position,
                role: e.role
            },
            update: {
                id: e.id,
                position: e.position,
                role: e.role
            }
        })
    }

    for (let e of seederProjectStatus) {
        await prisma.projectStatus.upsert({
            where: {
                id: e.id
            },
            create: {
                id: e.id,
                name: e.name,
                alias: e.alias
            },
            update: {
                id: e.id,
                name: e.name,
                alias: e.alias
            }
        })
    }

    for (let e of seederUserDev) {
        await prisma.user.upsert({
            where: {
                id: "adminWibuDeveloperARM"
            },
            create: {
                id: "adminWibuDeveloperARM",
                idUserRole: 3,
            },
            update: {
                id: "adminWibuDeveloperARM",
                idUserRole: 3,
            }
        });

        await prisma.profile.upsert({
                where: {
                    id: "adminWibuDeveloperARM"
                },
                create: {
                    id: "adminWibuDeveloperARM",
                    idUser: "adminWibuDeveloperARM",
                    name: "Lukman",
                    phone: "6287701790942",
                    email: "liukman@gmail.com",
                    address: "Denpasar"
                },
                update: {
                    id: "adminWibuDeveloperARM",
                    idUser: "adminWibuDeveloperARM",
                    name: "Lukman",
                    phone: "6287701790942",
                    email: "liukman@gmail.com",
                    address: "Denpasar"
                }
            })
        }

    // const userDev = await prisma.user.upsert({
    //     where: {
    //         id: "adminWibuDeveloperARM"
    //     },
    //     create: {
    //         id: "adminWibuDeveloperARM",
    //         idUserRole: 3,
    //     },
    //     update: {
    //         id: "adminWibuDeveloperARM",
    //         idUserRole: 3,
    //     }
    // })

    // const profileDev = await prisma.profile.upsert({
    //     where: {
    //         id: "adminWibuDeveloperARM"
    //     },
    //     create: {
    //         id: "adminWibuDeveloperARM",
    //         idUser: "adminWibuDeveloperARM",
    //         name: "Lukman",
    //         phone: "6287701790942",
    //         email: "liukman@gmail.com",
    //         address: "Denpasar"
    //     },
    //     update: {
    //         id: "adminWibuDeveloperARM",
    //         idUser: "adminWibuDeveloperARM",
    //         name: "Lukman",
    //         phone: "6287701790942",
    //         email: "liukman@gmail.com",
    //         address: "Denpasar"
    //     }
    // })


    return NextResponse.json({ success: true })
    }