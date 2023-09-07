"use client";
import { ButtonBack, PageSubTitle } from "@/modules/_global";
import { Box, Stack } from "@mantine/core";
import React from "react";
import TabelDraftProject from "./tabel_draft_project";
import TabelProjectStatus from "./tabel_project_status";
import TabelDeliveryStatus from "./tabel_delivery_status";

function RecentActivity() {
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard" />
        <PageSubTitle text="RECENT ACTIVITY" />
      </Stack>
      <Box>
        <TabelDraftProject />
      </Box>
      <Box pt={20}>
        <TabelProjectStatus />
      </Box>
      <Box pt={20}>
        <TabelDeliveryStatus/>
      </Box>
    </>
  );
}

export default RecentActivity;
