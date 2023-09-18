import { EditAssetsCondition, funGetOneAssetsCondition } from '@/modules/assets';
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  const data = await funGetOneAssetsCondition({ id: params.id })
  if (!data) return <></>
  return (
    <EditAssetsCondition data={data} />
  );
}
