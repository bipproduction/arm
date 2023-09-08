'use client'

import { ButtonBack, PageSubTitle } from "@/modules/_global"
import { Stack } from "@mantine/core"
import { ButtonFilterListAssetsCheckout } from "../component/button_filter_assets_checkout"
import { TableAssetsCheckout } from "../component/table_assets_checkout"

export function ListAssetsCheckout() {
    return (
        <>
            <Stack>
                <ButtonBack />
                <PageSubTitle text="LIST ASSETS CHECKOUT" />
            </Stack>
            <ButtonFilterListAssetsCheckout />
            <TableAssetsCheckout />
        </>
    )
}