import { EditOutletLocation } from '@/modules/configuration/outlet_location';
import { funGetOnOutletLocation } from '@/modules/configuration/outlet_location/fun/outlet_location_get_one';
import React from 'react';

export default async function Page({params}: {params: {id: string}}) {
  const data = await funGetOnOutletLocation(params.id)
  return (
    <EditOutletLocation data={data}/>
  );
}
