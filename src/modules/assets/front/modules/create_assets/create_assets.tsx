"use client";
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import {
  Box,
  Button,
  FileButton,
  Grid,
  Group,
  List,
  Modal,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ModalCreateAdd from "./modal_create_add";
import { isModalAssetsView } from "../val/idModalAssets";

export function CreateAssets() {
  const [files, setFiles] = useState<File[]>([]);
  const [valOpenCreateAdd, setOpenCreateAdd] = useAtom(isModalAssetsView);
  return (
    <>
      <Stack>
        <ButtonBack />
        <PageSubTitle text="ADD ASSETS" />
      </Stack>
      <Box pt={20}>
        <Box
          sx={{
            backgroundColor: COLOR.AbuMuda,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Stack>
            <TextInput placeholder="NAME ASSETS" />
            <TextInput placeholder="QUANTITY" />
            <TextInput placeholder="TYPE ASSETS" />
            <TextInput placeholder="LLOCATION" />
            <TextInput placeholder="CONDITION" />
            <Grid>
              <Grid.Col md={6} lg={6}>
                <Box>
                  <DateInput placeholder="DATE OF ENTRY" />
                </Box>
              </Grid.Col>
              <Grid.Col md={6} lg={6}>
                <Box>
                  <Group position="center">
                    <FileButton
                      onChange={setFiles}
                      accept="image/png,image/jpeg"
                      multiple
                    >
                      {(props) => (
                        <Button {...props} fullWidth color="gray.7">
                          UPLOAD IMAGE
                        </Button>
                      )}
                    </FileButton>
                  </Group>

                  {files.length > 0 && (
                    <Text size="sm" mt="sm">
                      Picked files:
                    </Text>
                  )}

                  <List size="sm" mt={5} withPadding>
                    {files.map((file, index) => (
                      <List.Item key={index}>{file.name}</List.Item>
                    ))}
                  </List>
                </Box>
              </Grid.Col>
            </Grid>
          </Stack>
          <Grid pt={20}>
            <Grid.Col md={3} sm={12}>
              <Button
                fullWidth
                color="gray.7"
                onClick={() => setOpenCreateAdd(true)}
              >
                SUBMIT
              </Button>
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
      <Modal
        size={"md"}
        opened={valOpenCreateAdd}
        onClose={() => setOpenCreateAdd(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalCreateAdd />
      </Modal>
    </>
  );
}

export default CreateAssets;
