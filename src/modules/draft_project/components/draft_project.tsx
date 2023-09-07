"use client";
import { ButtonBack, PageSubTitle } from "@/modules/_global";
import { Box, Stack } from "@mantine/core";
import React from "react";
import ItemDraftProject from "./item_draft_project";

function DraftProject() {
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/recent-activity" />
        <PageSubTitle text="DETAIL DRAFT PROJECTS" />
      </Stack>
      <Box>
        <ItemDraftProject />
      </Box>
    </>
  );
}

export default DraftProject;
