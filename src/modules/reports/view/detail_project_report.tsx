'use client'

import { ButtonBack, COLOR, PageHeader } from "@/modules/_global"
import { Box, Button, Divider, Group, Text } from "@mantine/core"
import { MdDownload } from "react-icons/md"

export function DetailProjectReport({ id }: { id: string }) {
    return (
        <>
            <ButtonBack link="/dashboard/project-report" />
            <PageHeader title="PROJECT REPORT" date="23 February 2023" number={id} />
            <Box mt={20}>
                <Group position="right">
                    <Button color="gray" leftIcon={<MdDownload size="1rem" />}>
                        Download
                    </Button>
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
                            Detail Project
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