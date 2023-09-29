import { funGetDatauserRole } from '@/modules/_global';
import { EditUser, funGetOneUser } from '@/modules/configuration';
import React from 'react';

async function Page({ params }: { params: { id: string } }) {
  const data = await funGetOneUser({ id: params.id });
  let role
  if (data.role[0] == 1 || data.role[0] == 2) {
    role = await funGetDatauserRole({ category: "CLIENT" })
  } else {
    role = await funGetDatauserRole({ category: "AGENCY" })
  }

  return (
    <>
      <EditUser data={data} role={role} />
    </>
  );
}

export default Page;
