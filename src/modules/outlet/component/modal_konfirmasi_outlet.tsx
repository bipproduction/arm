'use client'

import { Box, Button, Center, Group, Text } from "@mantine/core"
import { useAtom } from "jotai"
import { isModalOutlet } from "../val/valOutlet"
import toast from "react-simple-toasts"
import "react-simple-toasts/dist/theme/dark.css"
import { useRouter } from "next/navigation"

export function ModalKonfirmasiOutlet() {
    const [valOpenModal, setOpenModal] = useAtom(isModalOutlet);
    const router = useRouter();
    function createOutlet() {
        toast("Success", { theme: "dark" });
        router.push('/dashboard/outlet');
        setOpenModal(false);
    }
    return (
        <>
            <Box>
                <Center>
                    <Text fw={700}>ARE YOU SURE TO ADD OUTLET?</Text>
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
                        onClick={createOutlet}
                    >
                        YES
                    </Button>
                </Group>
            </Box>
        </>
    )
}