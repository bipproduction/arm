import { useAtom } from "jotai";
import React from "react";
import { isModalEditAssetsCondition } from "../val/isModalAssetsCondition";
import { useRouter } from "next/navigation";
import { funUpdateAssetsCondition } from "../fun/assets_condition_update";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import { Alert, Box, Button, Grid, Text } from "@mantine/core";

export default function ModalKonfirmasiEditAssetsCondition({data}: {data: any}) {
  const [valOpenModal, setOpenModal] =useAtom(isModalEditAssetsCondition)
  const router = useRouter()

  async function  updAssetsCondition() {
    const create = await funUpdateAssetsCondition(data)
    if (!create.success) return toast(create.message, {theme: "dark"})
    toast("Success", {theme: "dark"})
    router.push("/dashboard/configuration/assets-condition");
    setOpenModal(false);
    
  }

  return (
    <>
     <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO EDIT THIS ASSET CONDITION?
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
                onClick={updAssetsCondition}
              >
                YES
              </Button>
            </Grid.Col>
          </Grid>
        </Alert>
      </Box>
    </>
  )
}
