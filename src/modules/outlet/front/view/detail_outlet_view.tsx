'use client'

import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global"
import { Box, Button, Divider, Group, Text } from "@mantine/core"
import { useRouter } from "next/navigation"
import { MdModeEditOutline } from "react-icons/md"

export function DetailOutlet({ id }: { id: string }) {
    const router = useRouter();
    return (
        <>
            <ButtonBack />
            <PageSubTitle text="DETAIL OUTLET" />
            <Box mt={20}>
                <Group position="right">
                    <Button color="gray" leftIcon={<MdModeEditOutline size="1rem" />} onClick={() => router.push(`${id}/edit`)}>
                        Edit
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
                            Outlet
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