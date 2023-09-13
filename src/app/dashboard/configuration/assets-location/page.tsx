import { TableAssetsLocation } from "@/modules/configuration/assets_location";
import { funGetAllAssetsLocation } from "@/modules/configuration/assets_location/fun/assets_location_get_all";
import React from "react";

export default async function Page() {
  const data = await funGetAllAssetsLocation()
  return <TableAssetsLocation data={data} />;
}

