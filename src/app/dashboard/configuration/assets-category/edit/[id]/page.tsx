import { EditAssetsCategory } from '@/modules/configuration/assets_category';
import { funGetOneAssetsCategory } from '@/modules/configuration/assets_category/fun/assets_category_get_one';
import React from 'react';

export default async function Page({params}: {params: {id: string}}) {
  const data = await funGetOneAssetsCategory(params.id)
  if(!data) return <></>
  return (
   <EditAssetsCategory data={data}/>
  );
}
