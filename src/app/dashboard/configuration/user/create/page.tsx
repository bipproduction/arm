import { funGetDatauserRole } from '@/modules/_global';
import { AddUser, funGetDataClient } from '@/modules/configuration';
import React from 'react';

export default async function Page() {
  const client = await funGetDataClient()
  const role = await funGetDatauserRole({category: "AGENCY"})
  return (
    <>
    <AddUser client={client} role={role} />
    </>
  );
}

