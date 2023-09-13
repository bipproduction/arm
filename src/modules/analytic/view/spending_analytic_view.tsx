'use client'

import { Box, Text } from "@mantine/core"
import { EchartSpending } from "../component/echart_spending"
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global"
import { SummarySpending } from "../component/summary_spending"

export function SpendingAnalytic() {
    return (
        <>
            <ButtonBack link="/dashboard/insights" />
            <PageSubTitle text="SPENDING ANALYTICS" />
            <Box
                sx={{
                    backgroundColor: COLOR.AbuMuda,
                    borderRadius: 10,
                }}
            >
                <Box p={10}>
                    <Text fw={700} pl={20} pt={20}>
                        PROJECTS CHART
                    </Text>
                </Box>
                <EchartSpending />
            </Box>
            <SummarySpending />
        </>
    )
}