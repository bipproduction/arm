'use client'

import { Burger, Header, MediaQuery, Text } from "@mantine/core"
import { useState } from "react";

export function HeaderDashboard() {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <Header height={{ base: 50, md: 70 }} p="md">
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                        <Burger
                            opened={opened}
                            onClick={() => setOpened((o) => !o)}
                            size="sm"
                            color={'gray'}
                            mr="xl"
                        />
                    </MediaQuery>

                    <Text>Application header</Text>
                </div>
            </Header>
        </>
    )
}