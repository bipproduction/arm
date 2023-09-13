"use client";
import { ButtonBack, PageSubTitle } from "@/modules/_global";
import { Box, Stack } from "@mantine/core";
import React from "react";
import ItemUpdateProject from "./item_update_project";

function UpdateProject() {
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/detail-draft-project/2982372998732" />
        <PageSubTitle text="UPDATE PROJECT" />
      </Stack>
      <Box>
        <ItemUpdateProject/>
      </Box>
    </>
  );
}

export default UpdateProject;
