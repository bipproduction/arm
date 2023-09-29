import { ViewUser, funGetAllUser } from "@/modules/configuration";
import React from "react";

async function Page() {
  const data = await funGetAllUser({ page: 1 })
  return (
    <>
      <ViewUser data={data} />
    </>
  );
}

export default Page;
