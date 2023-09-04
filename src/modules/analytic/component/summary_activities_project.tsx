'use client'

import { COLOR } from "@/modules/_global"
import { Box, Grid, Text } from "@mantine/core"

export function SummaryProject() {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: COLOR.AbuAbu,
                    padding: 5,
                    borderRadius: 5,
                }}
                px={20}
                my={10}
            >
                <Text color="white" fw={700} fz={15}>
                    PROJECTS
                </Text>
            </Box>
            <Box pb={10}>
                <Grid>
                    <Grid.Col md={4} lg={4}>
                        <Box
                            sx={{
                                backgroundColor: COLOR.AbuAbu,
                                padding: 20,
                                borderRadius: 5,
                            }}
                        >
                            <Text ta={"center"} fz={15} fw={700} color="white">
                                CANCELED
                            </Text>
                            <Text ta={"center"} fz={40} fw={700} color="white">
                                20
                            </Text>
                        </Box>
                    </Grid.Col>
                    <Grid.Col md={4} lg={4}>
                        <Box
                            sx={{
                                backgroundColor: COLOR.AbuAbu,
                                padding: 20,
                                borderRadius: 5,
                            }}
                        >
                            <Text ta={"center"} fz={15} fw={700} color="white">
                                DECLINED
                            </Text>
                            <Text ta={"center"} fz={40} fw={700} color="white">
                                20
                            </Text>
                        </Box>
                    </Grid.Col>
                    <Grid.Col md={4} lg={4}>
                        <Box
                            sx={{
                                backgroundColor: COLOR.AbuAbu,
                                padding: 20,
                                borderRadius: 5,
                            }}
                        >
                            <Text ta={"center"} fz={15} fw={700} color="white">
                                REVOKED
                            </Text>
                            <Text ta={"center"} fz={40} fw={700} color="white">
                                20
                            </Text>
                        </Box>
                    </Grid.Col>
                </Grid>
            </Box>
        </>
    )
}