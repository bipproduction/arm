
"use client"
import { Button, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';

export function CreateProject() {
  const router = useRouter()
  return (
    <>
    <Button fullWidth color='gray.0' onClick={() => router.push("/dashboard/list-client")}>
      <Text color='dark'>CREATE PROJECT</Text>
    </Button>
    </>
  );
}
