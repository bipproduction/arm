import { EditFaq, funGetOneFaq } from "@/modules/help";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await funGetOneFaq({ id: params.id })
  if (!data) return <>kosong</>
  return (
    <><EditFaq data={data} /></>
  )
}