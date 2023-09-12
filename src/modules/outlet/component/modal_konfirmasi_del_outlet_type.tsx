'use client'

import { Box, Button, Center, Group, Text } from "@mantine/core"
import { useAtom } from "jotai"
import { isModalOutlet } from "../val/valOutlet"
import toast from "react-simple-toasts"
import "react-simple-toasts/dist/theme/dark.css"
import { useRouter } from "next/navigation"
import { funDelOutletType } from "../fun/del_outlet_type"

export function ModalKonfirmasiDelOutletType(id: any) {
    const [valOpenModal, setOpenModal] = useAtom(isModalOutlet);
    const router = useRouter();
    async function delOutletType() {
        const edit = await funDelOutletType(id)
        if (!edit.success) return toast(edit.message, { theme: "dark" });
        toast("Success", { theme: "dark" });
        setOpenModal(false);
        router.refresh();
    }
    return (
        <>
            <Box>
                <Center>
                    <Text fw={700}>ARE YOU SURE TO DELETE THIS OUTLET TYPE?</Text>
                </Center>
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
            </Box>
        </>
    )
}