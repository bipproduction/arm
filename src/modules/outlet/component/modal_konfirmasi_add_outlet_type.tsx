'use client'

import { Alert, Box, Button, Center, Group, Text } from "@mantine/core"
import { useAtom } from "jotai"
import { isModalOutlet } from "../val/valOutlet"
import toast from "react-simple-toasts"
import "react-simple-toasts/dist/theme/dark.css"
import { useRouter } from "next/navigation"
import { funCreateOutletType } from "../fun/create_outlet_type"
import { useState } from "react"

export function ModalKonfirmasiOutletType({ data }: { data: any }) {
    const [valOpenModal, setOpenModal] = useAtom(isModalOutlet);
    const [formAddOutletType, setFormAddOutletType] = useState(data)
    const router = useRouter();
    async function createOutletType() {
        const create = await funCreateOutletType({ data: formAddOutletType })
        if (!create.success) return toast(create.message, { theme: "dark" });
        toast("Success", { theme: "dark" });
        router.push('/dashboard/configuration/outlet-type');
        setOpenModal(false);
    }
    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>ARE YOU SURE TO ADD OUTLET TYPE?</Text>
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
                </Alert>
            </Box>
        </>
    )
}