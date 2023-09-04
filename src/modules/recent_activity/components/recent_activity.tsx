"use client";
import { ButtonBack, PageSubTitle } from "@/modules/_global";
import { Box, Stack } from "@mantine/core";
import React from "react";
import TabelDraftProject from "./tabel_draft_project";

function RecentActivity() {
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard" />
        <PageSubTitle text="RECENT ACTIVITY" />
      </Stack>
      <Box>
        <TabelDraftProject/>

      </Box>
    </>
  );
}

export default RecentActivity;
