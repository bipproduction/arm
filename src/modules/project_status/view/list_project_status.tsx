"use client";
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Group,
  Pagination,
  ScrollArea,
  SimpleGrid,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";
import { BiSolidUserDetail } from "react-icons/bi";

const dataProjectStatus = [
  {
    id: 1,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    no: "123",
  },
  {
    id: 2,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Declined Project",
    no: "111",
  },
  {
    id: 3,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Canceled Project",
    no: "222",
  },
  {
    id: 4,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Job Order project",
    no: "333",
  },
  {
    id: 5,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    no: "123",
  },
  {
    id: 6,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Declined Project",
    no: "111",
  },
  {
    id: 7,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Canceled Project",
    no: "222",
  },
  {
    id: 8,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Job Order project",
    no: "333",
  },
  {
    id: 9,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Canceled Project",
    no: "222",
  },
  {
    id: 10,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Job Order project",
    no: "333",
  },
];

export function ListProjectStatus() {
  const router = useRouter()
  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard/recent-activity" />
        <PageSubTitle text="LIST PROJECT STATUS" />
      </Stack>
      <Box pt={10}>
        <Grid mt={10}>
          <Grid.Col md={6} lg={3}>
            <Button color="gray" fullWidth>
              APPROVAL
            </Button>
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
            <Button color="gray" fullWidth>
              DECLINED
            </Button>
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
            <Button color="gray" fullWidth>
              CANCELED
            </Button>
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
            <Button color="gray" fullWidth>
              JOB ORDER
            </Button>
          </Grid.Col>
        </Grid>
      </Box>

      <Box pt={20}>
        <Box
          sx={{
            backgroundColor: COLOR.AbuMuda,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <SimpleGrid
            cols={1}
            spacing={"lg"}
            breakpoints={[{ maxWidth: "36rem", cols: 1, spacing: "sm" }]}
          >
            <ScrollArea>
              <Table highlightOnHover horizontalSpacing={"lg"}>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>BRAND</th>
                    <th>ACTIVITY</th>
                    <th>DATE</th>
                    <th>STATUS</th>
                    <th>
                      <Center>
                        <Text>ACTIONS</Text>
                      </Center>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataProjectStatus.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.brand}</td>
                      <td>{item.activity}</td>
                      <td>{item.date}</td>
                      <td>{item.status}</td>
                      <td>
                        <Center>
                          <ActionIcon
                            color="dark"
                            // component="a"
                            // href={}
                            onClick={() => router.push(`/dashboard/project-status/` + item.no)}
                          >
                            <BiSolidUserDetail size="25" />
                          </ActionIcon>
                        </Center>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </ScrollArea>
          </SimpleGrid>
        </Box>
      </Box>
      <Group position="right" pt={10}>
        <Pagination total={10} />
      </Group>
    </>
  );
}
