"use client";
import { ButtonBack, PageSubTitle } from "@/modules/_global";
import { Box, Stack } from "@mantine/core";
import React from "react";
import ItemCheckout from "./item_checkout";

function Checkout() {
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/cart" />
        <PageSubTitle text="CHECKOUT" />
      </Stack>
      <Box>
        <ItemCheckout />
      </Box>
    </>
  );
}

export default Checkout;
