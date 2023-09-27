import { funGetDatauserRole } from '@/modules/_global/fun/get_data_user_role';
import { funGetDataClient } from '@/modules/configuration/client/fun/get_data_client';
import { AddUser } from '@/modules/configuration/user';
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

