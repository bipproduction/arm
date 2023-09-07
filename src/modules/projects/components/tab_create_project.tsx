"use client";
import { Box, Tabs } from "@mantine/core";
import React from "react";
import FormNormal from "./form_normal";
import NonFormNormal from "./non_form_normal";

function TabCreateProject() {
  return (
    <>
      <Box pt={10}>
        <Tabs
          defaultValue={"formal"}
          color={"gray.7"}
          radius={10}
        >
          <Tabs.List>
            <Tabs.Tab value="formal" fw={700}>FORM FORMAL</Tabs.Tab>
            <Tabs.Tab value="no_formal" fw={700}>NON FORM FORMAL</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="formal">
            <FormNormal />
          </Tabs.Panel>
          <Tabs.Panel value="no_formal">
            <NonFormNormal/>
          </Tabs.Panel>
        </Tabs>
      </Box>
    </>
  );
}

export default TabCreateProject;
