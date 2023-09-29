'use client'

import { Alert, Box, Button, Group, Text } from "@mantine/core"
import { useAtom } from "jotai"
import { isModalClient } from "../val/isModalClient"
import { funUpdclient } from "../fun/upd_client"
import toast from "react-simple-toasts"
import { funUserLog } from "@/modules/_global"

export function ModalKonfirmasiEditClient({ data }: { data: any }) {
    const [openModal, setOpenModal] = useAtom(isModalClient)
    async function updClient() {
        const edit = await funUpdclient({ data: data })
        if (!edit.success) return toast(edit.message, { theme: "dark" });
        await funUserLog({activity: "EDIT", desc: "User Edit Client"})
        toast("Success", { theme: "dark" });
        setOpenModal(false);
    }
    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>ARE YOU SURE TO SAVE CLIENT?</Text>
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
                            onClick={updClient}
                        >
                            YES
                        </Button>
                    </Group>
                </Alert>
            </Box>
        </>
    )
}