"use client";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { isModalBrand } from "../val/isModalBrand";
import { funGetAllBrand } from "..";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Group,
  MantineProvider,
  Modal,
  Pagination,
  ScrollArea,
  SimpleGrid,
  Stack,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import { MdClose, MdDelete, MdOutlineModeEdit } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { AiOutlineFileAdd } from "react-icons/ai";
import ModalKonfirmasiAddBrand from "../components/modal_konfirmasi_add_brand";
import ModalKonfirmasiDeleteBrand from "../components/modal_konfirmasi_delete_brand";
import _ from "lodash";

export default function TableBrand({ data }: { data: any }) {
  const router = useRouter();
  const [listBrand, setListBrand] = useState<any[]>(data.data);
  const [valOpenModal, setOpenModal] = useAtom(isModalBrand);
  const [dataDelete, setDataDelete] = useState("");
  const [valPage, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(data.nPage);
  const [valSearch, setValSearch] = useState("");
  const [fixSearch, setFixSearch] = useState("");
  let noAwal = valPage * 10 - 9;

  async function onSearch({ p, s }: { p: number; s: string }) {
    setPage(p);
    const dataNext = await funGetAllBrand({ page: p, search: s });
    setListBrand(dataNext.data);
    setTotalPage(dataNext.nPage);
  }

  return (
    <>
      <Stack>
        <ButtonBack />
        <PageSubTitle text="LIST BRAND" />
      </Stack>
      <Grid justify="flex-end">
        <Grid.Col md={5} xl={5} lg={5} sm={5} xs={6}>
          <Box>
            <Group>
              <TextInput
                radius="sm"
                w={"80%"}
                value={valSearch}
                onChange={(val) => setValSearch(val.target.value)}
                placeholder="Search"
                rightSection={
                  <Button.Group mr={23}>
                    {valSearch != `` && (
                      <Button
                        variant="subtle"
                        color="gray.7"
                        onClick={() => {
                          setValSearch("");
                          setFixSearch("");
                          onSearch({ p: 1, s: "" });
                        }}
                      >
                        <MdClose size="21" />
                      </Button>
                    )}
                    <Button
                      color="gray.7"
                      onClick={(val) => {
                        setFixSearch(valSearch);
                        onSearch({ p: 1, s: valSearch });
                      }}
                    >
                      <BsSearch size="21" />
                    </Button>
                  </Button.Group>
                }
              />
            </Group>
          </Box>
        </Grid.Col>
        <Grid.Col md={4} xl={3} lg={3} sm={4} xs={6}>
          <Button
            color="gray.7"
            onClick={() => router.push(`/dashboard/configuration/brand/create`)}
            leftIcon={<AiOutlineFileAdd size={"20"} />}
            fullWidth
          >
            ADD BRAND
          </Button>
        </Grid.Col>
      </Grid>
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
                  {listBrand.map((v, i) => (
                    <tr key={i}>
                      <td>{noAwal++}</td>
                      <td>{v.name}</td>
                      <td>
                        <Group position="center">
                          <Box>
                            <ActionIcon
                              color="yellow.9"
                              onClick={() =>
                                router.push(
                                  `/dashboard/configuration/brand/edit/${v.id}`
                                )
                              }
                            >
                              <MdOutlineModeEdit size="23" />
                            </ActionIcon>
                          </Box>
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
            onChange={(val) => onSearch({ p: val, s: fixSearch })}
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
        <ModalKonfirmasiDeleteBrand
          id={dataDelete}
          onSuccess={(val) => {
            onSearch({ p: valPage, s: fixSearch });
            // const d = _.cloneDeep(listBrand)
            // const n = d.filter((v) => v.id !== val.id)
            // setListBrand(n)
          }}
        />
      </Modal>
    </>
  );
}
