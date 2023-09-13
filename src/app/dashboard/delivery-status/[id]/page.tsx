import { DetailDeliveryStatus } from '@/modules/delivery_status';
import React from 'react';

function Page({params} : {params: {id: string}}) {
  return (
    <>
    <DetailDeliveryStatus id={params.id}/>
    </>
  );
}

export default Page;
