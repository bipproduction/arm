"use client";
import { Box, Button, Flex, Group, Text, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { useFocusTrap } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import "react-simple-toasts/dist/theme/dark.css"
import toast from "react-simple-toasts"
import { useAtom } from "jotai";
import { LoginVerification, RandomNew, phoneLogin } from "..";
import { funLogin } from "../fun/login";
import { _isSetOTP } from "../fun/otp_jotai";

export function LoginView() {
  const focusTrapRef = useFocusTrap();
  const [inpTlp, setInpTlp] = useState<any | null>(null);
  const router = useRouter()
  const [ranOTP, setRanOTP] = useAtom(RandomNew)
  const [valPhoneLogin, setPhoneLogin] = useAtom(phoneLogin)
  const [valSetOTP, setSetOTP] = useAtom(_isSetOTP)

  async function sendOTP() {
    const cekProfile = await funLogin({ phone: inpTlp })
    if (!cekProfile.success)
      return toast(cekProfile.message, { theme: 'dark' })

    setRanOTP
    const res = await fetch(`https://wa.wibudev.com/code?nom=${inpTlp}&text=${ranOTP}`)
      .then(
        async (res) => {
          if (res.status == 200) {
            toast('Verification code has been sent', { theme: 'dark' })
            setPhoneLogin(inpTlp);
            setSetOTP(true)
            // router.push('/login-verification')
          } else {
            toast('Error', { theme: 'dark' })
          }
        }
      );
  }

  if (valSetOTP) return <LoginVerification />

  return (
    <>
      <div ref={focusTrapRef}>
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
            <TextInput placeholder="62" mt={30} onChange={(val) => setInpTlp(val.target.value)} />
            <Button
              mt={30}
              radius={"md"}
              color="gray"
              fullWidth
              onClick={() => {
                sendOTP()
              }}
            >
              Login
            </Button>
          </Box>
        </Flex>
      </div>
    </>
  );
}
