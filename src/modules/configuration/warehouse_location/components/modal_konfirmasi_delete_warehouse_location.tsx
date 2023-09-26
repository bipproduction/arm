"use client";
import { useAtom } from "jotai";
import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";
import { Alert, Box, Button, Grid, Text } from "@mantine/core";
import { funDeleteWarehouseLocation } from "../fun/warehouse_location_delete";
import { isModalWarehouseLocation } from "../val/isModalWarehouseLocation";


export default function ModalKomfirmasiDeleteWarehouseLocation({ id, onSuccess }: { id: number, onSuccess: (val: any) => void }) {
  const [valOpenModal, setOpenModal] = useAtom(isModalWarehouseLocation);
  const router = useRouter();

  async function deleteAssetsLocation() {
    const edit = await funDeleteWarehouseLocation({ id: id });
    if (!edit.success) return toast(edit.message, { theme: "dark" });
    toast("Success", { theme: "dark" });
    setOpenModal(false);
    onSuccess(edit)
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO DELETE THIS WAREHOUSE LOCATION?
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
