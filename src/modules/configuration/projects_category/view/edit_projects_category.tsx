"use client";
import { useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { isModalEditProjectsCategory } from "../val/isModalCreateProjectsCategory";
import { Box, Button, Modal, Stack, Text, TextInput } from "@mantine/core";
import { ButtonBack, COLOR } from "@/modules/_global";
import ModalKonfirmasiEditProjectCategory from "../components/modal_konfirmasi_edit_project_category";

export default function EditProjectsCategory({ data }: { data: any }) {
  const focusTrapRef = useFocusTrap();
  const [valOpenModal, setOpenModal] = useAtom(isModalEditProjectsCategory);
  const [formEdit, setFormEdit] = useState(data);

  function validasiEdit() {
    setOpenModal(true);
  }
  return (
    <>
      {/* {JSON.stringify(formEdit)} */}
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
            <Text>Edit Project Cetegory</Text>
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
        <ModalKonfirmasiEditProjectCategory data={formEdit}/>
      </Modal>
    </>
  );
}
