'use client'

import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global"
import { ActionIcon, Box, Button, Center, Group, Pagination, ScrollArea, SimpleGrid, Stack, Table, Text } from "@mantine/core"
import { useRouter } from "next/navigation";
import { MdAdd, MdOutlineCreateNewFolder } from "react-icons/md"

const dataOutlet = [
    {
        id: 1,
        name: "Outlet A",
        date: "23 Feb 2023",
        location: "Jakarta Pusat"
    },
    {
        id: 2,
        name: "Outlet A",
        date: "23 Feb 2023",
        location: "Jakarta Pusat"
    },
    {
        id: 3,
        name: "Outlet A",
        date: "23 Feb 2023",
        location: "Jakarta Pusat"
    },
    {
        id: 4,
        name: "Outlet A",
        date: "23 Feb 2023",
        location: "Jakarta Pusat"
    },
    {
        id: 5,
        name: "Outlet Aion",
        date: "23 Feb 2023",
        location: "Jakarta Pusat"
    },
    {
        id: 6,
        name: "Outlet A",
        date: "23 Feb 2023",
        location: "Jakarta Pusat"
    },
    {
        id: 7,
        name: "Outlet A",
        date: "23 Feb 2023",
        location: "Jakarta Pusat"
    },
    {
        id: 8,
        name: "Outlet A",
        date: "23 Feb 2023",
        location: "Jakarta Pusat"
    },
    {
        id: 9,
        name: "Outlet A",
        date: "23 Feb 2023",
        location: "Jakarta Pusat"
    },
    {
        id: 10,
        name: "Outlet A",
        date: "23 Feb 2023",
        location: "Jakarta Pusat"
    },
];

export function ListOutlet() {
    const router = useRouter();
    return (
        <>
            <Stack>
                <ButtonBack link="/dashboard/insights" />
                <PageSubTitle text="OUTLET DATABASE" />

                <Box pt={20}>
                    <Group position="right">
                        <Button style={{ backgroundColor: COLOR.AbuAbu }} leftIcon={<MdAdd size="1rem" />} onClick={() => router.push('outlet/add')}>
                            Add Outlet
                        </Button>
                    </Group>
                </Box>

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
                                            <th>LOCATION</th>
                                            <th>
                                                <Center>
                                                    <Text>ACTIONS</Text>
                                                </Center>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            dataOutlet.map((item) => (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.date}</td>
                                                    <td>{item.location}</td>
                                                    <td>
                                                        <Center>
                                                            <ActionIcon color="dark" onClick={()=>router.push('outlet/1123243')}>
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