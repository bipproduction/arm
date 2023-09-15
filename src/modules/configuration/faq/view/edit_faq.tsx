"use client";
import { ButtonBack, COLOR } from "@/modules/_global";
import { Box, Button, Modal, Stack, Text, TextInput } from "@mantine/core";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { isModalFAQ } from "../val/isModalCreateFaq";
import { ModalKonfirmasiEditFaq } from "../components/modal_konfirmasi_edit_faq";
import { useFocusTrap } from "@mantine/hooks";

export default function EditFaq({ data }: { data: any }) {
  const [listData, setListData] = useState(data);
  const [valOpenModal, setOpenModal] = useAtom(isModalFAQ);
  const focusTrapRef = useFocusTrap();
  function validasiFaq() {
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
          ref={focusTrapRef}
        >
          <Stack>
            <Text>Edit FAQ</Text>
            <TextInput
              placeholder="Question"
              value={listData.question}
              onChange={(val) =>
                setListData({
                  ...listData,
                  question: val.target.value,
                })
              }
            />
            <TextInput
              placeholder="Answer"
              value={listData.answer}
              onChange={(val) =>
                setListData({
                  ...listData,
                  answer: val.target.value,
                })
              }
            />
            <Button
              color="gray.7"
              onClick={validasiFaq}
            >
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
        <ModalKonfirmasiEditFaq data={listData} />
      </Modal>

    </>
  );
}
