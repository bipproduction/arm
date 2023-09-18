'use client'

import { Alert, Box, Button, Grid, Text } from "@mantine/core"
import { useAtom } from "jotai";
import { isModalCreateAssetsCategory } from "../val/isModalAssetsCategory";
import { funCreateAssetsCategory } from "../fun/assets_category_create";
import toast from "react-simple-toasts";

export function ModalKonfirmasiAddAssetsCategory({ data, onSuccess }: { data: any, onSuccess: (val: any) => void }) {
    const [valOpenAssets, setOpenAssets] = useAtom(isModalCreateAssetsCategory);

    async function onAssetscategory() {
        const res = await funCreateAssetsCategory({ data: data });
        if (!res.success)
            return toast(res.message, { theme: "dark" });
        toast("Success", { theme: "dark" });
        setOpenAssets(false);
        onSuccess(true)
    }

    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ARE YOU SURE TO CREATE ASSETS CATEGORY?
                    </Text>
                    <Grid>
                        <Grid.Col span={6}>
                            <Button
                                radius={10}
                                color="gray.7"
                                fullWidth
                                onClick={() => setOpenAssets(false)}
                            >
                                NO
                            </Button>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Button
                                radius={10}
                                color="gray.7"
                                fullWidth
                                onClick={onAssetscategory}
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