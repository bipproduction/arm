"use client";
import { ButtonBack, PageSubTitle } from "@/modules/_global";
import { Box, Button, Group, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";

function ViewUser() {
  const router = useRouter();
  return (
    <>
      <Stack>
        <ButtonBack />
        <PageSubTitle text="LIST USER" />
      </Stack>
      <Box>
        <Group position="right">
          <Button
            color="gray.7"
            onClick={() => router.push("/dashboard/configuration/user/add")}
          >
            Add User
          </Button>
        </Group>
      </Box>
    </>
  );
}

export default ViewUser;
