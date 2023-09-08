'use client'

import { ButtonBack, PageSubTitle } from "@/modules/_global"
import { Stack } from "@mantine/core"
import { TableProjectStatus } from "../component/table_project_status"
import { ButtonFilterProjectActivitiesAnalytic } from "../component/button_filter_project-activities_analytic"

export function ActivitiesAnalyticProjects() {
    return (
        <>
            <Stack>
                <ButtonBack />
                <PageSubTitle text="LIST PROJECT" />
            </Stack>
            <ButtonFilterProjectActivitiesAnalytic />
            <TableProjectStatus />
        </>
    )
}