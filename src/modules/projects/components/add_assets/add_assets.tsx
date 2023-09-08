"use client";
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import { Box, Group, Stack, Text } from "@mantine/core";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import ItemAssets from "./item_assets";

function AddAssets () {
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/project/create"/>
        <PageSubTitle text="ADD ASSETS"/>
      </Stack>
      <Box>
        <ItemAssets/>
      </Box>
    </>
  );
}

export default AddAssets