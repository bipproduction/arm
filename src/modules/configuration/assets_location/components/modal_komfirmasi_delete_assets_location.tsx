"use client";
import { useAtom } from "jotai";
import React from "react";
import { isModalAssetsLocation } from "../val/isModalAssetsLocation";
import { useRouter } from "next/navigation";
import { funDeleteAssetsLocation } from "../fun/assets_location_delete";
import toast from "react-simple-toasts";
import { Alert, Box, Button, Grid, Text } from "@mantine/core";

export default function ModalKomfirmasiDeleteAssetsLocation(id: any) {
  const [valOpenModal, setOpenModal] = useAtom(isModalAssetsLocation);
  const router = useRouter();

  async function deleteAssetsLocation() {
    const edit = await funDeleteAssetsLocation(id);
    if (!edit.success) return toast(edit.message, { theme: "dark" });
    toast("Success", { theme: "dark" });
    setOpenModal(false);
    router.refresh();
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO DELETE THIS ASSET LOCATION?
          </Text>
          <Grid>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="gray.7"
                fullWidth
                onClick={() => setOpenModal(false)}
              >
                NO
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="gray.7"
                fullWidth
                onClick={deleteAssetsLocation}
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
