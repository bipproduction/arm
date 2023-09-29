"use client";
import { atom, useAtom } from "jotai";
import React from "react";
import { isModalBrand } from "../val/isModalBrand";
import { funDeleteBrand } from "../fun/brand_delete";
import toast from "react-simple-toasts";
import { Alert, Box, Button, Grid, Text } from "@mantine/core";
import { funUserLog } from "@/modules/_global";

export default function ModalKonfirmasiDeleteBrand({
  id,
  onSuccess,
}: {
  id: any;
  onSuccess: (val: any) => void;
}) {
  const [valOpenModal, setOpenModal] = useAtom(isModalBrand);

  async function deleteBrand() {
    const del = await funDeleteBrand({ id: id });
    if (!del.success) return toast(del.message, { theme: "dark" });
    await funUserLog({activity: "DELETE", desc: "User Delete Brand"})
    toast("Success", { theme: "dark" });
    setOpenModal(false);
    onSuccess(del.dataDel);
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO DELETE THIS BRAND?
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
                onClick={deleteBrand}
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
