import { useAtom } from "jotai";
import React from "react";
import { isModalCreateAssetsCondition } from "../val/isModalAssetsCondition";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import { Alert, Box, Button, Grid, Text } from "@mantine/core";
import { funCreateAssetsCondition } from "../fun/assets_condition_create";
import { funUserLog } from "@/modules/_global";

export default function ModalKonfirmasiAddAssetsCondition({ data, onSuccess }: { data: any, onSuccess: (val: any) => void }) {
    const [valOpenModal, setOpenModal] = useAtom(isModalCreateAssetsCondition)

    async function onAssetsCondition() {
        const res = await funCreateAssetsCondition({ data: data });
        if (!res.success) return toast(res.message, { theme: "dark" });
        await funUserLog({activity: "ADD", desc: "User Added Assets Condition"})
        toast("Success", { theme: "dark" })
        onSuccess(true)
        setOpenModal(false);
    }

    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ARE YOU SURE TO CREATE ASSETS CONDITION?
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
                                onClick={onAssetsCondition}
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
