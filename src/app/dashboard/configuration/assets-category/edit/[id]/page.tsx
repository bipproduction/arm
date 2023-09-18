import { EditAssetsCategory, funGetOneAssetsCategory } from '@/modules/assets';
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  const data = await funGetOneAssetsCategory({ id: params.id });
  if (!data) return <></>
  return (
    <EditAssetsCategory data={data} />
  );
}
