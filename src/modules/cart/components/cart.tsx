"use client";
import { ButtonBack, PageSubTitle } from "@/modules/_global";
import { Box, Stack } from "@mantine/core";
import React from "react";
import ListCart from "./list_cart";

function Cart() {
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard" />
        <PageSubTitle text="CART" />
      </Stack>
      <Box>
        <ListCart />
      </Box>
    </>
  );
}

export default Cart;
