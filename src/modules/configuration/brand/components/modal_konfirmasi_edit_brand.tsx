"use client";
import { useAtom } from "jotai";
import React from "react";
import { isModalEditBrand } from "../val/isModalBrand";
import { funUpdateBrand } from "../fun/brand_update";
import toast from "react-simple-toasts";
import { Alert, Box, Button, Grid, Text } from "@mantine/core";
import { funUserLog } from "@/modules/_global";

export default function ModalKonfirmasiEditBrand({ data }: { data: any }) {
  const [valOpenModal, setOpenModal] = useAtom(isModalEditBrand);

  async function updateBrand() {
    const edit = await funUpdateBrand({ data: data });
    if (!edit.success) return toast(edit.message, { theme: "dark" });
    await funUserLog({activity: "EDIT", desc: "User Edit Brand"})
    toast("Success", { theme: "dark" });
    setOpenModal(false);
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO EDIT THIS BRAND?
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
                onClick={updateBrand}
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
