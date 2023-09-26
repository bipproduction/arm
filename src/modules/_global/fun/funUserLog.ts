'use server'

import { cookies } from "next/headers";
import prisma from "../lib/prisma";
import { unsealData } from "iron-session";
import _ from "lodash";

export async function funUserLog({ activity, desc }: { activity: string, desc: string }) {

    const c = cookies().get("_tkn")
    const dataCookies = await unsealData(c!.value, { password: process.env.PWD as string })

    await prisma.userLog.create({
        data: {
            idUser: _.toString(dataCookies.idUser),
            activity: activity,
            description: desc,
        }
    })

    return {
        success: true,
        message: "success",
    };
}