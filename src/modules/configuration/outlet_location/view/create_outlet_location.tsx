"use client";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { isModalCreateOutletLocation } from "../val/idModalOutletLocation";
import { funCreateOutletLocation } from "..";
import toast from "react-simple-toasts";
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

export default function CreateOutletLocation() {
  const router = useRouter();
  const [valOpenModal, setOpenModal] = useAtom(isModalCreateOutletLocation);
  const [loading, setLoading] = useState(false);
  const [dataOutletLocation, setDataOutletLocation] = useState({
    name: "",
  });

  async function onOutletLocation() {
    setLoading(true);
    const res = await funCreateOutletLocation({ data: dataOutletLocation });
    if (!res.success)
      return setLoading(false), toast(res.message, { theme: "dark" });
    toast("Success", { theme: "dark" });
    router.push("/dashboard/configuration/outlet-location");
    setOpenModal(false);
  }

  function validasiOutletLocation() {
    if (Object.values(dataOutletLocation).includes(""))
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
            <Text>Create Outlet Location</Text>
            <TextInput
              placeholder="Name"
              onChange={(val) =>
                setDataOutletLocation({
                  ...dataOutletLocation,
                  name: val.target.value,
                })
              }
            />
            <Button color="gray.7" onClick={validasiOutletLocation}>
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
              ARE YOU SURE TO CREATE OUTLET LOCATION?
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
                  onClick={onOutletLocation}
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
