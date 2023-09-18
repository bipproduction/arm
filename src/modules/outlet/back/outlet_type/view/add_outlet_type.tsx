'use client'

import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global"
import { Box, Button, Divider, Grid, Modal, Stack, Text, TextInput } from "@mantine/core"
import { useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import { useState } from "react";
import toast from "react-simple-toasts";
import { isModalOutletType } from "../val/val_outlet_type";
import { ModalKonfirmasiOutletType } from "../component/modal_konfirmasi_add_outlet_type";

export function AddOutletType() {
    const focusTrapRef = useFocusTrap();
    const [valOpenModal, setOpenModal] = useAtom(isModalOutletType)
    const [formAddOutletType, setAddOutletType] = useState({ name: '' })

    function validasiOutlet() {
        if (Object.values(formAddOutletType).includes("")) return toast("The form cannot be empty", { theme: "dark" });
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
                                <Text>Create Outlet Type</Text>
                                <TextInput placeholder="Outlet Type Name" value={formAddOutletType.name} onChange={(val) =>
                                    setAddOutletType({
                                        ...formAddOutletType, name: val.target.value
                                    })}
                                />
                                <Button fullWidth radius={10} color="gray.7" onClick={validasiOutlet}>SUBMIT</Button>
                            </Stack>
                        </Box>
                    </Grid.Col>
                </Grid>
            </Box>
            {/* <Box pt={20}>
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
                                    FORM OUTLET TYPE
                                </Text>
                            }
                            size="md"
                            color="dark"
                        />
                        <Stack pt={10}>
                            <TextInput placeholder="Outlet Type Name" value={formAddOutletType.name} onChange={(val) =>
                                setAddOutletType({
                                    ...formAddOutletType, name: val.target.value
                                })}
                            />
                        </Stack>
                    </Box>
                </Box>

            </Box>
            <Grid pt={20}>
                <Grid.Col md={3} sm={12}>
                    <Button fullWidth radius={10} color="gray.7" onClick={validasiOutlet}>SUBMIT</Button>
                </Grid.Col>
            </Grid> */}
            <Modal
                size={"md"}
                opened={valOpenModal}
                onClose={() => setOpenModal(false)}
                centered
                withCloseButton={false}
                closeOnClickOutside={false}
            >
                <ModalKonfirmasiOutletType data={formAddOutletType} onSuccess={(val) => {
                    setAddOutletType({ name: '' })
                }} />
            </Modal>
        </>
    )
}