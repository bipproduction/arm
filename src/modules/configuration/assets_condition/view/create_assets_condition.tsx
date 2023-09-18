"use client";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { isModalCreateAssetsCondition } from "../val/isModalAssetsCondition";
import { funCreateAssetsCondition } from "../fun/assets_condition_create";
import "react-simple-toasts/dist/theme/dark.css";
import toast from "react-simple-toasts";
import { Alert, Box, Button, Grid, Modal, Stack, Text, TextInput } from "@mantine/core";
import { ButtonBack, COLOR } from "@/modules/_global";

export default function CreateAssetsCondition() {
  const router = useRouter();
  const [valOpenModal, setOpenModal] = useAtom(isModalCreateAssetsCondition);
  const [loading, setLoading] = useState(false);
  const [dataAssetCondition, setDataAssetsCondition] = useState({
    name: "",
  });

  async function onAssetsCondition() {
    setLoading(true);
    const res = await funCreateAssetsCondition({ data: dataAssetCondition });
    if (!res.success) return toast(res.message, { theme: "dark" });
    toast("Success", {theme: "dark"})
    router.push("/dashboard/configuration/assets-condition");
    setOpenModal(false);
  }

  function validasiCreateAssets() {
    if (Object.values(dataAssetCondition).includes(""))
      return toast("The form cannor be empty", { theme: "dark" });
    setOpenModal(true);
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
            <Text>Create Assets Condition</Text>
            <TextInput
              placeholder="Name"
              onChange={(val) =>
                setDataAssetsCondition({
                  ...dataAssetCondition,
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
        opened={valOpenModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <Box>
          <Alert color="gray" variant="outline">
            <Text fw={700} ta={"center"} mb={20} mt={20}>
              ARE YOU SURE TO CREATE ASSETS CONDITION?
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
                  onClick={onAssetsCondition}
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
