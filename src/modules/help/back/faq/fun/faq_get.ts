"use server";

import prisma from "@/modules/_global/lib/prisma";
import _, { ceil } from "lodash";

export async function funGetAllFaq({ page, search }: { page: number, search?: string }) {
  const skip = _.toNumber(page) * 10 - 10;
  const data = await prisma.fAQ.findMany({
    skip: skip,
    take: 10,
    where: {
      isActive: true,
      question: {
        contains: search,
        mode: 'insensitive'
      }
    },
    select: {
      id: true,
      question: true,
      answer: true,
    },
  });

  const nData = await prisma.fAQ.count({
    where: {
      isActive: true,
      question: {
        contains: search,
        mode: 'insensitive'
      }
    }
  });

  const allData = {
    data: data,
    nPage: ceil(nData / 10)
  }

  return allData
}
