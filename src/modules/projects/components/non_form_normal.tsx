"use client";
import { COLOR } from "@/modules/_global";
import {
  Box,
  Button,
  Divider,
  Grid,
  Group,
  Modal,
  Text,
  Textarea,
  createStyles,
  rem,
} from "@mantine/core";
import { useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";
import { isModalFormNonFormal } from "../val/idModalFormNonFormal";
import ModalFormNonFormal from "./modal_form_non_formal";

function NonFormNormal() {
  const router = useRouter();
  const [valOpenNonFormal, setOpenNonFormal] = useAtom(isModalFormNonFormal);
  return (
    <>
      <Box pt={20}>
        <Box
          sx={{
            backgroundColor: COLOR.AbuMuda,
            padding: 15,
            borderRadius: 5,
          }}
        >
          <Box>
            <Divider
              my="xs"
              label={
                <Text fw={700} fz={14} color="dark.9">
                  PROJECT
                </Text>
              }
              size="md"
              color="dark"
            />
            <div>
              <Textarea variant="filled" size="xl" />
            </div>
          </Box>
        </Box>
      </Box>

      <Grid pt={20}>
        <Grid.Col md={3} sm={12}>
          <Button
            fullWidth
            radius={10}
            color="gray.7"
            onClick={() => setOpenNonFormal(true)}
          >
            SUBMIT
          </Button>
        </Grid.Col>
      </Grid>
      <Modal
        size={"md"}
        opened={valOpenNonFormal}
        onClose={() => setOpenNonFormal(false)}
        withCloseButton={false}
        closeOnClickOutside={false}
        centered
      >
        <ModalFormNonFormal />
      </Modal>
    </>
  );
}

export default NonFormNormal;
