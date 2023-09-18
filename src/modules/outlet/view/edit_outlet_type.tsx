'use client'

import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global"
import { Box, Button, Divider, Grid, Modal, Stack, Text, TextInput } from "@mantine/core"
import { ModalKonfirmasiEditOutletType } from "../component/modal_konfirmasi_edit_outlet_type"
import { useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import { isModalOutlet } from "../val/valOutlet";
import { useState } from "react";
import toast from "react-simple-toasts";

export function EditOutletType({ data }: { data: any }) {
    const focusTrapRef = useFocusTrap();
    const [valOpenModal, setOpenModal] = useAtom(isModalOutlet);
    const [formEdit, setFormEdit] = useState(data)

    function validasiOutletType() {
        if(Object.values(formEdit).includes("")) return toast("The form cannot be empty", { theme: "dark" }); 
        setOpenModal(true);
    }

    return (
        <>
            <ButtonBack />
            <PageSubTitle text="EDIT OUTLET TYPE" />
            <Box pt={20}>
                <Box
                    sx={{
                        backgroundColor: COLOR
                            .AbuMuda,
                        padding: 15,
                        borderRadius: 5,
                    }}
                >
                    <Box ref={focusTrapRef}>
                        <Divider
                            my="xs"
                            label={
                                <Text fw={700} fz={14} color="dark.9">
                                    FORM OUTLET TYPE
                                </Text>
                            }
                            size="md"
                            color="dark"
                        />
                        <Stack pt={10}>
                            <TextInput placeholder="Outlet Type Name" value={formEdit.name} onChange={(val) => {
                                setFormEdit({
                                    ...formEdit, name: val.target.value
                                })
                            }} />
                        </Stack>
                    </Box>
                </Box>

            </Box>
            <Grid pt={20}>
                <Grid.Col md={3} sm={12}>
                    <Button fullWidth radius={10} color="gray.7" onClick={validasiOutletType}>SUBMIT</Button>
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
                <ModalKonfirmasiEditOutletType data={formEdit} />
            </Modal>
        </>
    )
}