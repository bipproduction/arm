import { Alert, Box, Button, Grid, Text } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import { isModalFAQ } from "../val/isModalCreateFaq";
import { useRouter } from "next/navigation";
import { funDeleteFaq } from "../fun/faq_delete";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";

export default function ModalKonfirmasiDeleteFaq(id: any) {
  const [openModal, setOpenModal] = useAtom(isModalFAQ);
  const router = useRouter();
  async function deleteFaq() {
    const edit = await funDeleteFaq(id);
    if (!edit.success) return toast(edit.message, { theme: "dark" });
    toast("Success", { theme: "dark" });
    setOpenModal(false);
    router.refresh();
  }
  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO DELETE THIS PROJECT CATEGORY?
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
                onClick={deleteFaq}
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
