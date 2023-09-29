"use client";
import { useAtom } from "jotai";
import React from "react";
import { isModalAssetsCondition } from "../val/isModalAssetsCondition";
import { useRouter } from "next/navigation";
import { funDeleteAssetsCondition } from "../fun/assets_condition_delete";
import toast from "react-simple-toasts";
import { Alert, Box, Button, Grid, Text } from "@mantine/core";
import { funUserLog } from "@/modules/_global";

export default function ModalKonfirmasiDeleteAssetsCondition({ id, onSuccess }: { id: any, onSuccess: (val: any) => void }) {
  const [valOpenModal, setOpenModal] = useAtom(isModalAssetsCondition);
  const router = useRouter();

  async function deleteAssetsCondition() {
    const del = await funDeleteAssetsCondition({ id: id });
    if (!del.success) return toast(del.message, { theme: "dark" });
    await funUserLog({activity: "DELETE", desc: "User Delete Assets Condition"})
    toast("Success", { theme: "dark" });
    setOpenModal(false);
    onSuccess(del.dataDel)
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO DELETE THIS ASSET CONDITION?
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
                onClick={deleteAssetsCondition}
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
