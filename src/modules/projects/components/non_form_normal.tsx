"use client";
import { COLOR } from "@/modules/_global";
import {
  Box,
  Button,
  Divider,
  Grid,
  Group,
  Text,
  Textarea,
  createStyles,
  rem,
} from "@mantine/core";
import { useFocusTrap } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import React from "react";

function NonFormNormal() {
  const router = useRouter()
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
          <Box>
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
            <div>
              <Textarea variant="filled" size="xl" />
            </div>
          </Box>
        </Box>
      </Box>

      <Grid pt={20}>
        <Grid.Col md={3} sm={12}>
          <Button fullWidth radius={10} color="gray.7" onClick={() => router.push("/dashboard/recent-activity")}>
            SUBMIT
          </Button>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default NonFormNormal;
