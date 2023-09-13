"use client";
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import { Box, Group, Stack, Text } from "@mantine/core";
import { BiArrowBack } from "react-icons/bi";
import TabCreateProject from "./tab_create_project";

export function CreateProject() {
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/list-client" />
        <PageSubTitle text="CREATE PROJECT" />
        <TabCreateProject />
      </Stack>
    </>
  );
}
