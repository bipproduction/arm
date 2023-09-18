"use client";
import { ButtonBack, COLOR } from "@/modules/_global";
import {
  Alert,
  Box,
  Button,
  FocusTrap,
  Grid,
  Modal,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import _ from "lodash";
import toasts from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import { useAtom } from "jotai";
import { isModalFAQ } from "../val/isModalCreateFaq";
import { useFocusTrap } from "@mantine/hooks";
import { ModalKonfirmasiAddFaq } from "../components/modal_konfirmasi_add_faq";

export default function CreateFaq() {
  const [valOpenCreateFaq, setOpenCreateFaq] = useAtom(isModalFAQ);
  const [dataFaq, setDataFaq] = useState({
    question: "",
    answer: "",
  });
  const focusTrapRef = useFocusTrap();

  function validasiCreate() {
    if (Object.values(dataFaq).includes(""))
      return toasts("The form cannot be empty", { theme: "dark" });
    setOpenCreateFaq(true);
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
                <Text>Create FAQ</Text>
                <TextInput
                  placeholder="Question"
                  value={dataFaq.question}
                  onChange={(val) =>
                    setDataFaq({
                      ...dataFaq,
                      question: val.target.value,
                    })
                  }
                />
                <TextInput
                  placeholder="Answer"
                  value={dataFaq.answer}
                  onChange={(val) =>
                    setDataFaq({
                      ...dataFaq,
                      answer: val.target.value,
                    })
                  }
                />
                <Button color="gray.7" onClick={validasiCreate}>
                  SUBMIT
                </Button>
              </Stack>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
      <Modal
        size={"md"}
        opened={valOpenCreateFaq}
        onClose={() => setOpenCreateFaq(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalKonfirmasiAddFaq data={dataFaq} onSuccess={(val) => setDataFaq({ question: '', answer: '' })} />
      </Modal>
    </>
  );
}
