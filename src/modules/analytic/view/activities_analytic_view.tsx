'use client'

import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global"
import { Box, Grid, Text } from "@mantine/core"
import { EchartActivities } from "../component/echart_activities"
import { SummaryProject } from "../component/summary_activities_project"
import { SummaryCheckout } from "../component/summary_activities_co"

export function ActivitiesAnalytic() {
    return (
        <>
            <ButtonBack link="/dashboard/insights" />
            <PageSubTitle text="ACTIVITIES ANALYTICS" />
            <Box my={20}>
                <Grid>
                    <Grid.Col md={6} lg={6}>
                        <Box
                            sx={{
                                backgroundColor: COLOR.AbuMuda,
                                borderRadius: 10,
                            }}
                        >
                            <Box p={10}>
                                <Text fw={700} pl={20} pt={20}>
                                    TOTAL ACTIVITY
                                </Text>
                            </Box>
                            <EchartActivities />
                        </Box>
                    </Grid.Col>
                    <Grid.Col md={6} lg={6}>
                        <Box
                            sx={{
                                backgroundColor: COLOR.AbuMuda,
                                borderRadius: 10,
                            }}
                        >
                            <Box p={10}>
                                <Text fw={700} pl={20} pt={20}>
                                    TOTAL SPENDING
                                </Text>
                            </Box>
                            <EchartActivities />
                        </Box>
                    </Grid.Col>
                </Grid>
            </Box>
            <Box
                sx={{
                    backgroundColor: COLOR.AbuMuda,
                    padding: 5,
                    borderRadius: 10,
                }}
                px={20}
                my={20}>
                <SummaryProject />
            </Box>
            <Box
                sx={{
                    backgroundColor: COLOR.AbuMuda,
                    padding: 5,
                    borderRadius: 10,
                }}
                px={20}
                my={20}>
                <SummaryCheckout />
            </Box>
        </>
    )
}