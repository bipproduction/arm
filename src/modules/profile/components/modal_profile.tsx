"use client";
import { Alert, Box, Button, Grid, Text, Textarea } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import toast from "react-simple-toasts";
import { useRouter } from "next/navigation";
import "react-simple-toasts/dist/theme/dark.css";
import { isModalProfile } from "../val/isModalProfile";
import { funUpdProfile } from "../fun/upd_profile";

export default function ModalProfile({ data }: { data: any }) {
  const router = useRouter();
  const [openProfile, setOpenProfile] = useAtom(isModalProfile);

  async function editProfile() {
    const res = await funUpdProfile({ data: data })
    toast(res.message, { theme: "dark" });
    setOpenProfile(false);
  }
  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO EDIT PROFILE?
          </Text>
          <Grid>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="gray.7"
                fullWidth
                onClick={() => setOpenProfile(false)}
              >
                NO
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="gray.7"
                fullWidth
                onClick={() => { editProfile() }}
              >
                YES
              </Button>
            </Grid.Col>
          </Grid>
        </Alert>
      </Box>
    </>
  );
}
