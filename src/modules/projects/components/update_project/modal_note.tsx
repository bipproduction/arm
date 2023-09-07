"use client";
import { Box, Button, Center, Group, Text, Textarea } from "@mantine/core";
import React from "react";

function ModalNote({closeMedia }: any) {
  return (
    <>
      <Box>
        <Center>
          <Text fw={700}>ARE YOU SURE TO UPDATE STATUS THIS DRAFT</Text>
        </Center>
          <Textarea mt={10} placeholder="Note"/>
          <Group position="apart" pt={10}>
            <Button radius={10} color="gray.7" w={150} onClick={() => closeMedia(false)}>NO</Button>
            <Button radius={10}  color="gray.7" w={150} component="a" href="/dashboard/detail-draft-project/2982372998732">YES</Button>
          </Group>
      </Box>
    </>
  );
}

export default ModalNote;
