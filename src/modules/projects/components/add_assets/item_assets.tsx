"use client";
import {
  Box,
  Button,
  Card,
  Grid,
  Group,
  Image,
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
    link: "/dashboard/detail-add-assets"
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
        <Grid>
          <Grid.Col md={6} lg={3}>
            {img.map((item) => (
            <Box key={item.id}>
              <Card
                shadow="sm"
                padding="xl"
                component="a"
                href={item.link}
                target="_blank"
              
              >
                <Card.Section>
                  <Box p={10}>
                    <Image src={item.image} maw={240} mx="auto" alt="No way!" />
                  </Box>
                </Card.Section>
                <Box pt={5}>
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
              </Card>
            </Box>
            ))}
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
          {img.map((item) => (
            <Box key={item.id}>
              <Card
                shadow="sm"
                padding="xl"
                component="a"
                href={item.link}
                target="_blank"
              
              >
                <Card.Section>
                  <Box p={10}>
                    <Image src={item.image} maw={240} mx="auto" alt="No way!" />
                  </Box>
                </Card.Section>
                <Box pt={5}>
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
              </Card>
            </Box>
            ))}
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
          {img.map((item) => (
            <Box key={item.id}>
              <Card
                shadow="sm"
                padding="xl"
                component="a"
                href={item.link}
                target="_blank"
              
              >
                <Card.Section>
                  <Box p={10}>
                    <Image src={item.image} maw={240} mx="auto"alt="No way!" />
                  </Box>
                </Card.Section>
                <Box pt={5}>
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
              </Card>
            </Box>
            ))}
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
          {img.map((item) => (
            <Box key={item.id}>
              <Card
                shadow="sm"
                padding="xl"
                component="a"
                href={item.link}
                target="_blank"
              
              >
                <Card.Section>
                  <Box p={10}>
                    <Image src={item.image} maw={240} mx="auto" alt="No way!" />
                  </Box>
                </Card.Section>
                <Box pt={5}>
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
              </Card>
            </Box>
            ))}
          </Grid.Col>
        </Grid>
      </Box>
      <Box pt={20}></Box>
    </>
  );
}

export default ItemAssets;
