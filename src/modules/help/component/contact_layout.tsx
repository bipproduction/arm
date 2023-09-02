"use client";
import { COLOR } from "@/modules/_global";
import {
  ActionIcon,
  Box,
  Button,
  Group,
  SimpleGrid,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { MdAlternateEmail } from "react-icons/md";

export function ContactLayout() {
  return (
    <>
    <Box pt={20}>
      <Box
        sx={{
          backgroundColor: COLOR.AbuMuda,
          padding: 20,
          borderRadius: 10,
        }}
      >
        <SimpleGrid
          cols={2}
          spacing={50}
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <Box pt={20}>
            <Box>
              <TextInput label="Email" placeholder="your@email.com" required />
              <TextInput label="Name" placeholder="John Doe" mt="md" />
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
            </Box>
          </Box>
          <Box pt={20}>
            <Box>
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
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
    </>
  );
}
