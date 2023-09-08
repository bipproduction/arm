'use client'

import { Box, Button, Center, Group, Modal, Text } from "@mantine/core"
import { useAtom } from "jotai"
import { isModalReimbursement } from "../val/isModalReimbursement"
import toast from "react-simple-toasts"
import "react-simple-toasts/dist/theme/dark.css"
import { useRouter } from "next/navigation"

export function ModalKonfirmasiReimbursement() {
    const [openModal, setOpenModal] = useAtom(isModalReimbursement)
    const router = useRouter();
    function createReimbursement() {
        toast("Success", { theme: "dark" });
        router.push('/dashboard/reimbursement');
        setOpenModal(false);
    }
    return (
        <>
            <Box>
                <Center>
                    <Text fw={700}>ARE YOU SURE TO SUBMIT THIS REIMBURSEMENT?</Text>
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
                        onClick={createReimbursement}
                    >
                        YES
                    </Button>
                </Group>
            </Box>
        </>
    )
}