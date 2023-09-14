import { TableOutletLocation, funGetAllOutletLocation } from '@/modules/configuration/outlet_location';
import React from 'react';

export default async function Page() {
  const data = await funGetAllOutletLocation()
  return (
    <TableOutletLocation data={data}/>
  );
}

