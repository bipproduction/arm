"use client";
import { COLOR } from "@/modules/_global";
import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Text,
  TextInput,
  Textarea,
  ThemeIcon,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { BsFillTelephoneFill, BsTelephone } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAlternateEmail, MdLocationOn } from "react-icons/md";

export function ContactLayout() {
  const router = useRouter()
  return (
    <>
      <Box pt={20}>
        <Box
          sx={{
            backgroundColor: COLOR.AbuAbu,
            padding: 20,
            borderRadius: 10,
          }}
        >
          <SimpleGrid
            cols={2}
            spacing={50}
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          >
            <Box>
              <Box
                sx={{
                  backgroundColor: "#F0F0F0",
                  padding: 20,
                  borderRadius: 10,
                }}
              >
                <Box>
                  <TextInput
                    label="Email"
                    placeholder="your@email.com"
                    required
                  />
                  <TextInput label="Name" placeholder="John Doe" mt="md" />
                  <Textarea
                    required
                    label="Your message"
                    placeholder="I want to order your goods"
                    minRows={4}
                    mt="md"
                  />

                  <Group position="right" mt="md">
                    <Button color="gray.7">Send message</Button>
                  </Group>
                </Box>
              </Box>
            </Box>
            <Box pt={20}>
              <Box>
                <Title color="white">Contact us</Title>
                <Text mt="sm" mb={30} color="white">
                  Leave your email and we will get back to you within 24 hours
                </Text>
                <Flex
                  direction={{ base: "column", sm: "column" }}
                  gap={{ base: "sm", sm: "lg" }}
                  justify={{ sm: "center" }}
                >
                  <UnstyledButton>
                    <Group>
                      <Group>
                        <ThemeIcon radius="xl" size="xl" color={COLOR.AbuAbu}>
                          <MdAlternateEmail size="1.4rem" stroke={1.5} />
                        </ThemeIcon>
                      </Group>
                      <div>
                        <Text size="xs" color="white">
                          Email
                        </Text>
                        <Text color="white">arm_official@gmail.com</Text>
                      </div>
                    </Group>
                  </UnstyledButton>

                  <UnstyledButton>
                    <Group>
                      <Group>
                        <ThemeIcon radius="xl" size="xl" color={COLOR.AbuAbu}>
                          <BsTelephone size="1.4rem" stroke={1.5} />
                        </ThemeIcon>
                      </Group>
                      <div>
                        <Text size="xs" color="white">
                          Phone
                        </Text>
                        <Text color="white">+62 (3232) 232 3223</Text>
                      </div>
                    </Group>
                  </UnstyledButton>
                  <UnstyledButton>
                    <Group>
                      <Group>
                        <ThemeIcon radius="xl" size="xl" color={COLOR.AbuAbu}>
                          <MdLocationOn size="1.4rem" stroke={1.5} />
                        </ThemeIcon>
                      </Group>
                      <div>
                        <Text size="xs" color="white">
                          Location
                        </Text>
                        <Text color="white">Indonesia</Text>
                      </div>
                    </Group>
                  </UnstyledButton>
                </Flex>
                <Group pt={30} position="right">
                  <Box style={{ cursor: "pointer" }} onClick={() => router.push("https://wa.me/6287701790942") }>
                    <Image maw={60} src="../../img/wa.png" alt="wa" />
                  </Box>
                </Group>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
