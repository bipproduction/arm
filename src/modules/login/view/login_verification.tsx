"use client";
import {
  Anchor,
  Box,
  Button,
  Flex,
  Group,
  MediaQuery,
  PinInput,
  Stack,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import { useFocusTrap } from "@mantine/hooks";
import toast from "react-simple-toasts";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { OtpView, RandomNew, phoneLogin } from "..";
import { MdArrowBackIosNew, MdArrowCircleLeft } from "react-icons/md";
import { ButtonBack, funUserLog } from "@/modules/_global";
import { _isSetOTP } from "../fun/otp_jotai";
import { funSetCookies } from "../fun/set_cookies";

export function LoginVerification() {
  const focusTrapRef = useFocusTrap();
  const [inpTlp, serInpTlp] = useState<any | null>(null);
  const router = useRouter();
  const [otp, setotp] = useAtom(OtpView);
  const [ranOTP, setRanOTP] = useAtom(RandomNew)
  const [valPhoneLogin, setPhoneLogin] = useAtom(phoneLogin)
  const [valSetOTP, setSetOTP] = useAtom(_isSetOTP)

  async function getverification() {
    if (otp == ranOTP) {
      const setC = await funSetCookies({phone: valPhoneLogin})
      await funUserLog({activity: "LOGIN", desc: "User Login"})
      toast("Verification code is correct", { theme: "dark" });
      setPhoneLogin(null)
      // router.push("/dashboard");

    } else {
      toast("Incorrect verification code", { theme: "dark" });
    }
  }

  async function sendOTP() {
    setRanOTP
    const res = await fetch(`https://wa.wibudev.com/code?nom=${valPhoneLogin}&text=${ranOTP}`)
      .then(
        async (res) => {
          if (res.status == 200) {
            toast('Verification code has been sent', { theme: 'dark' })
          } else {
            toast('Error', { theme: 'dark' })
          }
        }
      );
  }

  return (
    <>
      {/* {valMobile && <ButtonBack link="/" />} */}
      <MediaQuery largerThan={"sm"} styles={{ display: 'none' }}>

        <Flex>
          <ButtonBack link="/" />
        </Flex>
      </MediaQuery>
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
              <Anchor color="white" onClick={sendOTP}>Resend</Anchor>
            </Text>
          </Group>
        </Box>
      </Flex>
    </>
  );
}
