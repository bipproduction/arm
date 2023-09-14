"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { isModalCreateAssetsLocation } from "../val/isModalAssetsLocation";
import { funCreateAssetsLocation } from "../fun/assets_location_create";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import {
  Alert,
  Box,
  Button,
  Grid,
  Modal,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { ButtonBack, COLOR } from "@/modules/_global";
import { useAtom } from "jotai";

export default function CreateAssetsLocation() {
  const router = useRouter();
  const [valOpenAssets, setOpenAssets] = useAtom(isModalCreateAssetsLocation);
  const [loading, setLoading] = useState(false);
  const [dataAssetsLoocation, setDataAssetsLocation] = useState({
    name: "",
  });

  async function onAssetsLocation() {
    setLoading(true);
    const res = await funCreateAssetsLocation({ data: dataAssetsLoocation });
    if (!res.success)
      return setLoading(false), toast(res.message, { theme: "dark" });
    toast("Success", { theme: "dark" });
    router.push("/dashboard/configuration/assets-location");
    setOpenAssets(false);
  }

  function validasiCreateAssets() {
    if (Object.values(dataAssetsLoocation).includes(""))
      return toast("The form cannor be empty", { theme: "dark" });
    setOpenAssets(true);
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
            <Text>Create Assets Location</Text>
            <TextInput
              placeholder="Name"
              onChange={(val) =>
                setDataAssetsLocation({
                  ...dataAssetsLoocation,
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
              ARE YOU SURE TO CREATE ASSETS LOCATION?
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
                  onClick={onAssetsLocation}
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
