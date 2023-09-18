import { TableAssetsCondition, funGetAllAssetsCondition } from "@/modules/assets";
import React from "react";

export default async function Page() {
  const data = await funGetAllAssetsCondition({ page: 1 });
  return <TableAssetsCondition data={data} />;
}
