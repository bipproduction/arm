import { EditAssetsCondition } from '@/modules/configuration/assets_condition';
import { funGetOneAssetsCondition } from '@/modules/configuration/assets_condition/fun/assets_condition_get_one';
import React from 'react';

export default async function Page({params}: {params: {id: string}}) {
  const data = await funGetOneAssetsCondition(params.id)
  if(!data) return <></>
  return (
    <EditAssetsCondition data={data}/>
  );
}
