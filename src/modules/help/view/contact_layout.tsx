'use client';
import { ActionIcon, Button, Group, SimpleGrid, Text, TextInput, Textarea, Title } from "@mantine/core";
import { MdAlternateEmail } from "react-icons/md";

export function ContactLayout() {
    return (
        <>
            <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <div>
                    <Title>Contact us</Title>
                    <Text mt="sm" mb={30}>
                        Leave your email and we will get back to you within 24 hours
                    </Text>

                    <Group mt="xl">
                        <ActionIcon key={1} size={28} variant="transparent">
                            <MdAlternateEmail size="1.4rem" stroke={1.5} />
                        </ActionIcon>
                        <ActionIcon key={2} size={28} variant="transparent">
                            <MdAlternateEmail size="1.4rem" stroke={1.5} />
                        </ActionIcon>
                        <ActionIcon key={3} size={28} variant="transparent">
                            <MdAlternateEmail size="1.4rem" stroke={1.5} />
                        </ActionIcon>
                        <ActionIcon key={4} size={28} variant="transparent">
                            <MdAlternateEmail size="1.4rem" stroke={1.5} />
                        </ActionIcon>
                    </Group>
                </div>
                <div>
                    <TextInput
                        label="Email"
                        placeholder="your@email.com"
                        required
                    />
                    <TextInput
                        label="Name"
                        placeholder="John Doe"
                        mt="md"
                    />
                    <Textarea
                        required
                        label="Your message"
                        placeholder="I want to order your goods"
                        minRows={4}
                        mt="md"
                    />

                    <Group position="right" mt="md">
                        <Button>Send message</Button>
                    </Group>
                </div>
            </SimpleGrid>
        </>
    )
}