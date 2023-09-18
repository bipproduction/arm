'use client'

import { Box, Group, Text } from "@mantine/core"
import { useRouter } from "next/navigation"
import { BiArrowBack } from "react-icons/bi"

export const ButtonBack = ({ link }: { link?: string }) => {
    const router = useRouter()
    return (
        <>
            <Group >
                <Box onClick={router.back} style={{ textDecoration: "none" }}>
                    <Group style={{ cursor: "pointer" }}>
                        <BiArrowBack size="20" />
                        <Text fz={15} fw={700} color="dark.9">
                            Back
                        </Text>
                    </Group>
                </Box>
            </Group>
        </>
    )
}