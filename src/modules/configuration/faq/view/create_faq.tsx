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
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import _ from "lodash";
import toasts from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import { funFaqCreate } from "../fun/faq_create";
import { useAtom } from "jotai";
import { isModalFAQ } from "../val/isModalCreateFaq";
import { useFocusTrap } from "@mantine/hooks";
import { ModalKonfirmasiAddFaq } from "../components/modal_konfirmasi_add_faq";
import toast from "react-simple-toasts";

export default function CreateFaq() {
  const router = useRouter();
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
              onChange={(val) =>
                setDataFaq({
                  ...dataFaq,
                  question: val.target.value,
                })
              }
            />
            <TextInput
              placeholder="Answer"
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
      </Box>
      <Modal
        size={"md"}
        opened={valOpenCreateFaq}
        onClose={() => setOpenCreateFaq(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalKonfirmasiAddFaq data={dataFaq} />
      </Modal>
    </>
  );
}
