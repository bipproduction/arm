"use client";
import { COLOR } from "@/modules/_global";
import {
  ActionIcon,
  AspectRatio,
  Box,
  Button,
  Center,
  Checkbox,
  Collapse,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useCounter, useDisclosure } from "@mantine/hooks";
import React from "react";
import { MdOutlineNoteAlt } from "react-icons/md";
import { QuantityInput } from "./quantity_button";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/navigation";

function ListCart() {
  const [opened, { toggle }] = useDisclosure(false);
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });
  const router = useRouter()
  return (
    <>
      <Box pt={30}>
        <Checkbox label="All" />
        <Box pt={20}>
          <Box
            sx={{
              backgroundColor: COLOR.AbuMuda,
              borderRadius: 10,
              padding: 20,
            }}
          >
            <Grid>
              <Grid.Col span={1}>
                <Center>
                  <Box pt={{ base: 30, sm: 70 }}>
                    <Checkbox />
                  </Box>
                </Center>
              </Grid.Col>
              <Grid.Col span={4}>
                <Box>
                  <Image
                    src={"../img/meja.jpeg"}
                    radius={10}
                    maw={{ base: 100, sm: 200 }}
                    mx="auto"
                    alt="img"
                  />
                </Box>
              </Grid.Col>
              <Grid.Col span={4}>
                <Box>
                  <Text fw={700} fz={{ sm: 20, base: 10 }}>
                    THE MACALLAN
                  </Text>
                  <Text color="dark.3" fz={{ sm: 13, base: 9 }}>
                    Harmony 2
                  </Text>
                  <Text color="dark.3" fz={{ sm: 13, base: 9 }}>
                    Display
                  </Text>
                  <Box pt={10}>
                    <Group style={{ cursor: "pointer" }} onClick={toggle}>
                      <Text fz={{ sm: 13, base: 9 }} fw={700}>
                        NOTE
                      </Text>
                      <MdOutlineNoteAlt />
                    </Group>
                  </Box>
                  <Collapse in={opened}>
                    <Textarea />
                  </Collapse>
                </Box>
              </Grid.Col>
              <Grid.Col span={3}>
                <Box pt={{ base: 20, sm: 60 }}>
                  <QuantityInput />
                </Box>
              </Grid.Col>
            </Grid>
          </Box>
          <Grid pt={20}>
            <Grid.Col md={3} sm={12}>
              <Button fullWidth radius={10} color="gray.7" onClick={() => router.push("/dashboard/checkout")}>
                SUBMIT
              </Button>
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default ListCart;
