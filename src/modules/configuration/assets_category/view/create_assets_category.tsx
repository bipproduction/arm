"use client";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { isModalCreateAssetsCategory } from "../val/isModalAssetsCategory";
import { funCreateAssetsCategory } from "../fun/assets_category_create";
import toast from "react-simple-toasts";
import { Alert, Box, Button, Grid, Modal, Stack, Text, TextInput } from "@mantine/core";
import { ButtonBack, COLOR } from "@/modules/_global";
import "react-simple-toasts/dist/theme/dark.css";

export default function CreateAssetsCategory() {
  const router = useRouter();
  const [valOpenAssets, setOpenAssets] = useAtom(isModalCreateAssetsCategory);
  const [loading, setLoading] = useState(false);
  const [dataAssetsCategory, setDataAssetsCategory] = useState({
    name: "",
  });

  async function onAssetscategory() {
    setLoading(true);
    const res = await funCreateAssetsCategory({ data: dataAssetsCategory });
    if (!res.success) return setLoading(false), toast(res.message, {theme: "dark"});
    router.push("/dashboard/configuration/assets-category");
    setOpenAssets(false);
  }

  function validasiCreateAssets() {
    if (Object.values(dataAssetsCategory).includes(""))
    return  toast("The form cannor be empty", {theme: "dark"})
  setOpenAssets(true)
  }

  return (
    <>
      <Stack>
        <ButtonBack />
      </Stack>
      <Box pt={20}>
        <Box
          sx={{
            border: `1px solid ${COLOR.AbuMuda}`,
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Stack>
            <Text>Create Assets Category</Text>
            <TextInput
              placeholder="Name"
              onChange={(val) =>
                setDataAssetsCategory({
                  ...dataAssetsCategory,
                  name: val.target.value,
                })
              }
            />
            <Button color="gray.7" onClick={validasiCreateAssets}>
              SUBMIT
            </Button>
          </Stack>
        </Box>
      </Box>
      <Modal
        size={"md"}
        opened={valOpenAssets}
        onClose={() => setOpenAssets(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <Box>
          <Alert color="gray" variant="outline">
            <Text fw={700} ta={"center"} mb={20} mt={20}>
              ARE YOU SURE TO CREATE ASSETS CATEGORY?
            </Text>
            <Grid>
              <Grid.Col span={6}>
                <Button
                  radius={10}
                  color="gray.7"
                  fullWidth
                  onClick={() => setOpenAssets(false)}
                >
                  NO
                </Button>
              </Grid.Col>
              <Grid.Col span={6}>
                <Button
                  radius={10}
                  color="gray.7"
                  fullWidth
                  onClick={onAssetscategory}
                >
                  YES
                </Button>
              </Grid.Col>
            </Grid>
          </Alert>
        </Box>
      </Modal>
    </>
  );
}
