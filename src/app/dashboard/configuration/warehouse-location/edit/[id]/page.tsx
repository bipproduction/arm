
import { EditWarehouseLocation, funGetOneWarehouseLocation } from '@/modules/configuration';
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  const data = await funGetOneWarehouseLocation(params.id)
  if (!data) return <></>
  return (
    <EditWarehouseLocation data={data} />
  );
}
