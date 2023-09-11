import { Alert, Box, Button, Grid, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";
import { isModalAssetsView } from "../val/idModalAssets";
import { useAtom } from "jotai";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
function ModalCreateAdd() {
  const [openCreateAdd, setOpenCreateAdd] = useAtom(isModalAssetsView);
  const router = useRouter();
  function createAdd() {
    toast("Success", { theme: "dark" });
    router.push(`/dashboard/assets`);
    setOpenCreateAdd(false);
  }
  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE USING THIS TEMPLATE?
          </Text>
          <Grid>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="gray.7"
                fullWidth
                onClick={() => setOpenCreateAdd(false)}
              >
                NO
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button radius={10} color="gray.7" fullWidth onClick={createAdd}>
                YES
              </Button>
            </Grid.Col>
          </Grid>
        </Alert>
      </Box>
    </>
  );
}

export default ModalCreateAdd;
