"use client";
import { Button, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";

export function Archive() {
  const router = useRouter()
  return (
    <>
      <Button fullWidth color="gray.0" onClick={() => router.push("/dashboard/archive")}>
        <Text color="dark">ARCHIVE</Text>
      </Button>
    </>
  );
}
