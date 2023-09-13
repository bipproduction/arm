"use client";
import { useAtom } from "jotai";
import React from "react";
import { isModalAssetsCategory } from "../val/isModalAssetsCategory";
import { useRouter } from "next/navigation";
import { funDeleteAssetscategory } from "../fun/assets_category_delete";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import { Alert, Box, Button, Grid, Text } from "@mantine/core";

export default function ModalKonfirmasiDelAssetsCategory(id: any) {
  const [valOpenModal, setOpenModal] = useAtom(isModalAssetsCategory);
  const router = useRouter();

  async function deleteAssetsCategory() {
    const edit = await funDeleteAssetscategory(id);
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
