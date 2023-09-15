import { useAtom } from "jotai";
import React from "react";
import { isModalEditOutletLocation } from "../val/idModalOutletLocation";
import { useRouter } from "next/navigation";
import { funUpdateOutletLocation } from "../fun/outlet_location_update";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import { Alert, Box, Button, Grid, Text } from "@mantine/core";

export default function ModalKonfirmasiEditOutletLocation({
  data,
}: {
  data: any;
}) {
  const [valOpenModal, setOpenModal] = useAtom(isModalEditOutletLocation);
  const router = useRouter();

  async function updOutletLocation() {
    const create = await funUpdateOutletLocation(data);
    if (!create.message) return toast(create.message, { theme: "dark" });
    toast("Success", { theme: "dark" });
    router.push("/dashboard/configuration/outlet-location");
    setOpenModal(false);
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO EDIT THIS OUTLET LOCATION?
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
                onClick={updOutletLocation}
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
