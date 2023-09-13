"use client";
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import {
  Stack,
} from "@mantine/core";
import React from "react";
import { ButtonFilterProjectStatus } from "../component/button_filter_project_status";
import { TableProjectStatus } from "../component/table_project_status";

export function ListProjectStatus() {
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/recent-activity" />
        <PageSubTitle text="LIST PROJECT STATUS" />
      </Stack>
      <ButtonFilterProjectStatus />
      <TableProjectStatus />
    </>
  );
}
