"use client";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { isModalCreateAssetsCondition } from "../val/isModalAssetsCondition";
import "react-simple-toasts/dist/theme/dark.css";
import toast from "react-simple-toasts";
import { Box, Button, Grid, Modal, Stack, Text, TextInput } from "@mantine/core";
import { ButtonBack, COLOR } from "@/modules/_global";
import ModalKonfirmasiAddAssetsCondition from "../components/modal_konfirmasi_add_assets_condition";
import { useFocusTrap } from "@mantine/hooks";

export default function CreateAssetsCondition() {
  const focusTrapRef = useFocusTrap();
  const [valOpenModal, setOpenModal] = useAtom(isModalCreateAssetsCondition);
  const [dataAssetCondition, setDataAssetsCondition] = useState({
    name: "",
  });

  function validasiCreateAssets() {
    if (Object.values(dataAssetCondition).includes(""))
      return toast("The form cannot be empty", { theme: "dark" });
    setOpenModal(true);
  }

  return (
    <>
      <Stack>
        <ButtonBack />
      </Stack>
      <Box pt={20} ref={focusTrapRef}>
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
                <Text>Create Assets Condition</Text>
                <TextInput
                  value={dataAssetCondition.name}
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
          </Grid.Col>
        </Grid>
      </Box>
      <Modal
        size={"md"}
        opened={valOpenModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalKonfirmasiAddAssetsCondition data={dataAssetCondition} onSuccess={() => setDataAssetsCondition({ name: '' })} />
      </Modal>
    </>
  );
}
