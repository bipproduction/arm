import { ProfileView, funGetProfile } from "@/modules/profile";
import { unsealData } from "iron-session";
import _ from "lodash";
import { cookies } from "next/headers";
import React from "react";

async function Page() {
  const c = cookies().get("_tkn")
  const dataCookies = await unsealData(c!.value, { password: process.env.PWD as string })
  const profile = await funGetProfile({ id: _.toString(dataCookies.idProfile) })
  return <ProfileView data={profile} />;
}

export default Page;
