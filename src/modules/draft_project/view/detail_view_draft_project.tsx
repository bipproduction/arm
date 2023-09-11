"use client";
import { ButtonBack, COLOR, PageHeader } from "@/modules/_global";
import {
  ActionIcon,
  Box,
  Button,
  Collapse,
  Divider,
  Group,
  Image,
  Modal,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { MdEditDocument, MdOutlineNoteAlt } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";
import ModalCloseRevoked from "../components/modal_close_revoked";



export function DetailViewDraftProject({ id }: { id: string }) {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/detail-draft-project" />
        <Group position="right">
          <Button leftIcon={<IoIosCloseCircle size="20" />} color="gray.7">
            REVOKE
          </Button>
          <Button
            leftIcon={<MdEditDocument size="20" />}
            color="gray.7"
            component="a"
            href="/dashboard/update-project"
          >
            UPDATE
          </Button>
        </Group>
        <PageHeader title="DRAFT ORDER" date="23 February 2023" number={id} />
      </Stack>
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
                  Assets
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
                        src={"../../img/meja.jpeg"}
                        radius={10}
                        maw={{ base: 100, sm: 200 }}
                        mx="auto"
                        alt="img"
                      />
                    </Box>
                    <Box>
                      <Text fw={700} color="white" fz={{ sm: 20, base: 10 }}>
                        THE MACALLAN
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
      </Box>
    </>
  );
}


export default DetailViewDraftProject