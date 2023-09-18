import { Alert, Box, Button, Grid, Text } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import { isModalCreateWarehouseLocation } from "../val/isModalWarehouseLocation";
import { funCreateWarehouseLocation } from "../fun/warehouse_location_create";

export default function ModalKonfirmasiCreateWarehouseLocation({ data, onSuccess }: { data: any, onSuccess: (val: any) => void }) {
    const [valOpenModal, setOpenModal] = useAtom(isModalCreateWarehouseLocation);
    const router = useRouter();

    async function addWarehouseLocation() {
        const create = await funCreateWarehouseLocation({ data: data });
        if (!create.success) return toast(create.message, { theme: "dark" });
        toast("Success", { theme: "dark" });
        setOpenModal(false);
        onSuccess(true)
    }

    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ARE YOU SURE TO SAVE THIS WAREHOUSE LOCATION?
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
                                onClick={addWarehouseLocation}
                            >
                                YES
                            </Button>
                        </Grid.Col>
                    </Grid>
                </Alert>
            </Box>
        </>
    );
}
