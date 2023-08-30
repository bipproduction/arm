"use client";
import {
  Anchor,
  Box,
  Button,
  Flex,
  Group,
  PinInput,
  Text,
} from "@mantine/core";
import React from "react";

export function LoginVerification() {
  return (
    <>
      <Flex
        justify={"center"}
        align={"center"}
        direction={"column"}
        h={"100vh"}
      >
        <Box
          sx={{
            backgroundColor: "#61677A",
            padding: 30,
            borderRadius: 10,
          }}
          w={{ base: 300, sm: 400 }}
        >
          <Group position="center">
            <Text fw={700} fz={28} color="white">
              LOGIN
            </Text>
          </Group>
          <Group position="center" mt={30}>
            <Text color="white">Enter Verification Code</Text>
          </Group>
          <Group position="center" mt={30}>
            <PinInput />
          </Group>
          <Group position="center">
            <Button
              mt={30}
              radius={"md"}
              color="gray"
              w={250}
              component="a"
              href="/dashboard"
            >
              Submit
            </Button>
          </Group>
          <Group position="center" mt={5}>
            <Text fz={12} color="white">
              Didnt receive a code ? {""}
              <Anchor color="white">Resend</Anchor>
            </Text>
          </Group>
        </Box>
      </Flex>
    </>
  );
}
