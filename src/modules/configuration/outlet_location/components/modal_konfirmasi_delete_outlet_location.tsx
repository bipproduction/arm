import { Alert, Box, Button, Grid, Text } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import { isModalOutletLocation } from "../val/idModalOutletLocation";
import { useRouter } from "next/navigation";
import { funDeleteOutletLocation } from "../fun/outlet_location_delete";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";

export default function ModalKonfirmasiDeleteOutletLocation(id: any) {
  const [valOpenModal, setOpenModal] = useAtom(isModalOutletLocation);
  const router = useRouter();

  async function deleteOutletLocation() {
    const edit = await funDeleteOutletLocation(id);
    if (!edit.success) return toast(edit.message, { theme: "dark" });
    toast("Success", { theme: "dark" });
    setOpenModal(false);
    router.refresh();
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO DELETE THIS OUTLET LOCATION?
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
                onClick={deleteOutletLocation}
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
