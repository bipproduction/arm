'use client'

import { Alert, Box, Button, Grid, Text } from "@mantine/core"
import { useAtom } from "jotai";
import { isModalFAQ } from "../val/isModalCreateFaq";
import { useRouter } from "next/navigation";
import { funFaqEdit } from "../fun/faq_edit";
import toast from "react-simple-toasts";
import { funUserLog } from "@/modules/_global";

export function ModalKonfirmasiEditFaq({ data }: { data: any }) {
    const [openModal, setOpenModal] = useAtom(isModalFAQ);
    const router = useRouter();

    async function onEditFaq() {
        const edit = await funFaqEdit({ data: data })
        if (!edit.success) return toast(edit.message, { theme: "dark" });
        await funUserLog({activity: "EDIT", desc: "User Edit FAQ"})
        toast("Success", { theme: "dark" });
        setOpenModal(false);
    }
    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ARE YOU SURE TO SAVE THIS FAQ?
                    </Text>
                    <Grid>
                        <Grid.Col span={6}>
                            <Button
                                radius={10}
                                color="gray.7"
                                fullWidth
                                onClick={() => setOpenModal(false)}
                            >
                                NO
                            </Button>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Button
                                radius={10}
                                color="gray.7"
                                fullWidth
                                onClick={onEditFaq}
                            >
                                YES
                            </Button>
                        </Grid.Col>
                    </Grid>
                </Alert>
            </Box>
        </>
    )
}