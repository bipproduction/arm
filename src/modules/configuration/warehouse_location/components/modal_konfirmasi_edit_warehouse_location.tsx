import { Alert, Box, Button, Grid, Text } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import { funUpdateWarehouseLocation } from "../fun/warehouse-location_update";
import { isModalWarehouseLocation } from "../val/isModalWarehouseLocation";

export default function ModalKonfirmasiEditWarehouseLocation({ data, }: { data: any; }) {
  const [valOpenModal, setOpenModal] = useAtom(isModalWarehouseLocation);
  const router = useRouter();

  async function updAssetsLocation() {
    const create = await funUpdateWarehouseLocation(data);
    if (!create.success) return toast(create.message, { theme: "dark" });
    toast("Success", { theme: "dark" });
    setOpenModal(false);
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO EDIT THIS WAREHOUSE LOCATION?
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
                onClick={updAssetsLocation}
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
