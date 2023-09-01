"use client";
import { Box, Text } from "@mantine/core";
import { FaqLayout } from "./faq_layout";
import { ContactLayout } from "./contact_layout";
import { COLOR } from "@/modules/_global";

export function HelpView() {
  return (
    <>
      <Box pb={30}>
        <Text fw={700}>HELP & SUPPORT</Text>
      </Box>
      <Box pb={20}>
        <Box
          sx={{
            backgroundColor: COLOR.AbuMuda,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text fw={700} fz={25} color="white" pl={20}>
            FAQ
          </Text>
        </Box>
      </Box>
      <FaqLayout />
      <ContactLayout />
    </>
  );
}
