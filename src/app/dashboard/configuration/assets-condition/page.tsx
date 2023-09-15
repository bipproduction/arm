import {
  TableAssetsCondition,
  funGetAllAssetsCondition,
} from "@/modules/configuration/assets_condition";
import { data } from "autoprefixer";
import React from "react";

export default async function Page() {
  const data = await funGetAllAssetsCondition(1);
  return <TableAssetsCondition data={data} />;
}
