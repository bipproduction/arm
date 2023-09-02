"use client";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { isMobile } from "../../_global/val/isMobile";
import { Box, Button, Group, SimpleGrid, Stack, Text } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { COLOR } from "@/modules/_global";
import { EchartsDashboard } from "../component/echarts_dashboard";

export function DashboardView() {
  const [inMobile, setMobile] = useAtom(isMobile);

  return (
    <>
      {/* {JSON.stringify(inMobile)}
      <Text>Dashboard MObile</Text>
      {inMobile && <Text>Mobile nihh</Text>} */}
      <Stack>
        <Box pt={10}>
        <Box pb={20}>
          <Text fw={700}>DASHBOARD</Text>
        </Box>
          <Group position="right">
            <Button color="gray" component="a" href="/dashboard/list-client">CREATE PROJECTS</Button>
            <Button color="gray">RECENT ACTIVITY</Button>
          </Group>
          <Box pt={40}>
            <Box
              sx={{
                backgroundColor: "#C6C5C5",
                borderRadius: 10,
              }}
            >
              <Box p={10}>
                <Text fw={700} pl={20} pt={20}>
                  MONTHLY BUDGET STATISTICS
                </Text>
              </Box>
              <EchartsDashboard />
            </Box>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
