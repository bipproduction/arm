"use client";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { isModalCreateAssetsCategory } from "../val/isModalAssetsCategory";
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
import "react-simple-toasts/dist/theme/dark.css";
import { useFocusTrap } from "@mantine/hooks";
import { funCreateAssetsCategory } from "../fun/assets_category_create";
import { ModalKonfirmasiAddAssetsCategory } from "../components/modal_konfirmasi_add_assets_category";

export default function CreateAssetsCategory() {
  const focusTrapRef = useFocusTrap();
  const [valOpenAssets, setOpenAssets] = useAtom(isModalCreateAssetsCategory);
  const [dataAssetsCategory, setDataAssetsCategory] = useState({
    name: "",
  });

  function validasiCreateAssets() {
    if (Object.values(dataAssetsCategory).includes(""))
      return toast("The form cannot be empty", { theme: "dark" });
    setOpenAssets(true);
  }

  return (
    <>
      <Stack>
        <ButtonBack />
      </Stack>
      <Grid>
        <Grid.Col md={6} xl={6} lg={6} sm={10}>
          <Box pt={20} ref={focusTrapRef}>
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
                  value={dataAssetsCategory.name}
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
        </Grid.Col>
      </Grid>
      <Modal
        size={"md"}
        opened={valOpenAssets}
        onClose={() => setOpenAssets(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalKonfirmasiAddAssetsCategory data={dataAssetsCategory} onSuccess={() => {
          setDataAssetsCategory({ name: '' })
        }} />
      </Modal>

    </>
  );
}
