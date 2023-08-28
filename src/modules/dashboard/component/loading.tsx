'use client'

import { Center, Loader } from "@mantine/core"

export function LoadingDashboard() {
    return (
        <>
            <Center h={100} mx="auto">
                <Loader size="xl" variant="dots" />
            </Center>

        </>
    )
}