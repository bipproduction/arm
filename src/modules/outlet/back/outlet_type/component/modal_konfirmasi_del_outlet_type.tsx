'use client'

import { Alert, Box, Button, Center, Group, Text } from "@mantine/core"
import { useAtom } from "jotai"
import toast from "react-simple-toasts"
import "react-simple-toasts/dist/theme/dark.css"
import { useRouter } from "next/navigation"
import { isModalOutletType } from "../val/val_outlet_type"
import { funDelOutletType } from "../fun/del_outlet_type"

export function ModalKonfirmasiDelOutletType({ id, onSuccess }: { id: any, onSuccess: (val: any) => void }) {
    const [valOpenModal, setOpenModal] = useAtom(isModalOutletType);
    const router = useRouter();
    async function delOutletType() {
        const del = await funDelOutletType({ id: id })
        if (!del.success) return toast(del.message, { theme: "dark" });
        toast("Success", { theme: "dark" });
        setOpenModal(false);
        onSuccess(del.dataDel)
    }
    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>ARE YOU SURE TO DELETE THIS OUTLET TYPE?</Text>
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