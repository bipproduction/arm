'use client'

import { Box, Button, Grid, Modal, MultiSelect, Select, Stack, Text, TextInput } from "@mantine/core";
import { useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import toast from "react-simple-toasts";
import { isModalUserConf } from "../val/isModaluser";
import { useState } from "react";
import { ButtonBack, COLOR } from "@/modules/_global";
import { ModalKonfirmasiEditUser } from "../components/modal_konfirmasi_edit_user";


export function EditUser({ data, role }: { data: any, role: any }) {
    const focusTrapRef = useFocusTrap();
    const [valOpenModal, setOpenModal] = useAtom(isModalUserConf);
    const [formEdit, setFormEdit] = useState(data)
    const [listRole, setListRole] = useState<any[]>(role);

    function validasiUser() {
        if (Object.values([formEdit.email, formEdit.address, formEdit.name, formEdit.phone]).includes(""))
            return toast("The form cannot be empty", { theme: "dark" });
        if (formEdit.role.length < 1 || (formEdit.role.length == 1 && formEdit.role[0] == ""))
            return toast("User role cannot be empty", { theme: "dark" });
        setOpenModal(true);
    }
    return (
        <>
            <Stack>
                <ButtonBack />
            </Stack>
            <Box pt={20} ref={focusTrapRef}>
                <Grid>
                    <Grid.Col md={6} xl={6} lg={6} sm={10}>
                        <Box
                            sx={{
                                border: `1px solid ${COLOR.AbuMuda}`,
                                padding: 20,
                                borderRadius: 10,
                            }}
                        >
                            <Stack>
                                <Text> Edit User</Text>
                                <TextInput
                                    value={formEdit.name}
                                    placeholder="Name"
                                    onChange={(val) =>
                                        setFormEdit({
                                            ...formEdit,
                                            name: val.target.value,
                                        })
                                    }
                                />
                                {/* <Select
                                    data={listClient.map((cl) => ({
                                        value: cl.id,
                                        label: cl.name,
                                    }))}
                                    radius="sm"
                                    w={"100%"}
                                    onChange={(val: any) => {
                                        // formEdit.idClient = val!;
                                        cekClient({ val: val });
                                    }}
                                    value={formEdit.idClient}
                                    searchable
                                    placeholder="Client"
                                    rightSection={formEdit.idClient && (
                                        <Button.Group mr={23}>
                                            <Button
                                                variant="transparent"
                                                color="gray.7"
                                                onClick={(v) => {
                                                    cekClient({ val: null });
                                                }}
                                            >
                                                <MdClose size="21" />
                                            </Button>
                                        </Button.Group>
                                    )

                                    }
                                /> */}
                                <TextInput
                                    value={formEdit.email}
                                    placeholder="Email"
                                    onChange={(val) =>
                                        setFormEdit({
                                            ...formEdit,
                                            email: val.target.value,
                                        })
                                    }
                                />
                                <TextInput
                                    value={formEdit.phone}
                                    placeholder="Phone"
                                    onChange={(val) =>
                                        setFormEdit({
                                            ...formEdit,
                                            phone: val.target.value,
                                        })
                                    }
                                />
                                <TextInput
                                    value={formEdit.address}
                                    placeholder="Address"
                                    onChange={(val) =>
                                        setFormEdit({
                                            ...formEdit,
                                            address: val.target.value,
                                        })
                                    }
                                />
                                <MultiSelect
                                    placeholder="User Role"
                                    data={listRole.map((ag) => ({
                                        value: ag.id,
                                        label: ag.role,
                                    }))}
                                    value={
                                        !formEdit
                                            ? []
                                            : !formEdit.role
                                                ? []
                                                : formEdit.role.map((v: any) => v)
                                    }
                                    onChange={(value) => {
                                        setFormEdit({ ...formEdit, role: value })
                                    }}
                                />

                                <Button color="gray.7"
                                    onClick={validasiUser}
                                >
                                    SUBMIT
                                </Button>
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
                <ModalKonfirmasiEditUser data={formEdit} />
            </Modal>
        </>
    )
}