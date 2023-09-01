'use client'

import { isMobile } from "@/modules/_global";
import { Burger, Header, MediaQuery, Text } from "@mantine/core"
import { useAtom } from "jotai";
import { useState } from "react";

export function HeaderDashboard() {
    const [opened, setOpened] = useState(false);
    const [inpMobile, setMobile] = useAtom(isMobile)
    return (
        <>
            <Header height={{ base: 50, md: 70 }} p="md">
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    {!inpMobile &&                   
                    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                        <Burger
                            opened={opened}
                            onClick={() => setOpened((o) => !o)}
                            size="sm"
                            color={'gray'}
                            mr="xl"
                        />
                    </MediaQuery>
                    }

                    <Text fz={25} fw={700}>A.R.M</Text>
                </div>
            </Header>
        </>
    )
}