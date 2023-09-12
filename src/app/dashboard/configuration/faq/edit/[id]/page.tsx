import { EditFaq } from "@/modules/configuration";
import { funGetOneFaq } from "@/modules/configuration/fun/faq_get_one";
import React from "react";

function Page({ params }: { params: { id: string } }) {
  const data = funGetOneFaq(params.id)
  return <EditFaq  data={data}/>
}

export default Page;
