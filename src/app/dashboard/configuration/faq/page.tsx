import { TableFaq } from "@/modules/configuration";
import { funGetFaq } from "@/modules/configuration/faq/fun/faq_get";
import React from "react";

export default async function Page() {
  const data = await funGetFaq(1)
  return <TableFaq data={data} />;
}

