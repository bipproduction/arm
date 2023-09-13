import { isModalRevoked } from "@/modules/project_status/val/isModalRevoked";
import { Box, Button, Center, Group, Text, Textarea } from "@mantine/core";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";

function ModalCloseRevoked() {
  const router = useRouter();
  const [openRevoked, setOpenRevoked] = useAtom(isModalRevoked);
  function closeRevoked() {
    toast("Success", { theme: "dark" });
    setOpenRevoked(false);
  }
  return (
    <>
      <Box>
        <Center>
          <Text fw={700}>ARE YOU SURE TO UPDATE STATUS THIS DRAFT</Text>
        </Center>
        <Textarea mt={10} placeholder="Note" />
        <Group position="apart" pt={10}>
          <Button
            radius={10}
            color="gray.7"
            w={150}
            onClick={() => setOpenRevoked(false)}
          >
            NO
          </Button>
          <Button radius={10} color="gray.7" w={150} onClick={closeRevoked}>
            YES
          </Button>
        </Group>
      </Box>
    </>
  );
}

export default ModalCloseRevoked;
