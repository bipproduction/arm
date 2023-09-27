"use client";
import React, { useState } from "react";
import { ButtonBack } from "@/modules/_global";
import { Avatar, Box, Button, Divider, Grid, Group, Stack, Text } from "@mantine/core";
import { AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function ProfileView({ data }: { data: any }) {
  const router = useRouter();
  const [hasilGambar, setHasilGambar] = useState(`/img/user/${data.idImage}.${data.extension}`)
  return (
    <>
      <ButtonBack />
      <Box p={30}>
        <Box>
          <Group position="apart">
            <Group>
              <Avatar
                size={"xl"}
                radius={40}
                src={hasilGambar && hasilGambar}
                alt={data.name}
                color="dark"
              />
              <Box>
                <Text fz={15} color="gray.6">
                  Welcome,
                </Text>
                <Text fw={700} fz={20}>
                  {data.name}
                </Text>
              </Box>
            </Group>
            <Group>
              <Button
                leftIcon={<AiOutlineEdit size="20" />}
                variant="outline"
                color="gray"
                radius="xl"
                onClick={() => router.push("/dashboard/profile/edit")}
              >
                Edit
              </Button>
            </Group>
          </Group>
        </Box>
        <Box pt={40} pb={40}>
          <Divider color="gray.4" />
        </Box>
        <Box
          sx={{
            border: "1px solid #CED4DA",
            borderRadius: 20,
            padding: 30,
          }}
          pt={40}
        >
          <Text fw={700} fz={20} color="gray.6">
            Personal Data
          </Text>
          <Box pt={20}>
            <Grid>
              <Grid.Col md={6} lg={6}>
                <Stack pt={20}>
                  <Box>
                    <Text fw={700} fz={14}>
                      NAME
                    </Text>
                    <Text color="gray.6" fz={14}>
                      {data.name}
                    </Text>
                  </Box>
                  <Box pt={10}>
                    <Text fw={700} fz={14}>
                      EMAIL
                    </Text>
                    <Text color="gray.6" fz={14}>
                      {data.email}
                    </Text>
                  </Box>
                </Stack>
              </Grid.Col>
              <Grid.Col md={6} lg={6}>
                <Stack pt={20}>
                  <Box>
                    <Text fw={700} fz={14}>
                      NO. PHONE
                    </Text>
                    <Text color="gray.6" fz={14}>
                      +{data.phone}
                    </Text>
                  </Box>
                  <Box pt={10}>
                    <Text fw={700} fz={14}>
                      ADDRESS
                    </Text>
                    <Text color="gray.6" fz={14}>
                      {data.address}
                    </Text>
                  </Box>
                </Stack>
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  )

}
