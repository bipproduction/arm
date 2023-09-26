import { TableWarehouseLocation, funGetAllWarehouseLocation } from "@/modules/configuration";
import React from "react";

export default async function Page() {
  const data = await funGetAllWarehouseLocation({ page: 1 });
  return (
    <><TableWarehouseLocation data={data} /></>
  )
}
