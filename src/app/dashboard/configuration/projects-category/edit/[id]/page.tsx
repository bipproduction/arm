import { EditProjectsCategory } from "@/modules/configuration/projects_category";
import { funGetOneProjectsCategory } from "@/modules/configuration/projects_category/fun/projects_category_get_one";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await funGetOneProjectsCategory(params.id);
  if (!data) return <></>;
  return <EditProjectsCategory data={data} />;
}
