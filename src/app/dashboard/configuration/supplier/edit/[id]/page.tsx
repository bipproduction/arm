import { EditSupplier, funGetOneSupplier } from '@/modules/configuration';
import React from 'react';

export default async function Page({params}: {params: {id : string}}) {
  const data = await funGetOneSupplier({id: params.id})
  return (
    <EditSupplier data={data}/>
  );
}
