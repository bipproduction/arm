'use client'

import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global"
import { Box, Button, Divider, Grid, Modal, Stack, Text, TextInput } from "@mantine/core"
import { ModalKonfirmasiEditOutletType } from "../component/modal_konfirmasi_edit_outlet_type"
import { useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import { useState } from "react";
import toast from "react-simple-toasts";
import { isModalOutletType } from "../val/val_outlet_type";

export function EditOutletType({ data }: { data: any }) {
    const focusTrapRef = useFocusTrap();
    const [valOpenModal, setOpenModal] = useAtom(isModalOutletType);
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
                                <Text>Edit Outlet Type</Text>
                                <TextInput placeholder="Outlet Type Name" value={formEdit.name} onChange={(val) => {
                                    setFormEdit({
                                        ...formEdit, name: val.target.value
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
                <ModalKonfirmasiEditOutletType data={formEdit} />
            </Modal>
        </>
    )
}