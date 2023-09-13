"use client";
import {
  ActionIcon,
  Box,
  Button,
  Checkbox,
  Collapse,
  Flex,
  Grid,
  Group,
  Image,
  NumberInput,
  NumberInputHandlers,
  Text,
  Textarea,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { MdOutlineNoteAlt } from "react-icons/md";

function ListCart() {
  const [opened, { toggle }] = useDisclosure(false);
  const [value, setValue] = useState<number | "">(0);
  const handlers = useRef<NumberInputHandlers>();
  const router = useRouter()
  return (
    <>
      <Box pt={30}>
        <Box pb={10}>
          <Checkbox label="All" />
        </Box>
        <Box
          sx={{
            border: "1px solid #CED4DA",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Grid>
            <Grid.Col md={9} lg={9}>
              <Flex
                mih={50}
                gap="md"
                justify="flex-start"
                align="center"
                direction="row"
                wrap="wrap"
              >
                <Box>
                  <Checkbox />
                </Box>
                <Box>
                  <Image
                    src={"../img/meja.jpeg"}
                    radius={10}
                    maw={{ base: 100, sm: 200 }}
                    mx="auto"
                    alt="img"
                  />
                </Box>
                <Box>
                  <Text fw={700} fz={{ sm: 20, base: 10 }}>
                    Item
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
              </Flex>
            </Grid.Col>
            <Grid.Col md={3} lg={3}>
              <Group position="center" pt={{ sm: 50, base: 0 }}>
                <ActionIcon
                  size={35}
                  variant="default"
                  onClick={() => handlers.current?.decrement()}
                >
                  –
                </ActionIcon>

                <NumberInput
                  hideControls
                  value={value}
                  onChange={(val) => setValue(val)}
                  handlersRef={handlers}
                  max={10}
                  min={0}
                  step={2}
                  styles={{ input: { width: rem(54), textAlign: "center" } }}
                />

                <ActionIcon
                  size={35}
                  variant="default"
                  onClick={() => handlers.current?.increment()}
                >
                  +
                </ActionIcon>
              </Group>
            </Grid.Col>
          </Grid>
        </Box>
      </Box >
      <Grid pt={20} pb={60}>
        <Grid.Col md={3} sm={12}>
          <Button
            fullWidth
            radius={10}
            color="gray.7"
            onClick={() => router.push("/dashboard/checkout")}
          >
            SUBMIT
          </Button>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default ListCart;
