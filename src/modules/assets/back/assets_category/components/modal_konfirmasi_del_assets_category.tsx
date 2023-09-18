"use client";
import { useAtom } from "jotai";
import React from "react";
import { isModalAssetsCategory } from "../val/isModalAssetsCategory";
import { useRouter } from "next/navigation";
import { funDeleteAssetscategory } from "../fun/assets_category_delete";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import { Alert, Box, Button, Grid, Text } from "@mantine/core";

export default function ModalKonfirmasiDelAssetsCategory({ id, onSuccess }: { id: any, onSuccess: (val: any) => void }) {
  const [valOpenModal, setOpenModal] = useAtom(isModalAssetsCategory);
  const router = useRouter();

  async function deleteAssetsCategory() {
    const del = await funDeleteAssetscategory({ id: id });
    if (!del.success) return toast(del.message, { theme: "dark" });
    toast("Success", { theme: "dark" });
    onSuccess(del.dataDel)
    setOpenModal(false)
  }
  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO DELETE THIS ASSET CATEGORY?
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
                onClick={deleteAssetsCategory}
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
