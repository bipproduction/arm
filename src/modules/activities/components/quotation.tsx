"use client"
import { Button, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";

export function Quotation() {
  const router = useRouter()
  return (
    <>
      <Button fullWidth color="gray.0" onClick={() => router.push(`/dashboard/quotation`)}>
        <Text color="dark">QUOTATION</Text>
      </Button>
    </>
  );
}
