import { TableOutletLocation, funGetAllOutletLocation } from '@/modules/configuration/outlet_location';
import React from 'react';

export default async function Page() {
  const data = await funGetAllOutletLocation(1)
  return (
    <TableOutletLocation data={data}/>
  );
}

