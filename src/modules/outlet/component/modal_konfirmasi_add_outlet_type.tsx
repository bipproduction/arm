'use client'

import { Box, Button, Center, Group, Text } from "@mantine/core"
import { useAtom } from "jotai"
import { isModalOutlet, valAddOutletType } from "../val/valOutlet"
import toast from "react-simple-toasts"
import "react-simple-toasts/dist/theme/dark.css"
import { useRouter } from "next/navigation"
import { funCreateOutletType } from "../fun/create_outlet_type"

export function ModalKonfirmasiOutletType() {
    const [valOpenModal, setOpenModal] = useAtom(isModalOutlet);
    const [formAddOutletType, setFormAddOutletType] = useAtom(valAddOutletType)
    const router = useRouter();
    async function createOutletType() {
        const create = await funCreateOutletType({ data: formAddOutletType })
        if (!create.success) return toast(create.message, { theme: "dark" });
        toast("Success", { theme: "dark" });
        setFormAddOutletType({
            name: ''
        })
        router.push('/dashboard/configuration/outlet-type');
        setOpenModal(false);
    }
    return (
        <>
            <Box>
                <Center>
                    <Text fw={700}>ARE YOU SURE TO ADD OUTLET TYPE?</Text>
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
                        onClick={createOutletType}
                    >
                        YES
                    </Button>
                </Group>
            </Box>
        </>
    )
}