import { Alert, Box, Button, Grid, Text } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import { isModalEditAssetsLocation } from "../val/isModalAssetsLocation";
import { useRouter } from "next/navigation";
import { funUpdateAssetsLocation } from "../fun/assets-location_update";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";

export default function ModalKonfirmasiEditAssetsLocation({
  data,
}: {
  data: any;
}) {
  const [valOpenModal, setOpenModal] = useAtom(isModalEditAssetsLocation);
  const router = useRouter();

  async function updAssetsLocation() {
    const create = await funUpdateAssetsLocation(data);
    if (!create.success) return toast(create.message, { theme: "dark" });
    toast("Success", { theme: "dark" });
    router.push("/dashboard/configuration/assets-location");
    setOpenModal(false);
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO EDIT THIS ASSET LOCATION?
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
