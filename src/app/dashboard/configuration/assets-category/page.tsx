import {
  TableAssetsCategory,
  funGetAllAssetsCategory,
} from "@/modules/configuration/assets_category";
import React from "react";

export default async function Page() {
  const data = await funGetAllAssetsCategory();
  return <TableAssetsCategory data={data} />;
}
