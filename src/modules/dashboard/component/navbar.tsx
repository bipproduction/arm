'use client'

import { Anchor, Navbar, Text, createStyles, getStylesRef } from "@mantine/core"
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const data = [
    { key: 'md1', link: '/dashboard', label: 'Dashboard', },
    { key: 'md2', link: '/dashboard/activities', label: 'Activities', },
    { key: 'md3', link: '/dashboard/assets', label: 'Assets', },
    { key: 'md4', link: '/dashboard/bills', label: 'Bills & Reimbursements', },
    { key: 'md5', link: '/dashboard/insights', label: 'Insights', },
    { key: 'md6', link: '/dashboard/help', label: 'Help & Support', }
];

const useStyles = createStyles((theme) => ({

    link: {
        ...theme.fn.focusStyles(),
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: theme.fontSizes.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,

            [`& .${getStylesRef('icon')}`]: {
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,
            },
        },
    },

    linkIcon: {
        ref: getStylesRef('icon'),
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
        marginRight: theme.spacing.sm,
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
            [`& .${getStylesRef('icon')}`]: {
                color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
            },
        },
    },

    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
}));

export function NavbarDashboard() {
    const router = useRouter()
    const { classes, cx } = useStyles();
    const pathname = usePathname();
    const [active, setActive] = useState(pathname);
    const [opened, setOpened] = useState(false);
    return (
        <>
            <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                <Text>Application navbar</Text>
                <Navbar.Section grow>
                    {data.map((item) => {
                        return (
                            <Anchor href={item.link} key={item.key} className={cx(classes.link, { [classes.linkActive]: item.link === active })}>
                                <span>{item.label}</span>
                            </Anchor>
                        )
                    })}
                </Navbar.Section>
            </Navbar>
        </>
    )
}