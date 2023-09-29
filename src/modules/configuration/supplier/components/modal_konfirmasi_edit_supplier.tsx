import { useAtom } from "jotai";
import React from "react";
import { isModalEditSupplier } from "../val/isModalSupplier";
import { funUpdateSupplier } from "../fun/supplier_update";
import toast from "react-simple-toasts";
import { Alert, Box, Button, Grid, Text } from "@mantine/core";
import { funUserLog } from "@/modules/_global";

export default function ModalKonfirmasiEditSupplier({ data }: { data: any }) {
  const [valOpenModal, setOpenModal] = useAtom(isModalEditSupplier);

  async function updateSupplier() {
    const edit = await funUpdateSupplier({ data: data });
    if (!edit.success) return toast(edit.message, { theme: "dark" });
    await funUserLog({activity: "EDIT", desc: "User Edit Supplier"})
    toast("Success", { theme: "dark" });
    setOpenModal(false);
  }
  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO EDIT THIS SUPPLIER?
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
                onClick={updateSupplier}
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
