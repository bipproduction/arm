"use client";
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Group,
  Modal,
  Pagination,
  ScrollArea,
  SimpleGrid,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { MdDelete, MdOutlineModeEdit } from "react-icons/md";
import { isModalOutletLocation } from "../val/idModalOutletLocation";
import ModalKonfirmasiDeleteOutletLocation from "../components/modal_konfirmasi_delete_outlet_location";
import { funGetAllOutletLocation } from "..";

export default function TableOutletLocation({ data }: { data: any }) {
  const router = useRouter();
  const [listOutlet, setListOutlet] = useState<any[]>(data.data);
  const [valOpenModal, setOpenModal] = useAtom(isModalOutletLocation);
  const [dataDelete, setDataDelete] = useState(Number);
  const [valPage, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(data.nPage);

  async function onSearch(p: number) {
    setPage(p);
    const dataNext = await funGetAllOutletLocation(p);
    setListOutlet(dataNext.data);
    setTotalPage(dataNext.nPage);
  } 

  return (
    <>
      <Stack>
        <ButtonBack />
        <PageSubTitle text="TABLE OUTLET LOCATION" />
      </Stack>
      <Group pt={20} position="right">
        <Button
          color="green.9"
          onClick={() =>
            router.push(`/dashboard/configuration/outlet-location/create`)
          }
          leftIcon={<AiOutlineFileAdd size={"20"} />}
        >
          ADD OUTLET LOCATION
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
                  {listOutlet.map((v, i) => (
                    <tr key={i}>
                      <td>{i + 1  }</td>
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
                                  `/dashboard/configuration/outlet-location/edit/${v.id}`
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
        <Group position="right" pt={10}>
          <Pagination
            value={valPage}
            onChange={(val) => onSearch(val)}
            total={totalPage}
          />
        </Group>
      </Box>
      <Modal
        size={"md"}
        opened={valOpenModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalKonfirmasiDeleteOutletLocation id={dataDelete} />
      </Modal>
    </>
  );
}
