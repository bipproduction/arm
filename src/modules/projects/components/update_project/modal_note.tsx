"use client";
import {
  Alert,
  Box,
  Button,
  Center,
  Grid,
  Group,
  Text,
  Textarea,
} from "@mantine/core";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";
import { isModalUpdateDraft } from "../../val/isModalUpdateDraft";
import toast from "react-simple-toasts";

function ModalNote() {
  const router = useRouter();
  const [openUPdateDraft, setOpenUpdateDraft] = useAtom(isModalUpdateDraft)
  function updateDraft() {
    toast("Success", {theme: "dark"})
    router.push("/dashboard/project/444")
    setOpenUpdateDraft(false)
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO UPDATE STATUS THIS DRAFT?
          </Text>
          <Textarea mb={20} placeholder="NOTE" />
          <Grid>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="gray.7"
                fullWidth
                onClick={() => setOpenUpdateDraft(false)}
              >
                NO
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="gray.7"
                fullWidth
                onClick={updateDraft}
              >
                YES
              </Button>
            </Grid.Col>
          </Grid>
        </Alert>
      </Box>
    </>
  );
}

export default ModalNote;
