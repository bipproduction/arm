'use client'

import { Box, Text } from "@mantine/core"

export const PageTitle = ({ text }: { text?: string }) => {
    return (
        <>
            <Box pb={20}>
                <Text fw={700}>{text}</Text>
            </Box>
        </>
    )
}