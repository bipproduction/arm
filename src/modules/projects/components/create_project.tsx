"use client";
import { COLOR } from "@/modules/_global";
import { Box, Group, Stack, Text } from "@mantine/core";
import { BiArrowBack } from "react-icons/bi";
import TabCreateProject from "./tab_create_project";

export function CreateProject() {
  return (
    <>
      <Stack>
        <Box component="a" href="/dashboard/list-client" style={{ textDecoration: "none" }}>
          <Group style={{ cursor: "pointer" }}>
            <BiArrowBack size="20" />
            <Text fz={15} fw={700} color="dark.9">
              Back
            </Text>
          </Group>
        </Box>
        <Box pt={10}>
          <Box
            sx={{
              backgroundColor: COLOR.AbuMuda,
              padding: 5,
              borderRadius: 5,
            }}
            pl={20}
          >
            <Text color="white" fw={700} fz={20}>
              CREATE PROJECT
            </Text>
          </Box>
        </Box>
        <TabCreateProject/>
      </Stack>
    </>
  );
}
