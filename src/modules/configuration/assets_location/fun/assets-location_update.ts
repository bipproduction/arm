"use server";

import prisma from "@/modules/_global/lib/prisma";
import { AssetsLocation } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function funUpdateAssetsLocation(data: AssetsLocation) {
//   try {
//     if (!data.name)
//       return {
//         success: false,
//         message: "name",
//       };

    // const up = 
    await prisma.assetsLocation.update({
      where: {
        id: Number(data.id),
      },
      data: {
        name: data.name,
      },
    });
    revalidatePath("/dashboard/configuration/assets-location");

    return {
      success: true,
      message: "Success",
    //   data: up,
    };
//   } 
//   catch (error) {
//     console.log(error);
//     return {
//       success: false,
//       message: "error",
//       data: JSON.stringify(error),
//     };
//   }
}
