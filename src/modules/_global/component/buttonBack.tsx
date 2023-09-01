'use client'

import { Box, Group, Text } from "@mantine/core"
import { BiArrowBack } from "react-icons/bi"

export const ButtonBack = ({ link }: { link: string }) => {
    return (
        <>
            <Group mb={20}>
                <Box component="a" href={link} style={{ textDecoration: "none" }}>
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