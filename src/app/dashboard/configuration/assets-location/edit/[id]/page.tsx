import { EditAssetsLocation } from '@/modules/configuration/assets_location';
import { funGetOneAssetsLocation } from '@/modules/configuration/assets_location/fun/assets_location_get_one';
import React from 'react';

export default async function Page({params}: {params: {id: string}}) {
  const data = await funGetOneAssetsLocation(params.id)
  if(!data) return <></>
  return (
    <EditAssetsLocation data={data}/>
  );
}
