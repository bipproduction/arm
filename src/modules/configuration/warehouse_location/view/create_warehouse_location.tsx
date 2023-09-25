"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
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
import { isModalCreateWarehouseLocation } from "../val/isModalWarehouseLocation";
import { funCreateWarehouseLocation } from "../fun/warehouse_location_create";
import ModalKonfirmasiCreateWarehouseLocation from "../components/modal_konfirmasi_create_warehouse_location";

export default function CreateWarehouseLocation() {
  const router = useRouter();
  const [valOpenAssets, setOpenAssets] = useAtom(isModalCreateWarehouseLocation);
  const [loading, setLoading] = useState(false);
  const [dataAssetsLoocation, setDataAssetsLocation] = useState({
    name: "",
  });


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
        <Grid>
          <Grid.Col md={6} xl={6} lg={6} sm={10}>
            <Box
              sx={{
                border: `1px solid ${COLOR.AbuMuda}`,
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Stack>
                <Text>Create Warehouse Location</Text>
                <TextInput
                  placeholder="Name"
                  value={dataAssetsLoocation.name}
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
          </Grid.Col>
        </Grid>
      </Box>
      <Modal
        size={"md"}
        opened={valOpenAssets}
        onClose={() => setOpenAssets(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalKonfirmasiCreateWarehouseLocation data={dataAssetsLoocation} onSuccess={(val) => { setDataAssetsLocation({ name: "" }) }} />
        {/* <Box>
          <Alert color="gray" variant="outline">
            <Text fw={700} ta={"center"} mb={20} mt={20}>
              ARE YOU SURE TO CREATE WAREHOUSE LOCATION?
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
        </Box> */}
      </Modal>
    </>
  );
}
