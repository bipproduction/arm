import { EditBrand, funGetOneBrand } from "@/modules/configuration";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await funGetOneBrand({ id: params.id })
  if (!data) return <></>
  return (
    <EditBrand data={data} />
  )
}
