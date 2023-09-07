import { Box, Button, Center, Group, Text, Textarea } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";

function ModalCloseRevoked({ closeRevoked }: any) {
  const router = useRouter()
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
            onClick={() => closeRevoked(false)}
          >
            NO
          </Button>
          <Button
            radius={10}
            color="gray.7"
            w={150}
            onClick={() => closeRevoked(false)}
          >
            YES
          </Button>
        </Group>
      </Box>
    </>
  );
}

export default ModalCloseRevoked;
