'use client'

import { Box, Text } from "@mantine/core"
import { COLOR } from ".."

export const PageHeader = ({ title, number, date }: { title?: string, number?: string, date?: string }) => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: COLOR.AbuAbu,
                    padding: 5,
                    borderRadius: 5,
                }}
                pl={20}
                mb={10}
                py={10}
            >
                <Text color="white" fw={700} fz={20} mb={10} mt={5}>
                    {title}
                </Text>
                <Text color="white" mb={5}>
                    No. {number}
                </Text>
                <Text color="white" mb={5}>
                    {date}
                </Text>
            </Box>
        </>
    )
}