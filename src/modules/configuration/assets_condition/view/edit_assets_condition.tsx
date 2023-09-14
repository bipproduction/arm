"use client";
import { ButtonBack, COLOR } from "@/modules/_global";
import { Box, Button, Modal, Stack, Text, TextInput } from "@mantine/core";
import { useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { isModalEditAssetsCondition } from "../val/isModalAssetsCondition";
import ModalKonfirmasiEditAssetsCondition from "../components/modal_konfirmasi_edit_assets_condition";

export default function EditAssetsCondition({ data }: { data: any }) {
  const focusTrapRef = useFocusTrap();
  const [valOpenModal, setOpenModal] = useAtom(isModalEditAssetsCondition);
  const [formEdit, setFormEdit] = useState(data);

  function validasiEdit() {
    setOpenModal(true);
  }

  return (
    <>
      {JSON.stringify(formEdit)}
      <Stack>
        <ButtonBack />
      </Stack>
      <Box pt={20} ref={focusTrapRef}>
        <Box
          sx={{
            border: `1px solid ${COLOR.AbuMuda}`,
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Stack>
            <Text>Edit Assets Condition</Text>
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
      </Box>
      <Modal
        size={"md"}
        opened={valOpenModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalKonfirmasiEditAssetsCondition data={formEdit} />
      </Modal>
    </>
  );
}
