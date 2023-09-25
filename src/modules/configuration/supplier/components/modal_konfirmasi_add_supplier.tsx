import { useAtom } from "jotai";
import React from "react";
import { isModalCreateSupplier } from "../val/isModalSupplier";
import { funCreateSupplier } from "../fun/supplier_create";
import toast from "react-simple-toasts";
import { Alert, Box, Button, Grid, Text } from "@mantine/core";

export default function ModalKonfirmasiAddSupplier({
  data,
  onSuccess,
}: {
  data: any;
  onSuccess: (val: any) => void;
}) {
  const [valOpenModal, setOpenModal] = useAtom(isModalCreateSupplier);
  async function onSupplier() {
    const res = await funCreateSupplier({ data: data });
    if (!res.sussess) return toast(res.message, { theme: "dark" });
    toast("Success", { theme: "dark" });
    onSuccess(true);
    setOpenModal(false);
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO CREATE BRAND?
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
              <Button radius={10} color="gray.7" fullWidth onClick={onSupplier}>
                YES
              </Button>
            </Grid.Col>
          </Grid>
        </Alert>
      </Box>
    </>
  );
}
