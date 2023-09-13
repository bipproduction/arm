'use client'

import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global"
import { Box, Button, Divider, Grid, Modal, SimpleGrid, Stack, Text, TextInput, Textarea } from "@mantine/core"
import { ModalKonfirmasiReimbursement } from "../component/modal_konfirmasi_reimbursement"
import { useAtom } from "jotai";
import { isModalReimbursement } from "../val/isModalReimbursement";
import { useFocusTrap } from "@mantine/hooks";

export function PaymentReimbursement() {
    const [valOpenModal, setOpenModal] = useAtom(isModalReimbursement);
    const focusTrapRef = useFocusTrap();
    function validasiReimbursement() {
        // validasi input dulu 
        setOpenModal(true);
    }
    return (
        <>
            <>
                <ButtonBack />
                <PageSubTitle text="PAYMENT REIMBURSEMENT" />
                <Box pt={20}>
                    <Box
                        sx={{
                            backgroundColor: COLOR.AbuMuda,
                            padding: 5,
                            borderRadius: 5,
                        }}
                        px={20}
                        mb={10}
                        py={20}
                    >
                        <Divider
                            mb={5}
                            label={
                                <Text fw={700} fz={17} color="dark.9">
                                    Detail Reimbursement
                                </Text>
                            }
                            size="md"
                            color="dark"
                        />
                        <Box pt={10}>
                            <Text>Event : We The Fest</Text>
                            <Text>Location : Jakarta Selatan</Text>
                            <Text>Date : 23 May 2023</Text>
                            <Text>Name : PT. Mekar Jaya</Text>
                            <Text>
                                .......... : ........... ......... ........... ...........
                            </Text>
                            <Text>
                                .......... : ........... ......... ........... ...........
                            </Text>
                            <Text>
                                .......... : ........... ......... ........... ...........
                            </Text>
                            <Text>
                                .......... : ........... ......... ........... ...........
                            </Text>
                            <Text>
                                .......... : ........... ......... ........... ...........
                            </Text>
                            <Text>
                                .......... : ........... ......... ........... ...........
                            </Text>
                            <Text>
                                .......... : ........... ......... ........... ...........
                            </Text>
                            <Text>
                                .......... : ........... ......... ........... ...........
                            </Text>
                            <Text>
                                .......... : ........... ......... ........... ...........
                            </Text>
                            <Text>
                                .......... : ........... ......... ........... ...........
                            </Text>
                            <Text>
                                .......... : ........... ......... ........... ...........
                            </Text>
                            <Text>
                                .......... : ........... ......... ........... ...........
                            </Text>
                            <Text>
                                .......... : ........... ......... ........... ...........
                            </Text>
                            <Text>
                                .......... : ........... ......... ........... ...........
                            </Text>
                            <Text>
                                .......... : ........... ......... ........... ...........
                            </Text>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            backgroundColor: COLOR.AbuMuda,
                            padding: 15,
                            borderRadius: 5,
                        }}
                        mt={20}
                    >
                        <Box ref={focusTrapRef}>
                            <Divider
                                my="xs"
                                label={
                                    <Text fw={700} fz={14} color="dark.9">
                                        FORM PAYMENT
                                    </Text>
                                }
                                size="md"
                                color="dark"
                            />
                            <Stack pt={10}>
                                <TextInput placeholder="Upload receipt" />
                                <TextInput placeholder="Form input" />
                                <Textarea placeholder="Note" />
                            </Stack>
                        </Box>
                    </Box>

                </Box>
                <Grid pt={20}>
                    <Grid.Col md={3} sm={12}>
                        <Button fullWidth radius={10} color="gray.7" onClick={validasiReimbursement}>SUBMIT</Button>
                    </Grid.Col>
                </Grid>
                {/* <ModalKonfirmasiReimbursement valOpenModal={valOpenModal} /> */}
                <Modal
                    size={"md"}
                    opened={valOpenModal}
                    onClose={() => setOpenModal(false)}
                    centered
                    withCloseButton={false}
                    closeOnClickOutside={false}
                >
                    <ModalKonfirmasiReimbursement />
                </Modal>
            </>
        </>
    )
}