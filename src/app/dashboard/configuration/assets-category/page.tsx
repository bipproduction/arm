import { TableAssetsCategory, funGetAllAssetsCategory } from "@/modules/assets";
import React from "react";

export default async function Page() {
  const data = await funGetAllAssetsCategory({ page: 1 });
  return <TableAssetsCategory data={data} />;
}
