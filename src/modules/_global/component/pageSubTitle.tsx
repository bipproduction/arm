'use client'

import { Box, Text } from "@mantine/core"
import { COLOR } from ".."

export const PageSubTitle = ({ text }: { text?: string }) => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: COLOR.AbuMuda,
                    padding: 5,
                    borderRadius: 5,
                }}
                pl={20}
                mb={10}
            >
                <Text color="white" fw={700} fz={20}>
                    {text}
                </Text>
            </Box>
        </>
    )
}