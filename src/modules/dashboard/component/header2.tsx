'use client'

import { ActionIcon, Box, Burger, Drawer, Flex, Group, Header, MediaQuery, NavLink, Text, TextInput, Title, createStyles, getStylesRef } from "@mantine/core"
import { useState } from "react"
import { BsFillCartFill } from "react-icons/bs"
import { FaUserCircle } from "react-icons/fa"
import { IoMdNotifications } from "react-icons/io"
import { menuDashboard } from "../val/data_menu"
import { usePathname, useRouter } from "next/navigation"
import { useMediaQuery, useViewportSize } from "@mantine/hooks"
import Notification from "./notification"

const data = menuDashboard
const useStyles = createStyles((theme) => ({
    link: {
        ...theme.fn.focusStyles(),
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        fontSize: theme.fontSizes.sm,
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[1]
                : theme.colors.gray[7],
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
            color: theme.colorScheme === "dark" ? theme.white : theme.black,

            [`& .${getStylesRef("icon")}`]: {
                color: theme.colorScheme === "dark" ? theme.white : theme.black,
            },
        },
    },

    linkIcon: {
        ref: getStylesRef("icon"),
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[2]
                : theme.colors.gray[6],
        marginRight: theme.spacing.sm,
    },

    linkActive: {
        "&, &:hover": {
            backgroundColor: theme.fn.variant({
                variant: "light",
                color: "grape.7",
            }).background,
            color: theme.fn.variant({ variant: "light", color: "grape.7" })
                .color,
            [`& .${getStylesRef("icon")}`]: {
                color: theme.fn.variant({ variant: "light", color: "grape.7" })
                    .color,
            },
        },
    },

    hiddenMobile: {
        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },
}));

export function HeaderDashboard2() {
    const [openDrawer, setOpenDrawer] = useState(false)
    const router = useRouter();
    const { classes, cx } = useStyles();
    const pathname = usePathname();
    const [active, setActive] = useState(pathname);
    const { height, width } = useViewportSize();

    return (
        <>
            <Header p={"sm"} height={60}>
                <Box>
                    <Group position="apart">
                        <Group>
                            {width > 576 && width < 768 && <Burger opened={openDrawer} onClick={() => setOpenDrawer(!openDrawer)} /> }
                            {/* <MediaQuery smallerThan={"md"} styles={{ display: 'none' }}>
                                <Burger opened={openDrawer} onClick={() => setOpenDrawer(!openDrawer)} />
                            </MediaQuery> */}
                            <Box>
                                <Box>
                                    <Text fz={25} fw={700}>
                                        A.R.M
                                    </Text>
                                </Box>
                            </Box>
                        </Group>
                        <Group position="apart">
                            <Box w={{ sm: 300, xl: 300, md: 300, lg: 300, base: 150 }}>
                                <TextInput placeholder="Search" />
                            </Box>
                            <ActionIcon component="a" color="dark" href="/dashboard/cart">
                                <BsFillCartFill size="20" />
                            </ActionIcon>
                            <Notification/>
                            <FaUserCircle size="20" />
                        </Group>
                    </Group>
                </Box>

            </Header>
            <Drawer opened={openDrawer} onClose={() => setOpenDrawer(false)}>
                {data.map((item) => {
                    return (
                        <NavLink
                            key={item.key}
                            className={cx(classes.link)}
                            icon={<item.icon size={20} />}
                            c={item.label ? "#61677A" : "dark"}
                            fw={item.label ? "bolder" : "normal"}
                            label={item.label}
                            onClick={() => {
                                router.push(item.link);
                                setActive(item.link);
                                setOpenDrawer(false);
                            }}
                        />
                    )
                })}
            </Drawer>
        </>
    )
}