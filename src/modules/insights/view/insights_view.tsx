'use client'
import { Button, Grid, Group, Paper, Text, ThemeIcon, createStyles, rem } from "@mantine/core";
import { MdOutlineAreaChart, MdOutlineAutoGraph, MdOutlineFolderCopy, MdOutlineHomeWork, MdOutlineInventory2 } from "react-icons/md";

const ICON_SIZE = rem(60);

const useStyles = createStyles((theme) => ({
    card: {
        position: 'relative',
        overflow: 'visible',
        padding: theme.spacing.xl,
        paddingTop: `calc(${theme.spacing.xl} * 1.5 + ${ICON_SIZE} / 3)`,
    },

    icon: {
        position: 'absolute',
        top: `calc(-${ICON_SIZE} / 3)`,
        left: `calc(50% - ${ICON_SIZE} / 2)`,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1,
    },
}));

export function InsightsView() {
    const { classes } = useStyles();
    return (
        <>
            <Grid grow>
                <Grid.Col span={4}>
                    <Paper radius="md" withBorder className={classes.card} mt={`calc(${ICON_SIZE} / 3)`}>
                        <ThemeIcon className={classes.icon} bg={"grey"} size={ICON_SIZE} radius={ICON_SIZE}>
                            <MdOutlineHomeWork size="2rem" stroke={1.5} />
                        </ThemeIcon>

                        <Text ta="center" fw={"bold"} className={classes.title}>
                            OUTLET DATABASE
                        </Text>


                        <Button fullWidth variant="filled"bg={"grey"} mt={30}>VIEW DETAIL</Button>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Paper radius="md" withBorder className={classes.card} mt={`calc(${ICON_SIZE} / 3)`}>
                        <ThemeIcon className={classes.icon} bg={"grey"} size={ICON_SIZE} radius={ICON_SIZE}>
                            <MdOutlineInventory2 size="2rem" stroke={1.5} />
                        </ThemeIcon>

                        <Text ta="center" fw={"bold"} className={classes.title}>
                            LOGISTIC REPORTS
                        </Text>


                        <Button fullWidth variant="filled"bg={"grey"} mt={30}>VIEW DETAIL</Button>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Paper radius="md" withBorder className={classes.card} mt={`calc(${ICON_SIZE} / 3)`}>
                        <ThemeIcon className={classes.icon} bg={"grey"} size={ICON_SIZE} radius={ICON_SIZE}>
                            <MdOutlineFolderCopy size="2rem" stroke={1.5} />
                        </ThemeIcon>

                        <Text ta="center" fw={"bold"} className={classes.title}>
                            PROJECT REPORTS
                        </Text>


                        <Button fullWidth variant="filled"bg={"grey"} mt={30}>VIEW DETAIL</Button>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Paper radius="md" withBorder className={classes.card} mt={`calc(${ICON_SIZE} / 3)`}>
                        <ThemeIcon className={classes.icon} bg={"grey"} size={ICON_SIZE} radius={ICON_SIZE}>
                            <MdOutlineAreaChart size="2rem" stroke={1.5} />
                        </ThemeIcon>

                        <Text ta="center" fw={"bold"} className={classes.title}>
                            SPENDING ANALYTICS
                        </Text>


                        <Button fullWidth variant="filled"bg={"grey"} mt={30}>VIEW DETAIL</Button>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Paper radius="md" withBorder className={classes.card} mt={`calc(${ICON_SIZE} / 3)`}>
                        <ThemeIcon className={classes.icon} bg={"grey"} size={ICON_SIZE} radius={ICON_SIZE}>
                            <MdOutlineAutoGraph size="2rem" stroke={1.5} />
                        </ThemeIcon>

                        <Text ta="center" fw={"bold"} className={classes.title}>
                            ACTIVITIES ANALYTICS
                        </Text>


                        <Button fullWidth variant="filled"bg={"grey"} mt={30}>VIEW DETAIL</Button>
                    </Paper>
                </Grid.Col>
            </Grid>
        </>
    )
}