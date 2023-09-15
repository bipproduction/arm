import { data } from 'autoprefixer';
"use server";

import prisma from "@/modules/_global/lib/prisma";
import _, { ceil } from "lodash";

export async function funGetAllOutletLocation(p: number, s?: string) {
  const skip = _.toNumber(p) * 10 - 10
  const data = await prisma.outletLocation.findMany({
    skip: skip,
    take: 10,
    where: {
      isActive: true,
    },
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  const nData = await prisma.outletLocation.count({
    where: {
      isActive: true,
      
    },
  });

  const allData = {
    data: data,
    nPage: Math.ceil(nData / 10 ),
  };

  return allData;
}
