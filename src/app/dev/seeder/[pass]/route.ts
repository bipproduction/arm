import { seederProjectStatus, seederUserDev, seederUserRole } from "@/modules/_global"
import prisma from "@/modules/_global/lib/prisma"
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

    await prisma.profile.upsert({
        where: {
            id: "adminProfileWibuDeveloperARM"
        },
        create: {
            id: "adminProfileWibuDeveloperARM",
            name: "Lukman",
            phone: "6287701790942",
            email: "lukman@gmail.com",
            address: "Denpasar"
        },
        update: {
            id: "adminProfileWibuDeveloperARM",
            name: "Lukman",
            phone: "6287701790942",
            email: "lukman@gmail.com",
            address: "Denpasar"
        }
    })

    await prisma.user.upsert({
        where: {
            id: "adminUserWibuDeveloperARM"
        },
        create: {
            id: "adminUserWibuDeveloperARM",
            idUserRole: 3,
            idProfile: "adminProfileWibuDeveloperARM"
        },
        update: {
            id: "adminUserWibuDeveloperARM",
            idUserRole: 3,
            idProfile: "adminProfileWibuDeveloperARM"
        }
    });


    return NextResponse.json({ success: true })
}