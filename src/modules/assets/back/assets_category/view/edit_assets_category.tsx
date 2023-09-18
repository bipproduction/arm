"use client";
import { useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { isModalEditAssetsCategory } from "../val/isModalAssetsCategory";
import { Box, Button, Grid, Modal, Stack, Text, TextInput } from "@mantine/core";
import { ButtonBack, COLOR } from "@/modules/_global";
import ModalKonfirmasiEditAssetsCategory from "../components/modal_konfirmasi_edit_assets_category";

export default function EditAssetsCategory({ data }: { data: any }) {
  const focusTrapRef = useFocusTrap();
  const [valOpenModal, setOpenModal] = useAtom(isModalEditAssetsCategory);
  const [formEdit, setFormEdit] = useState(data);

  function validasiEditCategory() {
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
                <Text>Edit Assets Category</Text>
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
                <Button color="gray.7" onClick={validasiEditCategory}>
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
        <ModalKonfirmasiEditAssetsCategory data={formEdit} />
      </Modal>
    </>
  );
}
