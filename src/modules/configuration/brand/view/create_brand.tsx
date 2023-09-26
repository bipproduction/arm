"use client";
import { useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { isModalCreateBrand } from "../val/isModalBrand";
import toast from "react-simple-toasts";
import {
  Box,
  Button,
  Grid,
  Modal,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { ButtonBack, COLOR } from "@/modules/_global";
import ModalKonfirmasiAddBrand from "../components/modal_konfirmasi_add_brand";

export default function CreateBrand() {
  const focusTrapRef = useFocusTrap();
  const [valOpenModal, setOpenModal] = useAtom(isModalCreateBrand);
  const [dataBrand, setDataBrand] = useState({
    name: "",
  });

  function validasiCreateBrand() {
    if (Object.values(dataBrand).includes(""))
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
                <Text> Create Brand</Text>
                <TextInput
                  value={dataBrand.name}
                  placeholder="Name"
                  onChange={(val) =>
                    setDataBrand({
                      ...dataBrand,
                      name: val.target.value,
                    })
                  }
                />
                <Button color="gray.7" onClick={validasiCreateBrand}>
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
        <ModalKonfirmasiAddBrand
          data={dataBrand}
          onSuccess={() => setDataBrand({ name: "" })}
        />
      </Modal>
    </>
  );
}
