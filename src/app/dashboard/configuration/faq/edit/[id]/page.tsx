import { EditFaq } from "@/modules/configuration";
import { funGetOneFaq } from "@/modules/configuration/faq/fun/faq_get_one";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await funGetOneFaq(params.id)
  if(!data) return<>kosong</>
  return (
    <><EditFaq data={data} /></>
  )
}