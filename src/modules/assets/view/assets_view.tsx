'use client'

import { PageTitle } from "@/modules/_global";
import { ActionIcon, Card, Grid, Group, Image, Pagination, Text, Title, createStyles, rem } from "@mantine/core"
import { MdOutlineDriveFileRenameOutline, MdOutlinePrint } from "react-icons/md";
const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    footer: {
        padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
        marginTop: theme.spacing.md,
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
    },
}));


export function AssetsView() {
    const { classes, theme } = useStyles();
    return (
        <>
            <PageTitle text="ASSETS" />
            <Grid>
                <Grid.Col span={3}>
                    <Card withBorder padding="lg" radius="md" className={classes.card}>
                        <Card.Section mb="sm">
                            <Image src={"../img/meja.jpeg"} alt="Meja portable" height={180} />
                        </Card.Section>

                        <Text fw={700} className={classes.title} mt="xs">
                            MEJA KAYU
                        </Text>
                        <Card.Section className={classes.footer}>
                            <Group position="apart">
                                <Group spacing={0}>
                                    <ActionIcon>
                                        <MdOutlineDriveFileRenameOutline size="1.2rem" color={theme.colors.red[6]} stroke={1.5} />
                                    </ActionIcon>
                                    <ActionIcon>
                                        <MdOutlinePrint size="1.2rem" color={theme.colors.yellow[6]} stroke={1.5} />
                                    </ActionIcon>
                                </Group>
                                <Group spacing={0}>
                                    <Text fz="xs" c="dimmed">
                                        QTY
                                    </Text>
                                    <Title weight={"bold"} size="h1">
                                        12
                                    </Title>
                                </Group>
                            </Group>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={3}>
                    <Card withBorder padding="lg" radius="md" className={classes.card}>
                        <Card.Section mb="sm">
                            <Image src={"../img/meja.jpeg"} alt="Meja portable" height={180} />
                        </Card.Section>

                        <Text fw={700} className={classes.title} mt="xs">
                            MEJA KAYU
                        </Text>
                        <Card.Section className={classes.footer}>
                            <Group position="apart">
                                <Group spacing={0}>
                                    <ActionIcon>
                                        <MdOutlineDriveFileRenameOutline size="1.2rem" color={theme.colors.red[6]} stroke={1.5} />
                                    </ActionIcon>
                                    <ActionIcon>
                                        <MdOutlinePrint size="1.2rem" color={theme.colors.yellow[6]} stroke={1.5} />
                                    </ActionIcon>
                                </Group>
                                <Group spacing={0}>
                                    <Text fz="xs" c="dimmed">
                                        QTY
                                    </Text>
                                    <Title weight={"bold"} size="h1">
                                        12
                                    </Title>
                                </Group>
                            </Group>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={3}>
                    <Card withBorder padding="lg" radius="md" className={classes.card}>
                        <Card.Section mb="sm">
                            <Image src={"../img/meja.jpeg"} alt="Meja portable" height={180} />
                        </Card.Section>

                        <Text fw={700} className={classes.title} mt="xs">
                            MEJA KAYU
                        </Text>
                        <Card.Section className={classes.footer}>
                            <Group position="apart">
                                <Group spacing={0}>
                                    <ActionIcon>
                                        <MdOutlineDriveFileRenameOutline size="1.2rem" color={theme.colors.red[6]} stroke={1.5} />
                                    </ActionIcon>
                                    <ActionIcon>
                                        <MdOutlinePrint size="1.2rem" color={theme.colors.yellow[6]} stroke={1.5} />
                                    </ActionIcon>
                                </Group>
                                <Group spacing={0}>
                                    <Text fz="xs" c="dimmed">
                                        QTY
                                    </Text>
                                    <Title weight={"bold"} size="h1">
                                        12
                                    </Title>
                                </Group>
                            </Group>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={3}>
                    <Card withBorder padding="lg" radius="md" className={classes.card}>
                        <Card.Section mb="sm">
                            <Image src={"../img/meja.jpeg"} alt="Meja portable" height={180} />
                        </Card.Section>

                        <Text fw={700} className={classes.title} mt="xs">
                            MEJA KAYU
                        </Text>
                        <Card.Section className={classes.footer}>
                            <Group position="apart">
                                <Group spacing={0}>
                                    <ActionIcon>
                                        <MdOutlineDriveFileRenameOutline size="1.2rem" color={theme.colors.red[6]} stroke={1.5} />
                                    </ActionIcon>
                                    <ActionIcon>
                                        <MdOutlinePrint size="1.2rem" color={theme.colors.yellow[6]} stroke={1.5} />
                                    </ActionIcon>
                                </Group>
                                <Group spacing={0}>
                                    <Text fz="xs" c="dimmed">
                                        QTY
                                    </Text>
                                    <Title weight={"bold"} size="h1">
                                        12
                                    </Title>
                                </Group>
                            </Group>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={3}>
                    <Card withBorder padding="lg" radius="md" className={classes.card}>
                        <Card.Section mb="sm">
                            <Image src={"../img/meja.jpeg"} alt="Meja portable" height={180} />
                        </Card.Section>

                        <Text fw={700} className={classes.title} mt="xs">
                            MEJA KAYU
                        </Text>
                        <Card.Section className={classes.footer}>
                            <Group position="apart">
                                <Group spacing={0}>
                                    <ActionIcon>
                                        <MdOutlineDriveFileRenameOutline size="1.2rem" color={theme.colors.red[6]} stroke={1.5} />
                                    </ActionIcon>
                                    <ActionIcon>
                                        <MdOutlinePrint size="1.2rem" color={theme.colors.yellow[6]} stroke={1.5} />
                                    </ActionIcon>
                                </Group>
                                <Group spacing={0}>
                                    <Text fz="xs" c="dimmed">
                                        QTY
                                    </Text>
                                    <Title weight={"bold"} size="h1">
                                        12
                                    </Title>
                                </Group>
                            </Group>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={3}>
                    <Card withBorder padding="lg" radius="md" className={classes.card}>
                        <Card.Section mb="sm">
                            <Image src={"../img/meja.jpeg"} alt="Meja portable" height={180} />
                        </Card.Section>

                        <Text fw={700} className={classes.title} mt="xs">
                            MEJA KAYU
                        </Text>
                        <Card.Section className={classes.footer}>
                            <Group position="apart">
                                <Group spacing={0}>
                                    <ActionIcon>
                                        <MdOutlineDriveFileRenameOutline size="1.2rem" color={theme.colors.red[6]} stroke={1.5} />
                                    </ActionIcon>
                                    <ActionIcon>
                                        <MdOutlinePrint size="1.2rem" color={theme.colors.yellow[6]} stroke={1.5} />
                                    </ActionIcon>
                                </Group>
                                <Group spacing={0}>
                                    <Text fz="xs" c="dimmed">
                                        QTY
                                    </Text>
                                    <Title weight={"bold"} size="h1">
                                        12
                                    </Title>
                                </Group>
                            </Group>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={3}>
                    <Card withBorder padding="lg" radius="md" className={classes.card}>
                        <Card.Section mb="sm">
                            <Image src={"../img/meja.jpeg"} alt="Meja portable" height={180} />
                        </Card.Section>

                        <Text fw={700} className={classes.title} mt="xs">
                            MEJA KAYU
                        </Text>
                        <Card.Section className={classes.footer}>
                            <Group position="apart">
                                <Group spacing={0}>
                                    <ActionIcon>
                                        <MdOutlineDriveFileRenameOutline size="1.2rem" color={theme.colors.red[6]} stroke={1.5} />
                                    </ActionIcon>
                                    <ActionIcon>
                                        <MdOutlinePrint size="1.2rem" color={theme.colors.yellow[6]} stroke={1.5} />
                                    </ActionIcon>
                                </Group>
                                <Group spacing={0}>
                                    <Text fz="xs" c="dimmed">
                                        QTY
                                    </Text>
                                    <Title weight={"bold"} size="h1">
                                        12
                                    </Title>
                                </Group>
                            </Group>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={3}>
                    <Card withBorder padding="lg" radius="md" className={classes.card}>
                        <Card.Section mb="sm">
                            <Image src={"../img/meja.jpeg"} alt="Meja portable" height={180} />
                        </Card.Section>

                        <Text fw={700} className={classes.title} mt="xs">
                            MEJA KAYU
                        </Text>
                        <Card.Section className={classes.footer}>
                            <Group position="apart">
                                <Group spacing={0}>
                                    <ActionIcon>
                                        <MdOutlineDriveFileRenameOutline size="1.2rem" color={theme.colors.red[6]} stroke={1.5} />
                                    </ActionIcon>
                                    <ActionIcon>
                                        <MdOutlinePrint size="1.2rem" color={theme.colors.yellow[6]} stroke={1.5} />
                                    </ActionIcon>
                                </Group>
                                <Group spacing={0}>
                                    <Text fz="xs" c="dimmed">
                                        QTY
                                    </Text>
                                    <Title weight={"bold"} size="h1">
                                        12
                                    </Title>
                                </Group>
                            </Group>
                        </Card.Section>
                    </Card>
                </Grid.Col>
            </Grid>

            <Group position="right" pt={10}>
                <Pagination total={10} />
            </Group>
        </>
    )
}