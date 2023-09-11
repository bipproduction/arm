"use client";
import { ButtonBack } from "@/modules/_global";
import {
  Avatar,
  Box,
  Button,
  Center,
  Grid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css"

export default function EditProfile() {
  const router = useRouter()
  function save () {
    toast("Edit Profile Success", {theme: "dark"})
    router.push("/dashboard/profile")
  }
  return (
    <>
      <Box pt={20}>
        <Box
          sx={{
            border: "1px solid #CED4DA",
            borderRadius: 20,
            padding: 30,
          }}
          pt={40}
        >
          <Text fw={700} fz={20} color="gray.6" pb={30}>
            Personal Data
          </Text>
          <Center>
            <Avatar
              size={130}
              radius={100}
              src={"../../img/profile.png"}
              alt="Vitaly Rtishchev"
              color="dark"
            />
          </Center>
          <Center pt={10}>
            <Button color="gray.5" radius="xl">
              Edit Image Profile
            </Button>
          </Center>
          <Box pt={40}>
            <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
              <Grid.Col md={6} lg={6}>
                <Stack pt={20}>
                  <Box>
                    <Text fw={700} fz={14}>
                      NAME
                    </Text>
                    <TextInput placeholder="ARM INDONESIA" radius={20} />
                  </Box>
                  <Box pt={10}>
                    <Text fw={700} fz={14}>
                      EMAIL
                    </Text>
                    <TextInput
                      placeholder="ARM_OFFICIAL@GMAIL.COM"
                      radius={20}
                    />
                  </Box>
                </Stack>
              </Grid.Col>
              <Grid.Col md={6} lg={6}>
                <Stack pt={20}>
                  <Box>
                    <Text fw={700} fz={14}>
                      NO. PHONE
                    </Text>
                    <TextInput placeholder="+62 (323) 223 313" radius={20} />
                  </Box>
                  <Box pt={10}>
                    <Text fw={700} fz={14}>
                      ADDRESS
                    </Text>
                    <TextInput
                      placeholder=" JALAN GATOT SUBROTO, JAKARTA"
                      radius={20}
                    />
                  </Box>
                </Stack>
              </Grid.Col>
            </Grid>
            <Grid pt={30}>
              <Grid.Col md={6} lg={6}>
                <Button fullWidth variant="outline"
                color="gray"
                radius="xl" onClick={() => router.push("/dashboard/profile")}>CANCEL</Button>
              </Grid.Col>
              <Grid.Col md={6} lg={6}>
                <Button radius={"xl"} color="gray.7" onClick={save} fullWidth>SAVE</Button>
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
