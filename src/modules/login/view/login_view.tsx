"use client";
import { Box, Button, Flex, Group, Text, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { useFocusTrap } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import  "react-simple-toasts/dist/theme/dark.css"
import toast from "react-simple-toasts"
import { useAtom } from "jotai";
import { RandomNew } from "..";

export function LoginView() {
  const focusTrapRef = useFocusTrap();
  const [inpTlp, setInpTlp] = useState<any | null>(null);
  const router = useRouter()
  const [ranOTP,setRanOTP ] = useAtom(RandomNew)
  
  async function getDataNomor() {
   const res = await  fetch(`https://wa.makurostudio.my.id/code?nom=${inpTlp}&text=${ranOTP}`)
   .then(
      async (res) => {
        if (res.status == 200) {
          return 
        }
        toast('Erorr', { theme: 'dark' })
      }
    );
    toast('Success', { theme: 'dark' })
    router.push('/login-verification')
    console.log(ranOTP)
  }
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
            <TextInput placeholder="62" mt={30} onChange={(val) => setInpTlp(val.target.value)}/>
            <Button
              mt={30}
              radius={"md"}
              color="gray"
              fullWidth
              onClick={()=> {
                getDataNomor()
               setRanOTP
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
