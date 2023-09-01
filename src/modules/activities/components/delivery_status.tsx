"use client";
import { COLOR } from "@/modules/_global";
import {
  ActionIcon,
  Box,
  Center,
  Flex,
  Grid,
  Group,
  SimpleGrid,
  Text,
} from "@mantine/core";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
export function DeliveryStatus() {
  return (
    <Box pt={30}>
      <Box
        sx={{
          backgroundColor: COLOR.AbuMuda,
          borderRadius: 10,
        }}
        p={20}
      >
        <Grid>
          <Grid.Col md={6} lg={6}>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: 10,
                // height: "100%"
              }}
            >
              <Box pt={50}>
                <Text ta={"center"} fz={20} fw={700}>
                  DELIVERY STATUS
                </Text>
                <Text ta={"center"} fz={50} fw={700}>
                  80
                </Text>
              </Box>
              <Box style={{ cursor: "pointer" }}>
                <Group position="right" pt={22} pb={10} pr={20}>
                  <Text fz={10} color="dark">
                    Detail Delivery Status
                  </Text>
                  <ActionIcon color="dark">
                    <BsFillArrowRightCircleFill />
                  </ActionIcon>
                </Group>
              </Box>
            </Box>
          </Grid.Col>
          <Grid.Col md={3} lg={3}>
            <Flex justify="center" align="center" h={"100%"} >
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                }}
                w={"100%"}
              >
                <Text ta={"center"} fz={13} fw={700}>
                ON PROCESS
                </Text>
                <Text ta={"center"} fz={25} fw={700}>
                  10
                </Text>
              </Box>
            </Flex>
          </Grid.Col>
          <Grid.Col md={3} lg={3}>
            <Flex justify="center" align="center" h={"100%"}>
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                }}
                w={"100%"}
              >
                <Text ta={"center"} fz={13} fw={700}>
                  DELIVERED
                </Text>
                <Text ta={"center"} fz={25} fw={700}>
                  20
                </Text>
              </Box>
            </Flex>
          </Grid.Col>
        </Grid>
      </Box>
    </Box>
  );
}
