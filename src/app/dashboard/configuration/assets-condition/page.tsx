import { TableAssetsCondition } from '@/modules/configuration/assets_condition';
import { funGetAllAssetsCondition } from '@/modules/configuration/assets_condition/fun/assets_condition_get_all';
import { data } from 'autoprefixer';
import React from 'react';

export default async function Page() {
  const data = await funGetAllAssetsCondition()
  return (
    <TableAssetsCondition data={data}/>
  );
}
