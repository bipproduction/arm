"use client";
import { ButtonBack, PageSubTitle } from "@/modules/_global";
import { Box, Stack } from "@mantine/core";
import React from "react";
import AllItemAssets from "./all_item_assets";

function DetailAddAssets() {
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/add-assets" />
        <PageSubTitle text="ADD ASSETS" />
        <Box>
          <AllItemAssets/>
        </Box>
      </Stack>
    </>
  );
}

export default DetailAddAssets;
