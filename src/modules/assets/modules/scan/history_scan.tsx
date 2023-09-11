"use client";
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Collapse,
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import {
  MdOutlineDriveFileRenameOutline,
  MdOutlinePrint,
} from "react-icons/md";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

export default function HistoryScan() {
  const { classes, theme } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <Stack>
        <ButtonBack />
        <PageSubTitle text="SCAN & HISTORY" />
      </Stack>
      <Box
        sx={{
          backgroundColor: COLOR.AbuMuda,
          padding: 10,
          borderRadius: 5,
        }}
      >
      <Box pt={30} pb={30}>
        <Container>
          <Group position="center">
            <Card
              withBorder
              padding="lg"
              radius="md"
              className={classes.card}
              w={400}
            >
              <Card.Section mb="sm" pt={20}>
                <Image
                  src="../../../img/meja.jpeg"
                  alt="Meja portable"
                  maw={200}
                  mx="auto"
                />
              </Card.Section>
              <Card.Section className={classes.footer}>
                <Group position="apart" pt={10}>
                  <Group fw={700}>
                    <Text>Item</Text>
                  </Group>
                </Group>
                <Box pt={20}>
                  <Button fullWidth radius={10} color="gray.7" onClick={toggle}>
                    HISTORY
                  </Button>

                  <Box pt={10}>
                    <Collapse in={opened}>
                      <Box
                        sx={{
                          backgroundColor: COLOR.AbuMuda,
                          borderRadius: 10,
                          padding: 20,
                        }}
                      >
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
                      </Box>
                    </Collapse>
                  </Box>
                </Box>
              </Card.Section>
            </Card>
          </Group>
        </Container>
      </Box>
      </Box>
    </>
  );
}
