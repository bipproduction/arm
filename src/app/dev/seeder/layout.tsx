import { SeederLayout } from '@/modules/seeder/components/seeder';
import React, { Suspense } from 'react';

export default async function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
    <SeederLayout>
      <Suspense>
        {children}
      </Suspense>
    </SeederLayout>
    </>
  );
}
