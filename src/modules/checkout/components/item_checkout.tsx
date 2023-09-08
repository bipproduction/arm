"use client";
import { COLOR } from "@/modules/_global";
import {
  ActionIcon,
  Box,
  Button,
  Collapse,
  Divider,
  Grid,
  Group,
  Image,
  Select,
  Text,
  Textarea,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdOutlineNoteAlt } from "react-icons/md";

function ItemCheckout() {
  const [opened, { toggle }] = useDisclosure(false);
  const router = useRouter()
  return (
    <>
      <Box pt={30}>
        <Box
          sx={{
            backgroundColor: COLOR.AbuMuda,
            borderRadius: 10,
            padding: 20,
          }}
        >
          <Text fw={700}>DELIVERY ADDRESS</Text>
          <Grid pt={10}>
            <Grid.Col md={3} sm={12}>
              <Select
                placeholder="ADDRESS BOOK"
                data={[
                  { value: "react", label: "React" },
                  { value: "ng", label: "Angular" },
                  { value: "svelte", label: "Svelte" },
                  { value: "vue", label: "Vue" },
                ]}
              />
            </Grid.Col>
          </Grid>
          <Box pt={20}>
            <Divider size="md" />
          </Box>
          <Box pt={20}>
            <Text fw={700}>NOTE</Text>
            <Box pt={10}>
              <Textarea placeholder="Note" />
            </Box>
          </Box>
          <Box pt={20}>
            <Divider size="md" />
          </Box>
          <Box pt={20}>
            <Text fw={700}>WHEN SHOULD WE DELIVER IT?</Text>
            <Grid pt={10}>
              <Grid.Col md={3} sm={12}>
                <DateInput placeholder="SELECT DATE" />
              </Grid.Col>
            </Grid>
          </Box>
          <Box pt={20}>
            <Divider size="md" />
          </Box>
          <Box pt={20}>
            <Box
              sx={{
                backgroundColor: COLOR.AbuAbu,
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Group position="apart">
                <Group>
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
                    <Text fw={700} color="white" fz={{ sm: 20, base: 10 }}>
                      THE MACALLAN
                    </Text>
                    <Text color="gray.5" fz={{ sm: 13, base: 9 }}>
                      Harmony 2
                    </Text>
                    <Text color="gray.5" fz={{ sm: 13, base: 9 }}>
                      Display
                    </Text>
                  </Box>
                </Group>
                <Group>
                  <Box>
                    <Text fw={700} fz={{sm: 40, base: 20}} pr={40} color="white">
                      x2
                    </Text>
                  </Box>
                </Group>
              </Group>
              <Box pt={20}>
                <Group style={{ cursor: "pointer" }} onClick={toggle}>
                  <Text fz={{ sm: 13, base: 9 }} fw={700} color="white">
                    NOTE
                  </Text>
                  <ActionIcon color="gray.0">
                    <MdOutlineNoteAlt />
                  </ActionIcon>
                </Group>
              </Box>
              <Collapse in={opened}>
                <Textarea />
              </Collapse>
            </Box>
          </Box>
        </Box>
        <Grid pt={20}>
        <Grid.Col md={3} sm={12}>
          <Button fullWidth radius={10} color="gray.7" onClick={() => router.push("/dashboard/project/create")}>
            CHECKOUT
          </Button>
        </Grid.Col>
      </Grid>
      </Box>
    </>
  );
}

export default ItemCheckout;
