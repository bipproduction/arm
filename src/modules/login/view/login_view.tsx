"use client";
import { Box, Button, Flex, Group, Text, TextInput } from "@mantine/core";
import React from "react";

export function LoginView() {
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
          <TextInput placeholder="Phone" mt={30} />
          <Button
            mt={30}
            radius={"md"}
            color="gray"
            fullWidth
            component="a"
            href="/login-verification"
          >
            Login
          </Button>
        </Box>
      </Flex>
    </>
  );
}
