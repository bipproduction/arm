'use client'

import { ButtonBack, COLOR } from "@/modules/_global"
import { Box, Button, Grid, Modal, Stack, Text, TextInput } from "@mantine/core"
import { useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import { isModalClient } from "../val/isModalClient";
import { useState } from "react";
import toasts from "react-simple-toasts";
import { ModalKonfirmasiAddClient } from "../component/modal_konfirmasi_add_client";

export default function CreateClient() {
    const [valOpenCreateClient, setOpenCreateClient] = useAtom(isModalClient);
    const [dataClient, setDataClient] = useState({
        name: "",
        phone: "",
        address: "",
    });
    const focusTrapRef = useFocusTrap();

    function validasiCreate() {
        if (Object.values(dataClient).includes(""))
            return toasts("The form cannot be empty", { theme: "dark" });
        setOpenCreateClient(true);
    }
    return (
        <>
            <Stack>
                <ButtonBack />
            </Stack>
            <Box pt={20}>
                <Grid>
                    <Grid.Col md={6} xl={6} lg={6} sm={10}>
                        <Box
                            sx={{
                                border: `1px solid ${COLOR.AbuMuda}`,
                                padding: 20,
                                borderRadius: 10,
                            }}
                            ref={focusTrapRef}
                        >
                            <Stack>
                                <Text>Create Client</Text>
                                <TextInput
                                    placeholder="Name"
                                    value={dataClient.name}
                                    onChange={(val) =>
                                        setDataClient({
                                            ...dataClient,
                                            name: val.target.value,
                                        })
                                    }
                                />
                                <TextInput
                                    placeholder="Phone"
                                    value={dataClient.phone}
                                    onChange={(val) =>
                                        setDataClient({
                                            ...dataClient,
                                            phone: val.target.value,
                                        })
                                    }
                                />
                                <TextInput
                                    placeholder="Address"
                                    value={dataClient.address}
                                    onChange={(val) =>
                                        setDataClient({
                                            ...dataClient,
                                            address: val.target.value,
                                        })
                                    }
                                />
                                <Button color="gray.7" onClick={validasiCreate}>
                                    SUBMIT
                                </Button>
                            </Stack>
                        </Box>
                    </Grid.Col>
                </Grid>
            </Box>
            <Modal
                size={"md"}
                opened={valOpenCreateClient}
                onClose={() => setOpenCreateClient(false)}
                centered
                withCloseButton={false}
                closeOnClickOutside={false}
            >
                <ModalKonfirmasiAddClient data={dataClient} onSuccess={() => 
                    setDataClient({ name: '', phone: '', address: '' })
                } />
            </Modal>
        </>
    )
}