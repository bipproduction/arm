import { TableProjectsCategory } from '@/modules/configuration/projects_category';
import { funGetProjectsCategory } from '@/modules/configuration/projects_category/fun/projects_category_get';
import React from 'react';

export default async function Page() {
  const data = await funGetProjectsCategory()
  return (
    <TableProjectsCategory data={data}/>
  );
}

