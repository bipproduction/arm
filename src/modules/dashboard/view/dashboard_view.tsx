"use client";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { isMobile } from "../../_global/val/isMobile";
import { Box, Button, Group, SimpleGrid, Stack, Text } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { COLOR, PageTitle } from "@/modules/_global";
import { EchartsDashboard } from "../component/echarts_dashboard";
import { useRouter } from "next/navigation";

export function DashboardView() {
  const [inMobile, setMobile] = useAtom(isMobile);
  const router = useRouter()

  return (
    <>
      <Stack>
        <Box pt={10}>
        <PageTitle text="Dashboard"/>
          <Group position="right">
            <Button color="gray" onClick={() => router.push("/dashboard/list-client")}>CREATE PROJECTS</Button>
            <Button color="gray" onClick={() => router.push("/dashboard/recent-activity")}>RECENT ACTIVITY</Button>
          </Group>

        </Box>
      </Stack>
        <Box>
          <EchartsDashboard/>
        </Box>
    </>
  );
}
