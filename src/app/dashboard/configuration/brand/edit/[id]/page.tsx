import { EditBrand, funGetOneBrand } from "@/modules/configuration/brand";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await funGetOneBrand({id: params.id})
  if (!data) return <></>
  return (
    <EditBrand data={data}/>
  )
}
