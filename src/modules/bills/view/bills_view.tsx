'use client'

import { PageTitle } from "@/modules/_global"
import { Box, Grid, Text } from "@mantine/core"
import { InvoiceLayout } from "../component/invoice_layout"
import { BillLayout } from "../component/bill_layout"
import { ReimbursementLayout } from "../component/reimbursement_layout"

export function BillsView() {
    return (
        <>
            <Box pt={20}>
                <PageTitle text="Bills & Reimbursements" />
            </Box>
            <Grid>
                <Grid.Col md={6}>
                    <InvoiceLayout />
                </Grid.Col>
                <Grid.Col md={6}>
                    <BillLayout />
                </Grid.Col>
            </Grid>
            <ReimbursementLayout />
        </>
    )
}