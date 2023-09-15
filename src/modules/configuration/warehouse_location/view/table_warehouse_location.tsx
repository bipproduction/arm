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
import { isModalWarehouseLocation } from "../val/isModalWarehouseLocation";
import ModalKomfirmasiDeleteWarehouseLocation from "../components/modal_konfirmasi_delete_warehouse_location";
import _ from "lodash";
import { funGetAllWarehouseLocation } from "..";

export const dynamic = "force-dynamic"
export default function TableWarehouseLocation({ data }: { data: any }) {
  const router = useRouter();
  const [listLocation, setListLocation] = useState<any[]>(data.data);
  const [valOpenModal, setOpenModal] = useAtom(isModalWarehouseLocation);
  const [dataDelete, setDataDelete] = useState(Number);
  const [valPage, setValPage] = useState(1);
  const [totalPage, setTotalPage] = useState(data.nPage)
  let noAwal = valPage*10-9;

  async function onSearch(page: number) {
    const dataNext = await funGetAllWarehouseLocation({ p: page })
    setValPage(page)
    setListLocation(dataNext.data)
    setTotalPage(dataNext.nPage)
  }
  return (
    <>
      <Stack>
        <ButtonBack />
        <PageSubTitle text="WAREHOUSE LOCATION" />
      </Stack>
      <Group pt={20} position="right">
        <Button
          color="green.9"
          onClick={() =>
            router.push(`/dashboard/configuration/warehouse-location/create`)
          }
          leftIcon={<AiOutlineFileAdd size={"20"} />}
        >
          ADD WAREHOUSE LOCATION
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
                  {listLocation.map((v, i) => (
                    <tr key={i}>
                      <td>{noAwal++}</td>
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
                                  `/dashboard/configuration/warehouse-location/edit/${v.id}`
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
          <Pagination value={valPage} onChange={(val) => onSearch(val)} total={totalPage} />
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
        <ModalKomfirmasiDeleteWarehouseLocation id={dataDelete} onSuccess={(val) => {
          const d = _.cloneDeep(listLocation)
          const n = d.filter((v) => v.id !== val.data.id)
          setListLocation(n)
        }} />
      </Modal>
    </>
  );
}
