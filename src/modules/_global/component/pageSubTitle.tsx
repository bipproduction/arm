"use client";

import { ActionIcon, Box, Group, Text } from "@mantine/core";
import { COLOR } from "..";
import { TbBrandLoom, TbBrandReactNative } from "react-icons/tb";

export const PageSubTitle = ({ text }: { text?: string }) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: COLOR.AbuMuda,
          padding: 10,
          borderRadius: 5,
        }}
        pl={20}
        mb={10}
      >
        <Group>
          <Text color="white" fw={700} fz={20}>
            {text}
          </Text>
        </Group>
      </Box>
    </>
  );
};
