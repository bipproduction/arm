'use client'

import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import { ActionIcon, Box, Button, Center, Flex, Grid, Group, Modal, Pagination, ScrollArea, SimpleGrid, Stack, Table, Text, TextInput } from "@mantine/core";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { MdClose, MdDelete, MdOutlineModeEdit } from "react-icons/md";
import { ModalKonfirmasiDelClient } from "../component/modal_konfirmasi_del_client";
import { useState } from "react";
import { useAtom } from "jotai";
import { isModalClient } from "../val/isModalClient";
import { funGetAllClient } from "../fun/get_all_client";
import { useRouter } from "next/navigation";

export function ListClient({ data }: { data: any }) {
    const router = useRouter();
    const [listData, setListData] = useState<any[]>(data.data)
    const [valOpenModal, setOpenModal] = useAtom(isModalClient)
    const [dataDelete, setDataDelete] = useState("")
    const [valPage, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(data.nPage)
    const [valSearch, setValSearch] = useState("")
    const [fixSearch, setFixSearch] = useState("")
    let noAwal = valPage * 10 - 9;

    async function onSearch({ p, s }: { p: number, s: string }) {
        setPage(p)
        const dataNext = await funGetAllClient({ page: p, search: s })
        setListData(dataNext.data);
        setTotalPage(dataNext.nPage)
    }


    return (
        <>
            <Stack>
                <ButtonBack />
                <PageSubTitle text="LIST CLIENT" />
            </Stack>
            <Grid justify="flex-end">
                <Grid.Col md={4} xl={4} lg={4} sm={4} xs={6}>
                    <Flex
                        gap="xs"
                        justify="flex-end"
                        align="center"
                        direction="row"
                        wrap="wrap"
                    >
                        <TextInput
                            radius="sm"
                            w={"70%"}
                            value={valSearch}
                            onChange={(val) => setValSearch(val.target.value)}
                            rightSection={valSearch != "" &&
                                <ActionIcon
                                    size="50"
                                    radius="sm"
                                    p={5}
                                    onClick={() => {
                                        setValSearch("");
                                        setFixSearch("");
                                        onSearch({ p: 1, s: '' })
                                    }}
                                >
                                    <MdClose size="21" />

                                </ActionIcon>

                            }
                            placeholder="Search"
                        />
                        <ActionIcon
                            size="50"
                            radius="sm"
                            bg={"gray.7"}
                            variant="filled"
                            p={6}
                            onClick={(val) => {
                                setFixSearch(valSearch)
                                onSearch({ p: 1, s: valSearch })
                            }}
                        >
                            <BsSearch size="21" />

                        </ActionIcon>
                    </Flex>
                </Grid.Col>
                <Grid.Col md={3} xl={2} lg={2} sm={3} xs={6}>
                    <Button
                        color="gray.7"
                        onClick={() => router.push('/dashboard/configuration/client/create')}
                        leftIcon={<AiOutlineFileAdd size="20" />}
                        fullWidth
                    >
                        ADD CLIENT
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
                        spacing="lg"
                        breakpoints={[{ maxWidth: "36rem", cols: 1, spacing: "sm" }]}
                    >
                        <ScrollArea>
                            <Table highlightOnHover horizontalSpacing={"lg"}>
                                <thead>
                                    <tr>
                                        <th>NO</th>
                                        <th>NAME</th>
                                        <th>PHONE</th>
                                        <th>ADDRESS</th>
                                        <th>
                                            <Center>
                                                <Text>ACTIONS</Text>
                                            </Center>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        listData.map((item) => (
                                            <tr key={item.id}>
                                                <td>{noAwal++}</td>
                                                <td>{item.name}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.address}</td>
                                                <td>
                                                    <Group position="center">
                                                        <Box>
                                                            <ActionIcon color="yellow.9" onClick={() => router.push(`/dashboard/configuration/client/edit/${item.id}`)}>
                                                                <MdOutlineModeEdit size="23" />
                                                            </ActionIcon>
                                                        </Box>
                                                        <Box>
                                                            <ActionIcon color="red.9" onClick={() => {
                                                                setDataDelete(item.id)
                                                                setOpenModal(true)
                                                            }
                                                            }>
                                                                <MdDelete size="23" />
                                                            </ActionIcon>
                                                        </Box>

                                                    </Group>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </ScrollArea>
                    </SimpleGrid>
                </Box>
                <Group position="right" pt={10}>
                    <Pagination value={valPage} onChange={(val) => onSearch({ p: val, s: fixSearch })} total={totalPage} />
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
                <ModalKonfirmasiDelClient id={dataDelete} onSuccess={(val)=>{
                    onSearch({ p: valPage, s: fixSearch})
                }}/>
            </Modal>
        </>
    )
}