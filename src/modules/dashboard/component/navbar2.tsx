'use client'

import { NavLink, Navbar, ScrollArea, createStyles, getStylesRef } from "@mantine/core"
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { MdSettings } from "react-icons/md";
import { menuDashboard } from "../val/data_menu";

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

export function NavbarDashboard2() {
    const [opened, setOpened] = useState(false);
    const router = useRouter();
    const { classes, cx } = useStyles();
    const pathname = usePathname();
    const [active, setActive] = useState(pathname);
    return (
        <>
            <Navbar hiddenBreakpoint="sm" p="md" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                <Navbar.Section grow component={ScrollArea}>
                    {data.map((item) => {
                        return (
                            <NavLink
                                key={item.key}
                                className={cx(classes.link, {
                                    [classes.linkActive]: item.link === active,
                                })}
                                icon={<item.icon size={20} />}
                                c={item.label ? "#61677A" : "dark"}
                                fw={item.label ? "bolder" : "normal"}
                                label={item.label}
                                onClick={() => { router.push(item.link); setActive(item.link) }}
                            />
                        );
                    })}
                </Navbar.Section>
            </Navbar>
        </>
    )
}