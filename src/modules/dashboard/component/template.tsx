'use client'

import { AppShell, useMantineTheme } from "@mantine/core"
import { NavbarDashboard } from "./navbar"
import { HeaderDashboard } from "./header"


export function Dashboard({ children }: { children: React.ReactNode }) {
    const theme = useMantineTheme();
    return (
        <>
            <AppShell
                styles={{
                    main: {
                        background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                    },
                }}
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                navbar={
                    <NavbarDashboard />
                }

                header={
                    <HeaderDashboard />
                }
            >
                {children}
            </AppShell>
        </>
    )
}