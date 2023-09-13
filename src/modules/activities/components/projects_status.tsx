"use client";
import { COLOR } from "@/modules/_global";
import {
  ActionIcon,
  Box,
  Center,
  Grid,
  Group,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export function ProjectsStatus() {
  const router = useRouter();
  return (
    <>
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
                    PROJECTS STATUS
                  </Text>
                  <Text ta={"center"} fz={50} fw={700}>
                    80
                  </Text>
                </Box>
                <Group position="right">
                  <Group
                    position="right"
                    pt={22}
                    pb={10}
                    pr={20}
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push("/dashboard/project/status")}
                  >
                    <Text fz={10} color="dark">
                      Detail Project Status
                    </Text>
                    <ActionIcon color="dark">
                      <BsFillArrowRightCircleFill />
                    </ActionIcon>
                  </Group>
                </Group>
              </Box>
            </Grid.Col>
            <Grid.Col md={3} lg={3}>
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                }}
              >
                <Text ta={"center"} fz={13} fw={700}>
                  APPROVED PROJECT
                </Text>
                <Text ta={"center"} fz={25} fw={700}>
                  20
                </Text>
              </Box>
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                }}
                mt={20}
              >
                <Text ta={"center"} fz={13} fw={700}>
                  REVOKED PROJECT
                </Text>
                <Text ta={"center"} fz={25} fw={700}>
                  20
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col md={3} lg={3}>
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                }}
              >
                <Text ta={"center"} fz={13} fw={700}>
                  DECLINED PROJECT
                </Text>
                <Text ta={"center"} fz={25} fw={700}>
                  20
                </Text>
              </Box>
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                }}
                mt={20}
              >
                <Text ta={"center"} fz={13} fw={700}>
                  JOB ORDER PROJECT
                </Text>
                <Text ta={"center"} fz={25} fw={700}>
                  20
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
