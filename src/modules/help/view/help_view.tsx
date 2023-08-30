'use client'
import { Text } from "@mantine/core";
import { FaqLayout } from "./faq_layout";
import { ContactLayout } from "./contact_layout";

export function HelpView() {
    return (
        <>
            <Text>Help View</Text>
            <FaqLayout />
            <ContactLayout />
        </>
    )
}