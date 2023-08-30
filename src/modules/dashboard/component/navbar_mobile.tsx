'use client'

import { isMobile } from "@/modules/_global";
import { ActionIcon, Group, createStyles, rem } from "@mantine/core"
import { useAtom } from "jotai";
import { AiOutlineHome } from "react-icons/ai"

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: rem(120),
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
        position:'sticky',
        bottom:0

    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${theme.spacing.md} ${theme.spacing.md}`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.lg,
            marginBottom: theme.spacing.sm,
        },
    },
}));

export function NavbarMobile() {
    const { classes } = useStyles();
    const [valMobile, setMobile] = useAtom(isMobile)
    if(!valMobile) return <></>
    return (
        <>
            <div className={classes.footer}>
                <div className={classes.inner}>
                    <Group spacing="xs" position="center" noWrap>
                        <ActionIcon size="lg" variant="default" radius="xl">
                            <AiOutlineHome size="1.05rem" stroke={1.5} />
                        </ActionIcon>
                        <ActionIcon size="lg" variant="default" radius="xl">
                            <AiOutlineHome size="1.05rem" stroke={1.5} />
                        </ActionIcon>
                        <ActionIcon size="lg" variant="default" radius="xl">
                            <AiOutlineHome size="1.05rem" stroke={1.5} />
                        </ActionIcon>
                    </Group>
                </div>
            </div>
        </>
    )
}