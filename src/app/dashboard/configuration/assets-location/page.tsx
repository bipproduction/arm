import {
  TableAssetsLocation,
  funGetAllAssetsLocation,
} from "@/modules/configuration/assets_location";
import React from "react";

export default async function Page() {
  const data = await funGetAllAssetsLocation();
  return <TableAssetsLocation data={data} />;
}
