"use server";

import prisma from "@/modules/_global/lib/prisma";
import _, { ceil } from "lodash";

export async function funGetAllSupplier({
  page,
  search,
}: {
  page: number;
  search?: string;
}) {
  const skip = _.toNumber(page) * 10 - 10;
  const data = await prisma.supplier.findMany({
    skip: skip,
    take: 10,
    where: {
      isActive: true,
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  const nData = await prisma.supplier.count({
    where: {
      isActive: true,
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
  });

  const allData = {
    data: data,
    nPage: ceil(nData / 10),
  };

  return allData;
}
