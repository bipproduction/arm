'use client'

import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import { ActionIcon, Box, Button, Center, Grid, Group, Pagination, ScrollArea, SimpleGrid, Stack, Table, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import { MdAdd, MdOutlineCreateNewFolder } from "react-icons/md";


const dataReimbursement = [
    {
        id: 1,
        name: "Outlet A",
        date: "23 Feb 2023",
        price: "21.000.000 IDR",
        status: "Approval",
        no: "123"
    },
    {
        id: 2,
        name: "Outlet A",
        date: "23 Feb 2023",
        price: "21.000.000 IDR",
        status: "Approved",
        no: "222"
    },
    {
        id: 3,
        name: "Outlet A",
        date: "23 Feb 2023",
        price: "21.000.000 IDR",
        status: "Declined",
        no: "111"
    },
    {
        id: 4,
        name: "Outlet A",
        date: "23 Feb 2023",
        price: "21.000.000 IDR",
        status: "Paid",
        no: "333"
    },
    {
        id: 5,
        name: "Outlet A",
        date: "23 Feb 2023",
        price: "21.000.000 IDR",
        status: "Paid",
        no: "333"
    },
    {
        id: 6,
        name: "Outlet A",
        date: "23 Feb 2023",
        price: "21.000.000 IDR",
        status: "Approval",
        no: "123"
    },
    {
        id: 7,
        name: "Outlet A",
        date: "23 Feb 2023",
        price: "21.000.000 IDR",
        status: "Approved",
        no: "222"
    },
    {
        id: 8,
        name: "Outlet A",
        date: "23 Feb 2023",
        price: "21.000.000 IDR",
        status: "Declined",
        no: "111"
    },
    {
        id: 9,
        name: "Outlet A",
        date: "23 Feb 2023",
        price: "21.000.000 IDR",
        status: "Declined",
        no: "111"
    },
    {
        id: 10,
        name: "Outlet A",
        date: "23 Feb 2023",
        price: "21.000.000 IDR",
        status: "Approved",
        no: "222"
    },
];

export function ListReimbursement() {
    const router = useRouter();
    return (
        <>
            <Stack>
                <ButtonBack link="/dashboard/bills" />
                <PageSubTitle text="LIST REIMBURSEMENTS" />
                <Box pt={20}>
                    <Group position="right">
                        <Button style={{ backgroundColor: COLOR.AbuAbu }} leftIcon={<MdAdd size="1rem" />} onClick={()=>router.push('reimbursement/add')}>
                            Add Reimbursement
                        </Button>
                    </Group>
                    <Grid mt={10}>
                        <Grid.Col md={6} lg={3}>
                            <Button color="gray" fullWidth>
                                APPROVAL
                            </Button>
                        </Grid.Col>
                        <Grid.Col md={6} lg={3}>
                            <Button color="gray" fullWidth>
                                APPROVED
                            </Button>
                        </Grid.Col>
                        <Grid.Col md={6} lg={3}>
                            <Button color="gray" fullWidth>
                                PAID
                            </Button>
                        </Grid.Col>
                        <Grid.Col md={6} lg={3}>
                            <Button color="gray" fullWidth>
                                DECLINED
                            </Button>
                        </Grid.Col>
                    </Grid>
                </Box>
                <Box pt={5}>
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
                                            dataReimbursement.map((item) => (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.date}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.status}</td>
                                                    <td>
                                                        <Center>
                                                            <ActionIcon color="dark" onClick={() => router.push(`/dashboard/reimbursement/` + item.no)}>
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