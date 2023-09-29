"use client";
import { useAtom } from "jotai";
import React from "react";

import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";
import { Alert, Box, Button, Grid, Text } from "@mantine/core";
import "react-simple-toasts/dist/theme/dark.css";
import { isLogout } from "../val/isLogout";
import { funLogout, funUserLog } from "@/modules/_global";

export default function ModalLogout() {
  const [openLogout, setOpenLogout] = useAtom(isLogout);
  const router = useRouter();

  async function logoutYes() {
    await funUserLog({ activity: "LOGOUT", desc: "USER LOGOUT" });
    await funLogout();
    toast("Logout Success", { theme: "dark" });
    // router.push("/");
    setOpenLogout(false);
  }
  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO LOGOUT?
          </Text>
          <Grid>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="gray.7"
                fullWidth
                onClick={() => setOpenLogout(false)}
              >
                NO
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button radius={10} color="gray.7" fullWidth onClick={logoutYes}>
                YES
              </Button>
            </Grid.Col>
          </Grid>
        </Alert>
      </Box>
    </>
  );
}
