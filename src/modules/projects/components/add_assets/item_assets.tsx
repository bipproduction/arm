"use client";
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";
import ImageData from "./image";

const img = [
  {
    id: 1,
    image: "../img/meja.jpeg",
    link: "/dashboard/detail-add-assets",
  },
  {
    id: 2,
    image: "../img/meja.jpeg",
    link: "/dashboard/detail-add-assets",
  },
  {
    id: 3,
    image: "../img/meja.jpeg",
    link: "/dashboard/detail-add-assets",
  },
  {
    id: 4,
    image: "../img/meja.jpeg",
    link: "/dashboard/detail-add-assets",
  },
];

function ItemAssets() {
  return (
    <>
      <Box pt={30}>
        <Grid>
          <Grid.Col md={6} lg={3}>
            <Button color="gray" fullWidth>
              Mobile Bar
            </Button>
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
            <Button color="gray" fullWidth>
              Display
            </Button>
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
            <Button color="gray" fullWidth>
              Lightbox
            </Button>
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
            <Button color="gray" fullWidth>
              Bottle
            </Button>
          </Grid.Col>
        </Grid>
      </Box>
      <Box pt={40}>
        <Flex
          gap={{ base: "sm", sm: "lg" }}
          justify={{ base: "center" }}
          wrap="wrap"
        >
          {img.map((item) => (
            <Box key={item.id}>
              <Paper
                p={20}
                key={item.id}
                shadow="xl"
                component="a"
                href={item.link}
                w={318}
                h={360}
              >
                <Image src={"../img/meja.jpeg"} maw={240} mx="auto" alt="a" />
                <Box pt={20}>
                  <Text fw={700} fz={25}>
                    ITEM NAME
                  </Text>
                  <Text fw={700} fz={10}>
                    TOTAL QTY : 25
                  </Text>
                </Box>
                <Group position="right" pt={10}>
                  <Box>
                    <Text fz={12}>AVAILABLE</Text>
                    <Group position="right">
                      <Text fz={12}>QTY</Text>
                    </Group>
                  </Box>
                  <Box>
                    <Text fw={700} fz={40}>
                      20
                    </Text>
                  </Box>
                </Group>
              </Paper>
            </Box>
          ))}
        </Flex>
      </Box>
      <Box pt={20}></Box>
    </>
  );
}

export default ItemAssets;
