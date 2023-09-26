"use client";
import { useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { isModalEditSupplier } from "../val/isModalSupplier";
import toast from "react-simple-toasts";
import { Box, Button, Grid, Modal, Stack, Text, TextInput } from "@mantine/core";
import { ButtonBack, COLOR } from "@/modules/_global";
import ModalKonfirmasiEditSupplier from "../components/modal_konfirmasi_edit_supplier";

export default function EditSupplier({ data }: { data: any }) {
  const focusTrapRef = useFocusTrap();
  const [valOpenModal, setOpenModal] = useAtom(isModalEditSupplier);
  const [formEdit, setFormEdit] = useState(data);

  function validasiEdit() {
    if (Object.values(formEdit).includes(""))
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
                <Text>Edit Brand</Text>
                <TextInput
                  value={formEdit.name}
                  placeholder="name"
                  onChange={(val) =>
                    setFormEdit({
                      ...formEdit,
                      name: val.target.value,
                    })
                  }
                />
                <Button color="gray.7" onClick={validasiEdit}>
                  EDIT
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
        <ModalKonfirmasiEditSupplier data={formEdit} />

      </Modal>
    </>
  );
}
