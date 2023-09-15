'use client'

import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global"
import { ActionIcon, Box, Button, Center, Group, Modal, Pagination, ScrollArea, SimpleGrid, Stack, Table, Text } from "@mantine/core"
import { useAtom } from "jotai"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { MdAdd, MdDelete, MdOutlineModeEdit } from "react-icons/md"
import { isModalOutlet } from "../val/valOutlet"
import { ModalKonfirmasiDelOutletType } from "../component/modal_konfirmasi_del_outlet_type"
import { funGetAllOutletType } from ".."


export function ListOutletType({ data }: { data: any }) {
    const router = useRouter();
    const [listData, setListData] = useState<any[]>(data.data)
    let number = 1;
    const [valOpenModal, setOpenModal] = useAtom(isModalOutlet)
    const [dataDelete, setDataDelete] = useState(Number)
    const [valPage, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(data.nPage)
    async function onSearch(p: number) {
        setPage(p)
        const dataNext = await funGetAllOutletType(p)
        setListData(dataNext.data);
        setTotalPage(dataNext.nPage)
    }
    return (
        <>
            <Stack>
                <ButtonBack />
                <PageSubTitle text="LIST OUTLET TYPE" />
                <Box>
                    <Group position="right">
                        <Button color="green.9" leftIcon={<MdAdd size="1rem" />} onClick={() => router.push('/dashboard/configuration/outlet-type/add')}>
                            Add Outlet Type
                        </Button>
                    </Group>
                </Box>
                <Box>
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
                                                    <td>{number++}</td>
                                                    <td>{item.name}</td>
                                                    <td>
                                                        <Group position="center">
                                                            <Box>
                                                                <ActionIcon color="yellow.9" onClick={() => router.push(`/dashboard/configuration/outlet-type/edit/${item.id}`)}>
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
                </Box>
                <Group position="right" pt={10}>
                    <Pagination value={valPage} onChange={(val) => onSearch(val)} total={totalPage} />
                </Group>
            </Stack>
            <Modal
                size={"md"}
                opened={valOpenModal}
                onClose={() => setOpenModal(false)}
                centered
                withCloseButton={false}
                closeOnClickOutside={false}
            >
                <ModalKonfirmasiDelOutletType id={dataDelete} />
            </Modal>
        </>
    )
}