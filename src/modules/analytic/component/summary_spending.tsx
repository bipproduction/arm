'use client'

import { COLOR } from "@/modules/_global"
import { ActionIcon, Box, Grid, Group, Text } from "@mantine/core"
import { BsFillArrowRightCircleFill } from "react-icons/bs"

export function SummarySpending() {
    return (
        <>
            <Box mt={20}>
                <Box>
                    <Grid>
                        <Grid.Col md={6} lg={6}>
                            <Box
                                sx={{
                                    backgroundColor: COLOR.AbuMuda,
                                    padding: 20,
                                    borderRadius: 10,
                                }}
                            >
                                <Text ta={"center"} fz={15} fw={700}>
                                    CAMPAIGNS
                                </Text>
                                <Text ta={"center"} fz={40} fw={700}>
                                    20
                                </Text>
                            </Box>
                            <Box
                                sx={{
                                    backgroundColor: COLOR.AbuMuda,
                                    padding: 20,
                                    borderRadius: 10,
                                }}
                                mt={20}
                            >
                                <Text ta={"center"} fz={15} fw={700}>
                                    OUTLETS
                                </Text>
                                <Text ta={"center"} fz={40} fw={700}>
                                    20
                                </Text>
                            </Box>
                        </Grid.Col>
                        <Grid.Col md={6} lg={6}>
                            <Box
                                sx={{
                                    backgroundColor: COLOR.AbuMuda,
                                    padding: 20,
                                    borderRadius: 10,
                                }}
                            >
                                <Text ta={"center"} fz={15} fw={700}>
                                    PROJECTS
                                </Text>
                                <Text ta={"center"} fz={40} fw={700}>
                                    20
                                </Text>
                            </Box>
                            <Box
                                sx={{
                                    backgroundColor: COLOR.AbuMuda,
                                    padding: 20,
                                    borderRadius: 10,
                                }}
                                mt={20}
                            >
                                <Text ta={"center"} fz={15} fw={700}>
                                    AUDIENCE
                                </Text>
                                <Text ta={"center"} fz={40} fw={700}>
                                    20
                                </Text>
                            </Box>
                        </Grid.Col>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}