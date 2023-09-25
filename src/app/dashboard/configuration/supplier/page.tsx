import { TableSupplier, funGetAllSupplier } from '@/modules/configuration/supplier';
import React from 'react';

export default async function Page() {
  const data = await funGetAllSupplier({page: 1})
  return (
    <TableSupplier data={data}/>
  );
}
