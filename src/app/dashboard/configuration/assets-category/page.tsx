import { TableAssetsCategory } from "@/modules/configuration/assets_category";
import { funGetAllAssetsCategory } from "@/modules/configuration/assets_category/fun/assets_category_get_all";
import React from "react";

export default async function Page() {
  const data = await funGetAllAssetsCategory()
  return <TableAssetsCategory data={data} />;
}

