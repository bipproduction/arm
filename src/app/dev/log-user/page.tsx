
import { LogUser } from "@/modules/log_user";
import { funGetAllLogUser } from "@/modules/log_user/fun/log-user-get-all";
import React from "react";

export default async function Page() {
  // const data = await funGetAllLogUser({ search:'', tgl='2023-23', tgl2})
  return <LogUser/>;
}
