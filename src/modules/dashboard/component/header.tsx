'use client'

import { isMobile } from "@/modules/_global";
import { Box, Burger, Group, Header, MediaQuery, Text, TextInput } from "@mantine/core"
import { useAtom } from "jotai";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { isBurger } from "../val/isBurger";

export function HeaderDashboard() {
    const [opened, setOpened] = useAtom(isBurger);
    const [inpMobile, setMobile] = useAtom(isMobile)
    return (
        <>
            <Header height={{ base: 50, md: 70 }} pl={20}>
                {/* Ukuran Mobile */}
                {inpMobile && (
                    <Group position="apart" pt={5} pr={5} >
                        <Box>
                            <Text fz={25} fw={700}>
                                A.R.M
                            </Text>
                        </Box>
                        <Group>
                            <Box w={130}>
                                <TextInput placeholder="Search" />
                            </Box>
                            <BsFillCartFill size="20" />
                            <IoMdNotifications size="20" />
                            <FaUserCircle size="20" />
                        </Group>
                    </Group>
                )}
                <Box>
                    <Box>
                        {/* Ukuran Normal And Burger */}
                        <Group position="apart">
                            {!inpMobile && (
                                <Group>
                                    <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                                        <Burger
                                            opened={opened}
                                            onClick={() => setOpened((o) => !o)}
                                            size="sm"
                                            color={"gray"}
                                            mr="xs"
                                            mt={11}
                                        />
                                    </MediaQuery>
                                    <Box pt={{ sm: 15, base: 5 }}>
                                        <Box>
                                            <Text fz={25} fw={700}>
                                                A.R.M
                                            </Text>
                                        </Box>
                                    </Box>
                                </Group>
                            )}
                            {!inpMobile && (
                                <Group position="apart" pt={{ sm: 10, xl: 15, md: 15, lg: 15, base: 5 }} pr={{ sm: 15, xl: 15, base: 5 }}>
                                    <Box w={150}>
                                        <TextInput placeholder="Search" />
                                    </Box>
                                    <BsFillCartFill size="20" />
                                    <IoMdNotifications size="20" />
                                    <FaUserCircle size="20" />
                                </Group>
                            )}
                        </Group>
                    </Box>
                </Box>
            </Header>
        </>
    )
}