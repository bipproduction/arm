"use client";
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import { ActionIcon, Box, Button, Center, Group, Modal, ScrollArea, SimpleGrid, Stack, Table, Text } from "@mantine/core";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { MdDelete, MdOutlineModeEdit } from "react-icons/md";
import { isModalProjectCategory } from "../val/isModalCreateProjectsCategory";
import { ModalKonfirmasiDelProjectCategory } from "../components/modal_konfirmasi_del_project_category";

export default function TableProjectsCategory({ data }: { data: any }) {
  const router = useRouter();
  const [listCategory, setListCategory] = useState<any[]>(data);
  const[valOpenModal, setOpenModal] = useAtom(isModalProjectCategory)
  const [dataDelete, setDataDelete] = useState(Number)
  return (
    <>
      <Stack>
        <ButtonBack />
        <PageSubTitle text="TABLE PROJECTS CATEGORY" />
      </Stack>
      <Group pt={20} position="right">
        <Button
          color="green.9"
          onClick={() =>
            router.push(`/dashboard/configuration/projects-category/create`)
          }
          leftIcon={<AiOutlineFileAdd size={"20"} />}
        >
          ADD PROJECT CATEGORY
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
                            <ActionIcon color="red.9" onClick={() => {
                              setDataDelete(v.id)
                              setOpenModal(true)
                            }}>
                              <MdDelete size="23" />
                            </ActionIcon>
                          </Box>
                          <Box>
                            <ActionIcon
                              color="yellow.9"
                              onClick={() =>
                                router.push(
                                  `/dashboard/configuration/projects-category/edit/${v.id}`
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
      onClose={()=> setOpenModal(false)}
      centered
      withCloseButton={false}
      closeOnClickOutside={false}
      >
        <ModalKonfirmasiDelProjectCategory id={dataDelete}/>

      </Modal>
    </>
  );
}
