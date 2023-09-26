import { TableFaq, funGetAllFaq } from "@/modules/help";
import React from "react";

export default async function Page() {
  const data = await funGetAllFaq({ page: 1 })
  return <TableFaq data={data} />;
}

