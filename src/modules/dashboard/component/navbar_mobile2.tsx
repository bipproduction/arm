'use client'

import { ActionIcon, Box, Center, Flex, Group, Text, Title } from "@mantine/core"
import { menuDashboard } from "../val/data_menu"
import { useRouter } from "next/navigation";
import { menuDashboardSuperAdmin } from "../val/data_menu_super_admin";

const data = menuDashboard

export function NavbarMobile2({ role }: { role: number }) {
    const router = useRouter()

    let data = menuDashboard
    if (role == 5) {
        data = menuDashboardSuperAdmin
    }
    
    return (
        <>
            <Group spacing="xs" grow position="center">
                {data.map((item) => {
                    return (
                        <Box
                            style={{ cursor: "pointer", textDecoration: "none" }}
                            key={item.key}
                            m={9}
                            onClick={() => router.push(item.link)}
                        >
                            <Center>
                                <ActionIcon color={"gray.0"}>
                                    <item.icon size="20" />
                                </ActionIcon>
                            </Center>
                            <Text ta={"center"} color={"white"} fz={8}>{item.labelMobile}</Text>
                        </Box>
                    )
                })}
            </Group>
        </>
    )
}