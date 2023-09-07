'use client'

import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import { ActionIcon, Box, Center, Group, Pagination, ScrollArea, SimpleGrid, Stack, Table, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import { MdOutlineCreateNewFolder } from "react-icons/md";


const dataInvoice = [
    {
        id: 1,
        name: "Outlet A",
        date: "23 Feb 2023",
        price: "21.000.000 IDR"
    },
    {
        id: 2,
        name: "Outlet A",
        date: "23 Feb 2023",
        price: "21.000.000 IDR"
    },
    {
        id: 3,
        name: "Outlet A",
        date: "23 Feb 2023",
        price: "21.000.000 IDR"
    },
    {
        id: 4,
        name: "Outlet A",
        date: "23 Feb 2023",
        price: "21.000.000 IDR"
    },
    {
        id: 5,
        name: "Outlet A",
        date: "23 Feb 2023",
        price: "21.000.000 IDR"
    },
    {
        id: 6,
        name: "Outlet A",
        date: "23 Feb 2023",
        price: "21.000.000 IDR"
    },
    {
        id: 7,
        name: "Outlet A",
        date: "23 Feb 2023",
        price: "21.000.000 IDR"
    },
    {
        id: 8,
        name: "Outlet A",
        date: "23 Feb 2023",
        price: "21.000.000 IDR"
    },
    {
        id: 9,
        name: "Outlet A",
        date: "23 Feb 2023",
        price: "21.000.000 IDR"
    },
    {
        id: 10,
        name: "Outlet A",
        date: "23 Feb 2023",
        price: "21.000.000 IDR"
    },
];

export function ListInvoice() {
    const router = useRouter();
    return (
        <>
            <Stack>
                <ButtonBack link="/dashboard/bills" />
                <PageSubTitle text="LIST INVOICE" />
                <Box pt={20}>
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
                                            <th>No</th>
                                            <th>NAME</th>
                                            <th>DATE</th>
                                            <th>PRICE</th>
                                            <th>
                                                <Center>
                                                    <Text>ACTIONS</Text>
                                                </Center>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            dataInvoice.map((item) => (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.date}</td>
                                                    <td>{item.price}</td>
                                                    <td>
                                                        <Center>
                                                            <ActionIcon onClick={() => router.push('/dashboard/invoice/271837199')} c={"black"}>
                                                                <MdOutlineCreateNewFolder size="25" />
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
        </>
    )
}