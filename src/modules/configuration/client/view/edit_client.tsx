'use client'

import { ButtonBack, COLOR } from "@/modules/_global"
import { Box, Button, Grid, Modal, Stack, Text, TextInput } from "@mantine/core"
import { useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import { isModalClient } from "../val/isModalClient";
import { useState } from "react";
import toast from "react-simple-toasts";
import { ModalKonfirmasiEditClient } from "../component/modal_konfirmasi_edit_client";

export function EditClient({ data }: { data: any }) {

    const focusTrapRef = useFocusTrap();
    const [valOpenModal, setOpenModal] = useAtom(isModalClient);
    const [formEdit, setFormEdit] = useState(data)

    function validasiOutletType() {
        if (Object.values(formEdit).includes(""))
            return toast("The form cannot be empty", { theme: "dark" });
        setOpenModal(true);
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
                                <Text>Edit Client</Text>
                                <TextInput placeholder="Name" value={formEdit.name} onChange={(val) => {
                                    setFormEdit({
                                        ...formEdit, name: val.target.value
                                    })
                                }} />
                                <TextInput placeholder="Phone" value={formEdit.phone} onChange={(val) => {
                                    setFormEdit({
                                        ...formEdit, phone: val.target.value
                                    })
                                }} />

                                <TextInput placeholder="Address" value={formEdit.address} onChange={(val) => {
                                    setFormEdit({
                                        ...formEdit, address: val.target.value
                                    })
                                }} />
                                <Button fullWidth radius={10} color="gray.7" onClick={validasiOutletType}>SUBMIT</Button>
                            </Stack>
                        </Box>
                    </Grid.Col>
                </Grid>
            </Box>
            <Modal
                size={"md"}
                opened={valOpenModal}
                onClose={() => setOpenModal(false)}
                centered
                withCloseButton={false}
                closeOnClickOutside={false}
            >
                <ModalKonfirmasiEditClient data={formEdit} />
            </Modal>
        </>
    )
}