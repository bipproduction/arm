"use client";
import { COLOR } from "@/modules/_global";
import {
  Box,
  Button,
  Divider,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  createStyles,
  rem,
} from "@mantine/core";
import { useFocusTrap } from "@mantine/hooks";
import React from "react";


function FormNormal() {
  const focusTrapRef = useFocusTrap();

  return (
    <>
      <Box pt={20}>
        <Box
          sx={{
            backgroundColor: COLOR.AbuMuda,
            padding: 15,
            borderRadius: 5,
          }}
        >
          <Box ref={focusTrapRef}>
            <Divider
              my="xs"
              label={
                <Text fw={700} fz={14} color="dark.9">
                  PROJECT
                </Text>
              }
              size="md"
              color="dark"
            />
            <Stack pt={10}>
              <TextInput placeholder="Form input" />
              <TextInput placeholder="Form input" />
              <TextInput placeholder="Form input" />
              <SimpleGrid
                cols={2}
                spacing="lg"
                breakpoints={[
                  { maxWidth: "sm", cols: 2, spacing: "sm" },
                  { maxWidth: "xs", cols: 1, spacing: "sm" },
                ]}
              >
                <TextInput placeholder="Form input" />
                <TextInput placeholder="Form input" />
              </SimpleGrid>
              <SimpleGrid
                cols={2}
                spacing="lg"
                breakpoints={[
                  { maxWidth: "sm", cols: 2, spacing: "sm" },
                  { maxWidth: "xs", cols: 1, spacing: "sm" },
                ]}
              >
                <TextInput placeholder="Form input" />
                <TextInput placeholder="Form input" />
              </SimpleGrid>
              <SimpleGrid
                cols={2}
                spacing="lg"
                breakpoints={[
                  { maxWidth: "sm", cols: 2, spacing: "sm" },
                  { maxWidth: "xs", cols: 1, spacing: "sm" },
                ]}
              >
                <TextInput placeholder="Form input" />
                <TextInput placeholder="Form input" />
              </SimpleGrid>
              <Group position="right">
                <Button color="gray.7" component="a" href="/dashboard/add-assets">ADD ASSETS</Button>
              </Group>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Box pt={20}>
        <Box
          sx={{
            backgroundColor: COLOR.AbuMuda,
            padding: 15,
            borderRadius: 5,
          }}
        >
          <Box>
            <Divider
              my="xs"
              label={
                <Text fw={700} fz={14} color="dark.9">
                  ASSETS
                </Text>
              }
              size="md"
              color="dark"
            />
          </Box>
        </Box>
      </Box>
      <Grid pt={20}>
      <Grid.Col md={3} sm={12}>
      <Button fullWidth  radius={10} color="gray.7" component="a" href="/dashboard/recent-activity">SUBMIT</Button>
      </Grid.Col>
    </Grid>
    </>
  );
}

export default FormNormal;
