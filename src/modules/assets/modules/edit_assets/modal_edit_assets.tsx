"use client"
import { Alert, Box, Button, Grid, Text } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import { isModalAssetsEdit } from "../val/isModalAssetsEdit";
import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";

export default function ModalEditAssets() {
  const router = useRouter();
  const [openEditAssets, setOpenEditAssets] = useAtom(isModalAssetsEdit);
  function editAssets() {
    toast("Success", { theme: "dark" });
    router.push(`/dashboard/assets`);
    setOpenEditAssets(false);
  }
  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO EDIT ASSETS?
          </Text>
          <Grid>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="gray.7"
                fullWidth
                onClick={() => setOpenEditAssets(false)}
              >
                NO
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button radius={10} color="gray.7" fullWidth onClick={editAssets}>
                YES
              </Button>
            </Grid.Col>
          </Grid>
        </Alert>
      </Box>
    </>
  );
}
