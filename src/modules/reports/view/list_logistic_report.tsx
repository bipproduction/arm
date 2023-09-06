'use client'

import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global"
import { ActionIcon, Box, Center, Group, Pagination, ScrollArea, SimpleGrid, Stack, Table, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const dataLogisticReport = [
    {
        id: 1,
        name: "Outlet A",
        date: "23 Feb 2023",
        qty: "30 pcs",
        status: "approved"
    },
    {
        id: 2,
        name: "Outlet A",
        date: "23 Feb 2023",
        qty: "30 pcs",
        status: "approved"
    },
    {
        id: 3,
        name: "Outlet A",
        date: "23 Feb 2023",
        qty: "30 pcs",
        status: "approved"
    },
    {
        id: 4,
        name: "Outlet A",
        date: "23 Feb 2023",
        qty: "30 pcs",
        status: "approved"
    },
    {
        id: 5,
        name: "Outlet A",
        date: "23 Feb 2023",
        qty: "30 pcs",
        status: "approved"
    },
    {
        id: 6,
        name: "Outlet A",
        date: "23 Feb 2023",
        qty: "30 pcs",
        status: "approved"
    },
    {
        id: 7,
        name: "Outlet A",
        date: "23 Feb 2023",
        qty: "30 pcs",
        status: "approved"
    },
    {
        id: 8,
        name: "Outlet A",
        date: "23 Feb 2023",
        qty: "30 pcs",
        status: "approved"
    },
    {
        id: 9,
        name: "Outlet A",
        date: "23 Feb 2023",
        qty: "30 pcs",
        status: "approved"
    },
    {
        id: 10,
        name: "Outlet A",
        date: "23 Feb 2023",
        qty: "30 pcs",
        status: "approved"
    },
];

export function ListLogisticReport() {
    const router = useRouter();
    return (
        <>
            <Stack>
                <ButtonBack link="/dashboard/insights" />
                <PageSubTitle text="LOGISTIC REPORTS" />
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
                                            <th>QUANTITY</th>
                                            <th>STATUS</th>
                                            <th>
                                                <Center>
                                                    <Text>ACTIONS</Text>
                                                </Center>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            dataLogisticReport.map((item) => (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.date}</td>
                                                    <td>{item.qty}</td>
                                                    <td>{item.status}</td>
                                                    <td>
                                                        <Center>
                                                            <ActionIcon color="dark" onClick={() => router.push('/dashboard/logistic-report/1293849')}>
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