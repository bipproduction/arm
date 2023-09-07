'use client'

import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global"
import { Box, Button, Divider, Grid, Modal, SimpleGrid, Stack, Text, TextInput } from "@mantine/core"
import { ModalKonfirmasiOutlet } from "../component/modal_konfirmasi_outlet"
import { useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import { isModalOutlet } from "../val/isModalOutlet";

export function EditOutlet() {
    const focusTrapRef = useFocusTrap();
    const [valOpenModal, setOpenModal] = useAtom(isModalOutlet)

    function validasiOutlet() {
        setOpenModal(true);
    }
    return (
        <>
            <ButtonBack />
            <PageSubTitle text="EDIT OUTLET" />
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
                                    FORM OUTLET
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
                    <Button fullWidth radius={10} color="gray.7" onClick={validasiOutlet}>SUBMIT</Button>
                </Grid.Col>
            </Grid>
            <Modal
                size={"md"}
                opened={valOpenModal}
                onClose={() => setOpenModal(false)}
                centered
                withCloseButton={false}
                closeOnClickOutside={false}
            >
                <ModalKonfirmasiOutlet />
            </Modal>
        </>
    )
}