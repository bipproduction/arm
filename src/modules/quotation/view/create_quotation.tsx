"use client";
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import {
  Alert,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Group,
  Modal,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useRouter } from "next/navigation";
import React from "react";
import ModalQuotationView from "./modal_quotation";

const val_quotation = atomWithStorage("val_quotation", false);

export function CreateQuotation({ id }: { id: string }) {
  const focusTrapRef = useFocusTrap();
  const router = useRouter();
  const [openQuotation, setOpenQuotation] = useAtom(val_quotation);
  return (
    <>
      <Stack>
        <ButtonBack />
        <PageSubTitle text="CREATE QUOTATION" />
      </Stack>
      <Box pt={20}>
        <Box
          sx={{
            backgroundColor: COLOR.AbuMuda,
            padding: 15,
            borderRadius: 5,
          }}
        >
          <Box ref={focusTrapRef}>
            <Divider
              my="xs"
              label={
                <Text fw={700} fz={14} color="dark.9">
                  QUOTATION
                </Text>
              }
              size="md"
              color="dark"
            />
            <Stack pt={10}>
              <TextInput placeholder="Form input" />
              <TextInput placeholder="Form input" />
              <TextInput placeholder="Form input" />
              <SimpleGrid
                cols={2}
                spacing="lg"
                breakpoints={[
                  { maxWidth: "sm", cols: 2, spacing: "sm" },
                  { maxWidth: "xs", cols: 1, spacing: "sm" },
                ]}
              >
                <TextInput placeholder="Form input" />
                <TextInput placeholder="Form input" />
              </SimpleGrid>
              <SimpleGrid
                cols={2}
                spacing="lg"
                breakpoints={[
                  { maxWidth: "sm", cols: 2, spacing: "sm" },
                  { maxWidth: "xs", cols: 1, spacing: "sm" },
                ]}
              >
                <TextInput placeholder="Form input" />
                <TextInput placeholder="Form input" />
              </SimpleGrid>
              <SimpleGrid
                cols={2}
                spacing="lg"
                breakpoints={[
                  { maxWidth: "sm", cols: 2, spacing: "sm" },
                  { maxWidth: "xs", cols: 1, spacing: "sm" },
                ]}
              >
                <TextInput placeholder="Form input" />
                <TextInput placeholder="Form input" />
              </SimpleGrid>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Grid pt={20} pb={60}>
        <Grid.Col md={3} sm={12}>
          <Button
            fullWidth
            radius={10}
            color="gray.7"
            onClick={() => setOpenQuotation(true)}
          >
            SUBMIT
          </Button>
        </Grid.Col>
      </Grid>
      <ModalQuotation />
    </>
  );
}
export function ModalQuotation() {
  const [openQuotation, setOpenQuotation] = useAtom(val_quotation);
  const router = useRouter();
  return (
    <>
      <Modal
        opened={openQuotation}
        onClose={() => openQuotation}
        centered
        withCloseButton={false}
      >
        <ModalQuotationView closeQuotation={() => setOpenQuotation(false)} />
      </Modal>
    </>
  );
}

export default CreateQuotation;
