"use client";
import { Box, Image } from "@mantine/core";
import React from "react";

const img = [
  {
    id: 1,
    image: "../img/meja.jpeg",
    link: "/dashboard/detail-add-assets",
  },
];

function ImageData() {
  return (
    <>
      <Box>
        <Box>
          <Image alt="a" src={"../img/meja.jpeg"} maw={240} mx="auto" />
        </Box>
      </Box>
    </>
  );
}

export default ImageData;
