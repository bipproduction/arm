
"use server";
import { Container } from "@mantine/core";

import prisma from "@/modules/_global/lib/prisma";
import _, { ceil } from "lodash";

export async function funGetAllLogUser({
  search,
  tgl,
  tgl2,
  page
}: {
  search: any;
  tgl: any;
  tgl2: any;
  page: number
}) {
  let data: any[];
  if (search == "" && tgl == "") {
    data = [];
  } else {
    const skip = _.toNumber(page) * 10 - 10
    const tglAwal = tgl + " 00:00:00";
    const tglAkhir = tgl2 + " 23:59:59";
    data = await prisma.userLog.findMany({
      skip: skip,
      take: 10,
      where: {
        isActive: true,
        createdAt: {
          lte: new Date(tglAkhir),
          gte: new Date(tglAwal),
        },
        User: {
          Profile: {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
        },
      },
      select: {
        activity: true,
        description: true,
        createdAt: true,
        updatedAt: true,
        User: {
          select: {
            Profile: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      orderBy: {
        id: "asc"
      }
    });
  }

  const nData = await prisma.userLog.count({
    where: {
      isActive: true,
      User: {
        Profile: {
          name: {
            contains: search,
            mode: "insensitive",
          },
        },
      },
    },
  })


    const result = data.map((v) => ({
      ..._.omit(v, ["User"]),
      name: v.User.Profile?.name,
    }));

    const allData = {
      data :result ,
      nPage: ceil(nData / 10)
    }
  //   console.log(result);
  return allData
}
