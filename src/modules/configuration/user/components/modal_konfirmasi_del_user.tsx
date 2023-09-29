'use client'

import { Alert, Box, Button, Group, Text } from "@mantine/core"
import { isModalUserConf } from "../val/isModaluser";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import toast from "react-simple-toasts";
import { funDeleteUser } from "../fun/del_user";
import { funUserLog } from "@/modules/_global";

export function ModalKonfirmasiDeleteUser({ id, onSuccess }: { id: string, onSuccess: (val: any) => void }) {
    const [valOpenModal, setOpenModal] = useAtom(isModalUserConf);
    const router = useRouter();
    async function delUser() {
        const del = await funDeleteUser({ id: id })
        if (!del.success) return toast(del.message, { theme: "dark" });
        await funUserLog({activity:'DELETE', desc:'User Delete Data User/Profile'})
        toast("Success", { theme: "dark" });
        setOpenModal(false);
        onSuccess(true)
    }
    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>ARE YOU SURE TO DELETE THIS USER?</Text>
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
                            onClick={delUser}
                        >
                            YES
                        </Button>
                    </Group>
                </Alert>
            </Box>
        </>
    )
}