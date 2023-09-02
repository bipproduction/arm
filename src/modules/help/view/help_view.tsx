"use client";
import { Box, Text } from "@mantine/core";
import { FaqLayout } from "../component/faq_layout";
import { ContactLayout } from "../component/contact_layout";
import { COLOR, PageSubTitle, PageTitle } from "@/modules/_global";

export function HelpView() {
  return (
    <>
      <PageTitle text="HELP & SUPPORT" />
      <PageSubTitle text="FAQ" />

      <FaqLayout />
      <ContactLayout />
    </>
  );
}
