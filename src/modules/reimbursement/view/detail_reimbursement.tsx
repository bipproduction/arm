'use client'

import { ButtonBack, COLOR, PageHeader } from "@/modules/_global"
import { Box, Button, Divider, Group, Text, Title } from "@mantine/core"
import { MdDownload, MdModeEditOutline, MdOutlinePayments } from "react-icons/md"

export function DetailReimbursement({ id }: { id: string }) {
    let title = "APPROVAL REIMBURSEMENT";
    if (id == "111") title = "DECLINED REIMBURSEMENT";
    if (id == "222") title = "APPROVED REIMBURSEMENT";
    if (id == "333") title = "PAID REIMBURSEMENT";

    return (
        <>
            <ButtonBack link="/dashboard/reimbursement" />
            <PageHeader title={title} date="23 February 2023" number={id} />
            <Box mt={20}>
                <Group position="right">
                    {id == "111" && <Button color="gray" leftIcon={<MdModeEditOutline size="1rem" />}>
                        Edit
                    </Button>}
                    {id == "222" && <Button color="gray" leftIcon={<MdOutlinePayments size="1rem" />}>
                        Payment
                    </Button>}
                    {id == "333" && <Button color="gray" leftIcon={<MdDownload size="1rem" />}>
                        Download
                    </Button>}
                </Group>
            </Box>
            <Box
                sx={{
                    backgroundColor: COLOR.AbuMuda,
                    padding: 5,
                    borderRadius: 5,
                }}
                px={20}
                my={10}
                py={20}
            >
                <Divider
                    mb={5}
                    label={
                        <Text fw={700} fz={17} color="dark.9">
                            Detail Reimbursement
                        </Text>
                    }
                    size="md"
                    color="dark"
                />
                <Box>
                    <Text>Event : We The Fest</Text>
                    <Text>Location : Jakarta Selatan</Text>
                    <Text>Date : 23 May 2023</Text>
                    <Text>Name : PT. Mekar Jaya</Text>
                    <Text>.......... : ........... ......... ........... ...........</Text>
                    <Text>.......... : ........... ......... ........... ...........</Text>
                    <Text>.......... : ........... ......... ........... ...........</Text>
                    <Text>.......... : ........... ......... ........... ...........</Text>
                    <Text>.......... : ........... ......... ........... ...........</Text>
                    <Text>.......... : ........... ......... ........... ...........</Text>
                    <Text>.......... : ........... ......... ........... ...........</Text>
                    <Text>.......... : ........... ......... ........... ...........</Text>
                    <Text>.......... : ........... ......... ........... ...........</Text>
                    <Text>.......... : ........... ......... ........... ...........</Text>
                    <Text>.......... : ........... ......... ........... ...........</Text>
                    <Text>.......... : ........... ......... ........... ...........</Text>
                    <Text>.......... : ........... ......... ........... ...........</Text>
                    <Text>.......... : ........... ......... ........... ...........</Text>
                    <Text>.......... : ........... ......... ........... ...........</Text>

                </Box>
            </Box>
        </>
    )
}