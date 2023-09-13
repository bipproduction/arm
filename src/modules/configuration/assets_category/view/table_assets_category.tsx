"use client";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { isModalAssetsCategory } from "../val/isModalAssetsCategory";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Group,
  Modal,
  ScrollArea,
  SimpleGrid,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import { AiOutlineFileAdd } from "react-icons/ai";
import { MdDelete, MdOutlineModeEdit } from "react-icons/md";
import ModalKonfirmasiDelAssetsCategory from "../components/modal_konfirmasi_del_assets_category";

export default function TableAssetsCategory({ data }: { data: any }) {
  const router = useRouter();
  const [listCategory, setListCategory] = useState<any[]>(data);
  const [valOpenModal, setOpenModal] = useAtom(isModalAssetsCategory);
  const [dataDelete, setDataDelete] = useState(Number);
  return (
    <>
      <Stack>
        <ButtonBack />
        <PageSubTitle text="TABLE ASSETS CATEGORY" />
      </Stack>
      <Group pt={20} position="right">
        <Button
          color="green.9"
          onClick={() =>
            router.push(`/dashboard/configuration/assets-category/create`)
          }
          leftIcon={<AiOutlineFileAdd size={"20"} />}
        >
          ADD ASSETS CATEGORY
        </Button>
      </Group>
      <Box pt={20}>
        <Box
          sx={{
            border: `1px solid ${COLOR.AbuMuda}`,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <SimpleGrid
            cols={1}
            spacing={"lg"}
            breakpoints={[{ maxWidth: "36rem", cols: 1, spacing: "sm" }]}
          >
            <ScrollArea>
              <Table highlightOnHover horizontalSpacing={"lg"}>
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>NAME</th>
                    <th>
                      <Center>
                        <Text>ACTIONS</Text>
                      </Center>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listCategory.map((v, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{v.name}</td>
                      <td>
                        <Group position="center">
                          <Box>
                            <ActionIcon
                              color="red.9"
                              onClick={() => {
                                setDataDelete(v.id);
                                setOpenModal(true);
                              }}
                            >
                              <MdDelete size="23" />
                            </ActionIcon>
                          </Box>
                          <Box>
                            <ActionIcon
                              color="yellow.9"
                              onClick={() =>
                                router.push(
                                  `/dashboard/configuration/assets-category/edit/${v.id}`
                                )
                              }
                            >
                              <MdOutlineModeEdit size="23" />
                            </ActionIcon>
                          </Box>
                        </Group>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </ScrollArea>
          </SimpleGrid>
        </Box>
      </Box>
      <Modal
        size={"md"}
        opened={valOpenModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalKonfirmasiDelAssetsCategory id={dataDelete} />
      </Modal>
    </>
  );
}
