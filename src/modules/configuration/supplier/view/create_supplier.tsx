"use client";
import { useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { isModalCreateSupplier } from "../val/isModalSupplier";
import toast from "react-simple-toasts";
import { Box, Button, Grid, Modal, Stack, Text, TextInput } from "@mantine/core";
import { ButtonBack, COLOR } from "@/modules/_global";
import ModalKonfirmasiAddSupplier from "../components/modal_konfirmasi_add_supplier";

export default function CreateSupplier() {
  const focusTrapRef = useFocusTrap();
  const [valOpenModal, setOpenModal] = useAtom(isModalCreateSupplier);
  const [dataSupplier, setDataSupplier] = useState({
    name: "",
  });

  function validasiCreateSupplier() {
    if (Object.values(dataSupplier).includes(""))
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
                <Text> Create Supplier</Text>
                <TextInput
                  value={dataSupplier.name}
                  placeholder="Name"
                  onChange={(val) =>
                    setDataSupplier({
                      ...dataSupplier,
                      name: val.target.value,
                    })
                  }
                />
                <Button color="gray.7" onClick={validasiCreateSupplier}>
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
        <ModalKonfirmasiAddSupplier data={dataSupplier} onSuccess={() => setDataSupplier({name: ""})}/>

      </Modal>
    </>
  );
}
