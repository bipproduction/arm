'use client'

import { ButtonBack, COLOR, PageHeader } from "@/modules/_global"
import { Box, Divider, Text } from "@mantine/core"

export function DetailBilling({ id }: { id: string }) {
    return (
        <>
            <ButtonBack link="/dashboard/billing" />
            <PageHeader title="BILLING" date="23 February 2023" number={id} />

            <Box
                sx={{
                    backgroundColor: COLOR.AbuMuda,
                    padding: 5,
                    borderRadius: 5,
                }}
                px={20}
                mb={10}
                py={20}
            >
                <Divider
                    mb={5}
                    label={
                        <Text fw={700} fz={17} color="dark.9">
                            Detail Billing
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