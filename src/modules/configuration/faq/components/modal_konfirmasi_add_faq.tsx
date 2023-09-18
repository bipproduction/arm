'use client'

import { Alert, Box, Button, Grid, Text } from "@mantine/core"
import { useAtom } from "jotai";
import { isModalFAQ } from "../val/isModalCreateFaq";
import { useRouter } from "next/navigation";
import { funFaqCreate } from "../fun/faq_create";
import toast from "react-simple-toasts";

export function ModalKonfirmasiAddFaq({ data }: { data: any }) {
    const [openModal, setOpenModal] = useAtom(isModalFAQ);
    const router = useRouter();

    async function onAddFaq() {
        const edit = await funFaqCreate({ data: data })
        if (!edit.success) return toast(edit.message, { theme: "dark" });
        toast("Success", { theme: "dark" });
        router.push('/dashboard/configuration/faq');
        setOpenModal(false);
    }
    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ARE YOU SURE TO ADD FAQ?
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
                                onClick={onAddFaq}
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