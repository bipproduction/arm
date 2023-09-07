'use client'

import { COLOR } from "@/modules/_global"
import { ActionIcon, Box, Flex, Group, Text } from "@mantine/core"
import { useRouter } from "next/navigation"
import { BsFillArrowRightCircleFill } from "react-icons/bs"

export function BillLayout() {
    const router = useRouter();
    return (
        <>
            <Box
                sx={{
                    backgroundColor: COLOR.AbuMuda,
                    borderRadius: 10,
                }}
                pl={20}
                pt={20}
                pr={20}
            >
                <Box
                    sx={{
                        backgroundColor: "white",
                        padding: 20,
                        borderRadius: 10,
                    }}
                >
                    <Group position="apart">
                        <Box pl={30}>
                            <Text fw={700} fz={25}>
                                BILLING
                            </Text>
                        </Box>
                        <Box pr={30} pl={{ base: 100 }}>
                            <Text fz={40} fw={700}>
                                50
                            </Text>
                        </Box>
                    </Group>
                </Box>
                <Box>
                    <Group position="right" pt={10} pb={10}>
                        <Flex style={{ cursor: "pointer" }} onClick={() => router.push('/dashboard/billing')}>
                            <Text fz={10} color="white" pt={5}>
                                Detail Billing
                            </Text>
                            <ActionIcon color="gray.0">
                                <BsFillArrowRightCircleFill />
                            </ActionIcon>
                        </Flex>
                    </Group>
                </Box>
            </Box>
        </>
    )
}