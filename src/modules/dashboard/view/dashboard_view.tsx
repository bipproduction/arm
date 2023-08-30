'use client'
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { isMobile } from '../../_global/val/isMobile';
import { Text } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';

export function DashboardView() {
  const [inMobile, setMobile] = useAtom(isMobile);




  return (
    <>
      {JSON.stringify(inMobile)}
      <Text>Dashboard MObile</Text>
      {inMobile && <Text>Mobile nihh</Text>}
    </>
  );
}
