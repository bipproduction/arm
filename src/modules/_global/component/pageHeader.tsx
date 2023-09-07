'use client'

import { Box, Group, Text } from "@mantine/core"
import { COLOR } from ".."

export const PageHeader = ({ title, number, date, status }: { title?: string, number?: string, date?: string, status?: string }) => {
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
                <Group position="right" pt={10}>
                <Text color="white" mb={5} pr={20} fw={700}>
                    {status}
                </Text>
                </Group>
            </Box>
        </>
    )
}