"use client";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Group,
  Image,
  Modal,
  Paper,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import DetailViewAssets from "./detail_view_assets";
import { useRouter } from "next/navigation";

const img = [
  {
    id: 1,
    image: "../img/meja.jpeg",
    icon: HiXCircle,
    conditions: "NEED REPARATIONS",
  },
  {
    id: 2,
    image: "../img/meja.jpeg",
    icon: HiCheckCircle,
    conditions: "GOOD CONDITION",
  },
  {
    id: 3,
    image: "../img/meja.jpeg",
    icon: HiXCircle,
    conditions: "NEED REPARATIONS",
  },
  {
    id: 4,
    image: "../img/meja.jpeg",
    icon: HiCheckCircle,
    conditions: "GOOD CONDITION",
  },
  {
    id: 5,
    image: "../img/meja.jpeg",
    icon: HiCheckCircle,
    conditions: "GOOD CONDITION",
  },
  {
    id: 6,
    image: "../img/meja.jpeg",
    icon: HiCheckCircle,
    conditions: "GOOD CONDITION",
  },
  {
    id: 7,
    image: "../img/meja.jpeg",
    icon: HiCheckCircle,
    conditions: "GOOD CONDITION",
  },
  {
    id: 8,
    image: "../img/meja.jpeg",
    icon: HiCheckCircle,
    conditions: "GOOD CONDITION",
  },
];

function AllItemAssets() {
  const router = useRouter();
  return (
    <>
      <Box pt={30}>
        <Box pb={20}>
          <Checkbox label="All" />
        </Box>
        <Flex
          gap={{ base: "sm", sm: "lg" }}
          justify={{ base: "center" }}
          wrap="wrap"
        >
          {img.map((item) => (
            <Box key={item.id}>
              <Paper shadow="xl" p={20} radius={10} w={318} h={320}>
                <Checkbox />
                <Box
                  onClick={() =>
                    router.push(
                      "/dashboard/detail-add-assets/detail-view-assets"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <Image src={item.image} maw={200} mx="auto" alt="a" />
                </Box>
                <Box pt={20}>
                  <Text fw={700} fz={25}>
                    ITEM NAME
                  </Text>
                </Box>
                <Group position="apart" pt={20}>
                  <Group>
                    <item.icon size="30" />
                    <Box>
                      <Text fz={8} fw={700}>
                        CONDITIONS
                      </Text>
                      <Text fz={8} fw={700} color="red">
                        {item.conditions}
                      </Text>
                    </Box>
                  </Group>
                  <Button color="gray.6" radius={"lg"}>
                    + Add To Cart
                  </Button>
                </Group>
              </Paper>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
}

export default AllItemAssets;
