"use client";
import { useAtom } from "jotai";
import React from "react";
import { isModalCreateBrand } from "../val/isModalBrand";
import { funCreateBrand } from "../fun/brand_create";
import toast from "react-simple-toasts";
import { Alert, Box, Button, Grid, Text } from "@mantine/core";
import { funUserLog } from "@/modules/_global";

export default function ModalKonfirmasiAddBrand({
  data,
  onSuccess,
}: {
  data: any;
  onSuccess: (val: any) => void;
}) {
  const [valOpenModal, setOpenModal] = useAtom(isModalCreateBrand);

  async function onBrand() {
    const res = await funCreateBrand({ data: data });
    if (!res.success) return toast(res.message, { theme: "dark" });
    await funUserLog({activity: "ADD", desc: "User Added Brand"})
    toast("Success", { theme: "dark" });
    onSuccess(true);
    setOpenModal(false);
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO CREATE NEW BRAND?
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
                onClick={onBrand}
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
