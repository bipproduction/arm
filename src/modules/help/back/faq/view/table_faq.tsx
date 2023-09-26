"use client";
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
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
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { MdClose, MdDelete, MdOutlineModeEdit } from "react-icons/md";
import { isModalFAQ } from "../val/isModalCreateFaq";
import ModalKonfirmasiDeleteFaq from "../components/modal_konfirmasi_delete_faq";
import { funGetAllFaq } from "../fun/faq_get";
import _ from "lodash";
import { BsSearch } from "react-icons/bs";

export default function TableFaq({ data }: { data: any }) {
  const router = useRouter();
  const [listData, setListData] = useState<any[]>(data.data);
  const [valOpenModal, setOpenModal] = useAtom(isModalFAQ);
  const [dataDelete, setDataDelete] = useState(String);
  const [pageData, setPageData] = useState(1)
  const [totalPage, setTotalPage] = useState(data.nPage)
  const [valSearch, setValSearch] = useState("")
  const [fixSearch, setFixSearch] = useState("")
  let noAwal = pageData * 10 - 9;

  async function onSearch({ p, s }: { p: number, s: string }) {
    setPageData(p)
    const dataNext = await funGetAllFaq({ page: p, search: s })
    setListData(dataNext.data)
    setTotalPage(dataNext.nPage)
  }
  return (
    <>
      <Stack>
        <ButtonBack />
        <PageSubTitle text="LIST FAQ" />
      </Stack>
      <Grid justify="flex-end">
        <Grid.Col md={5} xl={5} lg={5} sm={5} xs={6}>
        <MantineProvider
            inherit
            theme={{
              components: {
                InputWrapper: {
                  styles: (theme) => ({
                    label: {
                      backgroundColor:
                        theme.colorScheme === "dark"
                          ? "rgba(255, 255, 255, .1)"
                          : "rgba(0, 0, 0, .1)",
                    },
                  }),
                },
                Input: {
                  styles: (theme) => ({
                    input: {
                      borderColor: theme.colors.gray[theme.fn.primaryShade()],
                    },
                  }),
                },
              },
            }}
          >
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
          </MantineProvider>
        </Grid.Col>
        <Grid.Col md={3} xl={2} lg={2} sm={3} xs={6}>
          <Button
            color="gray.7"
            onClick={() => router.push(`/dashboard/configuration/faq/create`)}
            leftIcon={<AiOutlineFileAdd size="20" />}
            fullWidth
          >
            ADD FAQ
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
                    <th>QUESTION</th>
                    <th>ANSWER</th>
                    <th>
                      <Center>
                        <Text>ACTIONS</Text>
                      </Center>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listData.map((v, i) => (
                    <tr key={i}>
                      <td>{noAwal++}</td>
                      <td>{v.question}</td>
                      <td>{v.answer}</td>
                      <td>
                        <Group position="center">
                          <Box>
                            <ActionIcon
                              color="yellow.9"
                              onClick={() =>
                                router.push(
                                  `/dashboard/configuration/faq/edit/${v.id}`
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
          <Pagination value={pageData} onChange={(val) => { onSearch({ p: val, s: fixSearch }) }} total={totalPage} />
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
        <ModalKonfirmasiDeleteFaq id={dataDelete} onSuccess={(val) => {
          const d = _.cloneDeep(listData)
          const n = d.filter((v) => v.id !== val.id)
          setListData(n)
        }} />
      </Modal>
    </>
  );
}
