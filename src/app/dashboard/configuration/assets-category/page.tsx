import {
  TableAssetsCategory,
  funGetAllAssetsCategory,
} from "@/modules/configuration/assets_category";
import React from "react";

export default async function Page() {
  const data = await funGetAllAssetsCategory(1);
  return <TableAssetsCategory data={data} />;
}
