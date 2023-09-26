import { TableBrand, funGetAllBrand } from '@/modules/configuration';
import React from 'react';

export default async function Page() {
  const data = await funGetAllBrand({ page: 1 })
  return (
    <TableBrand data={data} />
  );
}

