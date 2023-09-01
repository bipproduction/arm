"use client";
import { COLOR } from "@/modules/_global";
import { Box, Group, Stack, Text } from "@mantine/core";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import ItemAssets from "./item_assets";

function AddAssets () {
  return (
    <>
      <Stack>
        <Group>
          <Box
            component="a"
            href="/dashboard/create-project"
            style={{ textDecoration: "none" }}
          >
            <Group style={{ cursor: "pointer" }}>
              <BiArrowBack size="20" />
              <Text fz={15} fw={700} color="dark.9">
                Back
              </Text>
            </Group>
          </Box>
        </Group>
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
              ADD ASSETS
            </Text>
          </Box>
        </Box>
      </Stack>
      <Box>
        <ItemAssets/>
      </Box>
    </>
  );
}

export default AddAssets