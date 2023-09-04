"use client";
import { Box, Button, Group, Image, Text } from "@mantine/core";
import React from "react";
import { HiXCircle } from "react-icons/hi";

function DetailViewAssets() {
  return (
    <>
      <Box p={30}>
        <Group position="center">
          <Image
            src={"../img/meja.jpeg"}
            maw={300}
            mx="auto"
            alt="detail_image"
          />
        </Group>
        <Box >
        <Group position="apart" pt={20}>
          <Box>
            <Text fw={700}>THE MACALLAN</Text>
          </Box>
          <Group>
            <HiXCircle size="30" />
            <Box>
              <Text fz={8} fw={700}>
                CONDITIONS
              </Text>
              <Text fz={8} fw={700} color="red">
                NEED REPARATIONS
              </Text>
            </Box>
          </Group>
        </Group>
        </Box>
        <Group position="center" pt={50}>
          <Button w={300} color="gray.6" radius={"lg"}>
            + Add To Cart
          </Button>
        </Group>
      </Box>
    </>
  );
}

export default DetailViewAssets;
