import {
  TableProjectsCategory,
  funGetAllProjectsCategory,
} from "@/modules/configuration/projects_category";

import React from "react";

export default async function Page() {
  const data = await funGetAllProjectsCategory();
  return <TableProjectsCategory data={data} />;
}
