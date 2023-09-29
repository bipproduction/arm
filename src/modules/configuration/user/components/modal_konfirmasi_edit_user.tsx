'use client'

import { Alert, Box, Button, Group, Text } from "@mantine/core"
import { useAtom } from "jotai"
import toast from "react-simple-toasts"
import { funUserLog } from "@/modules/_global"
import { isModalUserConf } from "../val/isModaluser"
import { funUpdateUser } from "../fun/upd_user"

export function ModalKonfirmasiEditUser({ data }: { data: any }) {
    const [openModal, setOpenModal] = useAtom(isModalUserConf)
    async function updUser() {
        const edit = await funUpdateUser({ data: data })
        if (!edit.success) return toast(edit.message, { theme: "dark" });
        await funUserLog({ activity: "EDIT", desc: "User Edit Data User/Profile" })
        toast("Success", { theme: "dark" });
        setOpenModal(false);
    }
    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>ARE YOU SURE TO SAVE USER?</Text>
                    <Group position="apart" pt={10}>
                        <Button
                            radius={10}
                            color="gray.7"
                            w={150}
                            onClick={() => setOpenModal(false)}
                        >
                            NO
                        </Button>
                        <Button
                            radius={10}
                            color="gray.7"
                            w={150}
                            onClick={updUser}
                        >
                            YES
                        </Button>
                    </Group>
                </Alert>
            </Box>
        </>
    )
}