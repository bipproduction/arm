"use client";
import { useAtom } from "jotai";
import React from "react";
import { isModalSupplier } from "../val/isModalSupplier";
import { funDeleteSuplier } from "../fun/supplier_delete";
import toast from "react-simple-toasts";
import { Alert, Box, Button, Grid, Text } from "@mantine/core";

export default function ModalKonfirmasiDeleteSupplier({
  id,
  onSuccess,
}: {
  id: any;
  onSuccess: (val: any) => void;
}) {
  const [valOpenModal, setOpenModal] = useAtom(isModalSupplier);

  async function deleteSupplier() {
    const del = await funDeleteSuplier({ id: id });
    if (!del.success) return toast(del.message, { theme: "dark" });
    toast("Success", { theme: "dark" });
    setOpenModal(false);
    onSuccess(del.dataDel);
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO DELETE THIS SUPPLIER?
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
                onClick={deleteSupplier}
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
