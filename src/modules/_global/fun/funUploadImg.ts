'use server'

import fs from 'fs'
import prisma from '../lib/prisma'

export async function funUploadImg(formData: FormData) {
    const f: any = formData.get('file')
    const fName = f.name
    const fExt = f.name.split(".").pop()

    const fl = await prisma.image.create({
        data: {
            name: fName,
            extension: fExt
        },
        select: {
            id: true,
            name: true,
            extension: true
        }
    })

    const filenya = Buffer.from(await f.arrayBuffer())
    fs.writeFileSync(`./public/img/user/${fl.id}.${fExt}`, filenya)

    return {
        success: true,
        message: "success",
        data: fl
    }

}