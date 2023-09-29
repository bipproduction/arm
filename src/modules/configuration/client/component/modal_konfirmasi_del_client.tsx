'use client'

import { Alert, Box, Button, Center, Group, Text } from "@mantine/core"
import { useAtom } from "jotai"
import toast from "react-simple-toasts"
import "react-simple-toasts/dist/theme/dark.css"
import { useRouter } from "next/navigation"
import { isModalClient } from "../val/isModalClient"
import { funDelClient } from "../fun/del_client"
import { funUserLog } from "@/modules/_global"

export function ModalKonfirmasiDelClient({ id, onSuccess }: { id: string, onSuccess: (val: any) => void }) {
    const [valOpenModal, setOpenModal] = useAtom(isModalClient);
    const router = useRouter();
    async function delOutletType() {
        const del = await funDelClient({ id: id })
        if (!del.success) return toast(del.message, { theme: "dark" });
        await funUserLog({activity: "DELETE", desc: "User Delete Client"})
        toast("Success", { theme: "dark" });
        setOpenModal(false);
        onSuccess(del.dataDel)
    }
    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>ARE YOU SURE TO DELETE THIS CLIENT?</Text>
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
                            onClick={delOutletType}
                        >
                            YES
                        </Button>
                    </Group>
                </Alert>
            </Box>
        </>
    )
}