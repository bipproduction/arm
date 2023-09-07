'use client'

import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global"
import { Box, Button, Divider, Grid, Group, SimpleGrid, Stack, Text, TextInput } from "@mantine/core"
import { useFocusTrap } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";

export function AddReimbursement() {
    const focusTrapRef = useFocusTrap();
    const router = useRouter();
    function createReimbursement(){
        toast("Success", { theme: "dark" });
        router.push('/dashboard/reimbursement')
    }
    return (
        <>
            <ButtonBack link="fdsf" />
            <PageSubTitle text="ADD REIMBURSEMENT" />
            <Box pt={20}>
                <Box
                    sx={{
                        backgroundColor: COLOR.AbuMuda,
                        padding: 15,
                        borderRadius: 5,
                    }}
                >
                    <Box ref={focusTrapRef}>
                        <Divider
                            my="xs"
                            label={
                                <Text fw={700} fz={14} color="dark.9">
                                    FORM REIMBURSEMENT
                                </Text>
                            }
                            size="md"
                            color="dark"
                        />
                        <Stack pt={10}>
                            <TextInput placeholder="Form input" />
                            <TextInput placeholder="Form input" />
                            <TextInput placeholder="Form input" />
                            <SimpleGrid
                                cols={2}
                                spacing="lg"
                                breakpoints={[
                                    { maxWidth: "sm", cols: 2, spacing: "sm" },
                                    { maxWidth: "xs", cols: 1, spacing: "sm" },
                                ]}
                            >
                                <TextInput placeholder="Form input" />
                                <TextInput placeholder="Form input" />
                            </SimpleGrid>
                            <SimpleGrid
                                cols={2}
                                spacing="lg"
                                breakpoints={[
                                    { maxWidth: "sm", cols: 2, spacing: "sm" },
                                    { maxWidth: "xs", cols: 1, spacing: "sm" },
                                ]}
                            >
                                <TextInput placeholder="Form input" />
                                <TextInput placeholder="Form input" />
                            </SimpleGrid>
                            <SimpleGrid
                                cols={2}
                                spacing="lg"
                                breakpoints={[
                                    { maxWidth: "sm", cols: 2, spacing: "sm" },
                                    { maxWidth: "xs", cols: 1, spacing: "sm" },
                                ]}
                            >
                                <TextInput placeholder="Form input" />
                                <TextInput placeholder="Form input" />
                            </SimpleGrid>
                        </Stack>
                    </Box>
                </Box>

            </Box>
            <Grid pt={20}>
                <Grid.Col md={3} sm={12}>
                    <Button fullWidth radius={10} color="gray.7" onClick={createReimbursement}>SUBMIT</Button>
                </Grid.Col>
            </Grid>
        </>
    )
}