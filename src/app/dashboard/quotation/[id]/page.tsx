import { CreateQuotation } from '@/modules/quotation';
import React from 'react';

export default function Page({params}: {params: {id: string}}) {
  return (
    <CreateQuotation id={params.id}/>
  );
}

