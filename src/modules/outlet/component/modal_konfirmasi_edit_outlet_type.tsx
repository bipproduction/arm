'use client'

import { Alert, Box, Button, Center, Group, Text } from "@mantine/core"
import { useAtom } from "jotai";
import { isModalOutlet } from "../val/valOutlet";
import { funUpdOutletType } from "../fun/upd_outlet_type";
import toast from "react-simple-toasts";
import { useRouter } from "next/navigation";

export function ModalKonfirmasiEditOutletType({ data }: { data: any }) {
    const [valOpenModal, setOpenModal] = useAtom(isModalOutlet);
    const router = useRouter();
    async function updOutletType() {
        const edit = await funUpdOutletType({ data: data })
        if (!edit.success) return toast(edit.message, { theme: "dark" });
        toast("Success", { theme: "dark" });
        router.push('/dashboard/configuration/outlet-type');
        setOpenModal(false);
    }
    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>ARE YOU SURE TO SAVE OUTLET TYPE?</Text>
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
                            onClick={updOutletType}
                        >
                            YES
                        </Button>
                    </Group>
                </Alert>
            </Box>
        </>
    )
}