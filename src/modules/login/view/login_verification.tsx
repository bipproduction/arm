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
import React, { useState } from "react";
import { useFocusTrap } from "@mantine/hooks";
import toast from "react-simple-toasts";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { OtpView, RandomNew } from "..";

export function LoginVerification() {
  const focusTrapRef = useFocusTrap();
  const [inpTlp, serInpTlp] = useState<any | null>(null);
  const router = useRouter();
  const [otp, setotp] = useAtom(OtpView);
  const [ranOTP,setRanOTP ] = useAtom(RandomNew)

  async function getverification() {
    console.log(otp)
    if (otp == ranOTP) {
      console.log("berhasil")
      toast("Success", { theme: "dark" });
      router.push("/dashboard");
    } else {
      toast("OTP Salah", { theme: "dark" });
      console.log("salahh")
    }
  }

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
          <div ref={focusTrapRef}>
            <Group position="center" mt={30}>
              <PinInput onChange={setotp} />
            </Group>
          </div>
          <Group position="center">
            <Button
              mt={30}
              radius={"md"}
              color="gray"
              w={250}
              onClick={getverification}
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
