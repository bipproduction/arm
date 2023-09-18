"use client";
import { COLOR } from "@/modules/_global";
import {
  ActionIcon,
  Box,
  Button,
  Collapse,
  Divider,
  Grid,
  Group,
  Image,
  Modal,
  ModalBase,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useDisclosure, useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import React from "react";
import { MdOutlineNoteAlt } from "react-icons/md";
import ModalNote from "./modal_note";
import { isModalUpdateDraft } from "../../val/isModalUpdateDraft";

export default function ItemUpdateProject() {
  const focusTrapRef = useFocusTrap();
  const [opened, { toggle }] = useDisclosure(false);
  const [valOpenUpdateDraft, setOpenUpdateDraft] = useAtom(isModalUpdateDraft)
  return (
    <>
      <Box pt={20}>
        <Box
          sx={{
            backgroundColor: COLOR.AbuMuda,
            padding: 5,
            borderRadius: 5,
          }}
          px={20}
          mb={10}
          py={20}
        >
          <Divider
            mb={5}
            label={
              <Text fw={700} fz={17} color="dark.9">
                Detail Project
              </Text>
            }
            size="md"
            color="dark"
          />
          <Box pt={10}>
            <Text>Event : We The Fest</Text>
            <Text>Location : Jakarta Selatan</Text>
            <Text>Date : 23 May 2023</Text>
            <Text>Name : PT. Mekar Jaya</Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
            <Text>
              .......... : ........... ......... ........... ...........
            </Text>
          </Box>
        </Box>
      </Box>
      <Box pt={20}>
        <Box
          sx={{
            backgroundColor: COLOR.AbuMuda,
            padding: 5,
            borderRadius: 5,
          }}
          px={20}
          mb={10}
          py={20}
        >
          <Divider
            mb={5}
            label={
              <Text fw={700} fz={17} color="dark.9">
                ASSETS
              </Text>
            }
            size="md"
            color="dark"
          />
          <Box pt={20}>
            <Box
              sx={{
                backgroundColor: COLOR.AbuAbu,
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Group position="apart">
                <Group>
                  <Box>
                    <Image
                      src={"/img/meja.jpeg"}
                      radius={10}
                      maw={{ base: 100, sm: 200 }}
                      mx="auto"
                      alt="img"
                    />
                  </Box>
                  <Box>
                    <Text fw={700} color="white" fz={{ sm: 20, base: 10 }}>
                      Item
                    </Text>
                    <Text color="gray.5" fz={{ sm: 13, base: 9 }}>
                      Harmony 2
                    </Text>
                    <Text color="gray.5" fz={{ sm: 13, base: 9 }}>
                      Display
                    </Text>
                  </Box>
                </Group>
                <Group>
                  <Box>
                    <Text
                      fw={700}
                      fz={{ sm: 40, base: 20 }}
                      pr={40}
                      color="white"
                    >
                      x2
                    </Text>
                  </Box>
                </Group>
              </Group>
              <Group pt={20}>
                <Group style={{ cursor: "pointer" }} onClick={toggle}>
                  <Text fz={{ sm: 13, base: 9 }} fw={700} color="white">
                    NOTE
                  </Text>
                  <ActionIcon color="gray.0">
                    <MdOutlineNoteAlt />
                  </ActionIcon>
                </Group>
              </Group>
              <Collapse in={opened}>
                <Textarea />
              </Collapse>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box pt={20}>
        <Box
          sx={{
            backgroundColor: COLOR.AbuMuda,
            padding: 5,
            borderRadius: 5,
          }}
          px={20}
          mb={10}
          py={20}
          ref={focusTrapRef}
        >
          <Divider
            mb={5}
            label={
              <Text fw={700} fz={17} color="dark.9">
                QUOTATION
              </Text>
            }
            size="md"
            color="dark"
          />
          <Box pt={10}>
            <TextInput placeholder="ESTIMATES BUDGET" />
          </Box>
        </Box>
      </Box>
      <Grid pt={20}>
        <Grid.Col md={3} sm={12}>
          <Button fullWidth radius={10} color="gray.7" onClick={() => setOpenUpdateDraft(true)}>
            SUBMIT
          </Button>
        </Grid.Col>
      </Grid>
      <Modal 
      size={"md"}
      opened={valOpenUpdateDraft}
      onClose={() => setOpenUpdateDraft(false)}
      centered
      withCloseButton={false}
      closeOnClickOutside={false}
      >
        <ModalNote/>
      </Modal>
    </>
  );
}
