'use client'

import { Alert, Box, Button, Grid, Text } from "@mantine/core"
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";
import { isModalClient } from "../val/isModalClient";
import { funCreateClient } from "../fun/create_client";
import { useState } from "react";
import { val_loading } from "@/modules/_global/fun/val_loding";
import { funUserLog } from "@/modules/_global";

export function ModalKonfirmasiAddClient({ data, onSuccess }: { data: any, onSuccess: (val: any) => void }) {
    const [openModal, setOpenModal] = useAtom(isModalClient);
    const [valForm, setForm] = useState(data)
    const router = useRouter();
    const [isLoading, setLoading] = useAtom(val_loading);

    async function onAddFaq() {
        setLoading(true)
        const create = await funCreateClient({ data: valForm })
        if (!create.success) return setLoading(false), toast(create.message, { theme: "dark" });
        await funUserLog({activity: "ADD", desc: "User Added Client"})
        toast("Success", { theme: "dark" });
        onSuccess(true)
        setOpenModal(false);
        setLoading(false)
    }
    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ARE YOU SURE TO ADD CLIENT?
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