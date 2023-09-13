"use client";
import { Box, Stack, Tabs } from "@mantine/core";
import React from "react";
import ProjectBrief from "../components/project_brief/project_brief";
import Timeline from "../components/timeline/timeline";
import Budget from "../components/budget/budget";
import { ButtonBack, PageSubTitle } from "@/modules/_global";

export default function TabArchive() {
  return (
    <>
      <Stack>
        <ButtonBack />
        <PageSubTitle text="ARCHIVE" />
      </Stack>
      <Box pt={10}>
        <Tabs defaultValue="project">
          <Tabs.List grow>
            <Tabs.Tab value="project">PROJECT BRIEF</Tabs.Tab>
            <Tabs.Tab value="timeline">TIMELINE</Tabs.Tab>
            <Tabs.Tab value="budget">BUDGET</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="project" pt="xs">
            <ProjectBrief />
          </Tabs.Panel>

          <Tabs.Panel value="timeline" pt="xs">
            <Timeline />
          </Tabs.Panel>

          <Tabs.Panel value="budget" pt="xs">
            <Budget />
          </Tabs.Panel>
        </Tabs>
      </Box>
    </>
  );
}
