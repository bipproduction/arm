"use client";
import { ButtonBack, COLOR } from "@/modules/_global";
import { Box, Button, Grid, Modal, Stack, Text, TextInput } from "@mantine/core";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { isModalFAQ } from "../val/isModalCreateFaq";
import { ModalKonfirmasiEditFaq } from "../components/modal_konfirmasi_edit_faq";
import { useFocusTrap } from "@mantine/hooks";
import toast from "react-simple-toasts";

export default function EditFaq({ data }: { data: any }) {
  const [listData, setListData] = useState(data);
  const [valOpenModal, setOpenModal] = useAtom(isModalFAQ);
  const focusTrapRef = useFocusTrap();
  function validasiFaq() {
    if (Object.values(listData).includes(""))
      return toast("The form cannot be empty", { theme: "dark" });
    setOpenModal(true);
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
        <ModalKonfirmasiEditFaq data={listData} />
      </Modal>

    </>
  );
}
