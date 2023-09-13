'use client'

import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global"
import { ActionIcon, Box, Button, Center, Group, Modal, Pagination, ScrollArea, SimpleGrid, Stack, Table, Text } from "@mantine/core"
import { useAtom } from "jotai"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { MdAdd, MdDelete, MdOutlineModeEdit } from "react-icons/md"
import { isModalOutlet } from "../val/valOutlet"
import { ModalKonfirmasiDelOutletType } from "../component/modal_konfirmasi_del_outlet_type"


export function ListOutletType({ data }: { data: any }) {
    const router = useRouter();
    const [listData, setListData] = useState<any[]>(data)
    let number = 1;
    const [valOpenModal, setOpenModal] = useAtom(isModalOutlet)
    const [dataDelete, setDataDelete] = useState(Number)
    return (
        <>
            <Stack>
                <ButtonBack />
                <PageSubTitle text="LIST OUTLET TYPE" />
                <Box>
                    <Group position="right">
                        <Button style={{ backgroundColor: COLOR.AbuAbu }} leftIcon={<MdAdd size="1rem" />} onClick={() => router.push('/dashboard/configuration/outlet-type/add')}>
                            Add Outlet Type
                        </Button>
                    </Group>
                </Box>
                <Box>
                    <Box
                        sx={{
                            backgroundColor: COLOR.AbuMuda,
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
                                                        <Center>
                                                            <ActionIcon color="dark" onClick={() => router.push('/dashboard/configuration/outlet-type/edit/242313')}>
                                                                <MdOutlineModeEdit size="25" />
                                                            </ActionIcon>
                                                            <ActionIcon color="red.9" onClick={() => {
                                                                setDataDelete(item.id)
                                                                setOpenModal(true)
                                                            }
                                                            }>
                                                                <MdDelete size="23" />
                                                            </ActionIcon>
                                                        </Center>
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
                    <Pagination total={10} />
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