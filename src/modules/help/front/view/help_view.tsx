"use client";
import { FaqLayout } from "../component/faq_layout";
import { ContactLayout } from "../component/contact_layout";
import { PageSubTitle, PageTitle } from "@/modules/_global";

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
