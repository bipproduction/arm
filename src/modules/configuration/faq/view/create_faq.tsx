"use client";
import { ButtonBack, COLOR } from "@/modules/_global";
import {
  Alert,
  Box,
  Button,
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
import { isModalCreateFaq } from "../val/isModalCreateFaq";

export default function CreateFaq() {
  const router = useRouter();
  const [valOpenCreateFaq, setOpenCreateFaq] = useAtom(isModalCreateFaq);
  const [loading, setLoading] = useState(false);
  const [dataFaq, setDataFaq] = useState({
    question: "",
    answer: "",
  });

  async function onFaq() {
    setLoading(true)

    const faqdata = await funFaqCreate({ data: dataFaq });
    if (!faqdata.success) return setLoading(false), toasts(faqdata.message);
    toasts("success");
    router.push("/dashboard/configuration/faq");
    setOpenCreateFaq(false);
  }

  function validasiCreate() {
    if (Object.values(dataFaq).includes(""))
      return toasts("The form cannor be empty", { theme: "dark" });
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
        <Box>
          <Alert color="gray" variant="outline">
            <Text fw={700} ta={"center"} mb={20} mt={20}>
              ARE YOU SURE TO CREATE FAQ?
            </Text>
            <Grid>
              <Grid.Col span={6}>
                <Button
                  radius={10}
                  color="gray.7"
                  fullWidth
                  onClick={() => setOpenCreateFaq(false)}
                >
                  NO
                </Button>
              </Grid.Col>
              <Grid.Col span={6}>
                <Button radius={10} color="gray.7" fullWidth onClick={onFaq}>
                  YES
                </Button>
              </Grid.Col>
            </Grid>
          </Alert>
        </Box>
      </Modal>
    </>
  );
}
