"use client";
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Collapse,
  Flex,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { HiCheckCircle } from "react-icons/hi";

export default function DetailAssetsHistory() {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <Stack>
        <ButtonBack />
        <PageSubTitle text="DETAIL ASSETS & HISTORY" />
      </Stack>
      <Box
        sx={{
          backgroundColor: COLOR.AbuMuda,
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Grid gutter="xs">
          <Grid.Col md={5} lg={5}>
            <Group position="center">
              <Box pt={25} pb={25}>
                <Image
                  src={"../../img/meja.jpeg"}
                  alt="history"
                  maw={300}
                  radius={10}
                />
              </Box>
            </Group>
          </Grid.Col>
          <Grid.Col md={7} lg={7}>
            <Box p={30}>
              <Box>
                <Text fw={700} fz={30}>
                  MEJA KAYU
                </Text>
              </Box>
              <Group pt={10}>
                <HiCheckCircle size="30" />
                <Box>
                  <Text fz={8} fw={700}>
                    CONDITIONS
                  </Text>
                  <Text fz={8} fw={700} color="red">
                    GOOD CONDITION
                  </Text>
                </Box>
              </Group>
              <Box>
                <Box pt={25}>
                  <Button onClick={toggle} color="gray.7" radius={20} w={130}>
                    HISTORY
                  </Button>

                  <Collapse in={opened} pt={10}>
                    <Box>
                      <Box
                        sx={{
                          backgroundColor: "white",
                          padding: 20,
                          borderRadius: 20,
                        }}
                      >
                        <Stack>
                          <Text>Event : We The Fest</Text>
                          <Text>Location : Jakarta Selatan</Text>
                          <Text>Date : 23 May 2023</Text>
                          <Text>Name : PT. Mekar Jaya</Text>
                          <Text>
                            .......... : ........... ......... ...........
                            ...........
                          </Text>
                          <Text>
                            .......... : ........... ......... ...........
                            ...........
                          </Text>
                          <Text>
                            .......... : ........... ......... ...........
                            ...........
                          </Text>
                          <Text>
                            .......... : ........... ......... ...........
                            ...........
                          </Text>
                          <Text>
                            .......... : ........... ......... ...........
                            ...........
                          </Text>
                        </Stack>
                      </Box>
                    </Box>
                  </Collapse>
                </Box>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}
