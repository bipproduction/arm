'use client'

import { Box, Button, Center, Group, Select, Text, Textarea } from "@mantine/core"
import { useAtom } from "jotai";
import { isModalReimbursement } from "../val/isModalReimbursement";
import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css"

export function ModalUpdateReimbursement() {
    const [openModal, setOpenModal] = useAtom(isModalReimbursement)
    const router = useRouter();
    function updateReimbursement() {
        toast("Success", { theme: "dark" });
        router.push('/dashboard/reimbursement');
        setOpenModal(false);
    }
    return (
        <>
            <Box>
                <Box>
                    <Text align="center" fw={700} size={"lg"}>Confirm Reimbursement</Text>
                </Box>
                <Box mb={10}>
                    <Text align="center" size={"sm"}>Select status and add notes</Text>
                </Box>
                <Select
                    placeholder="Status"
                    data={[
                        { value: '1', label: 'Approved' },
                        { value: '2', label: 'Declined' },
                    ]}
                />
                <Textarea mt={10} placeholder="Note" />
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
                        onClick={updateReimbursement}
                    >
                        YES
                    </Button>
                </Group>
            </Box>
        </>
    )
}