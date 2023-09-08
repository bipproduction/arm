"use client";
import { COLOR } from "@/modules/_global";
import {
  ActionIcon,
  Box,
  Center,
  Group,
  Pagination,
  ScrollArea,
  SimpleGrid,
  Table,
  Text,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";
import { BiSolidUserDetail } from "react-icons/bi";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const projectBrief = [
  {
    id: 1,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    icon: <BsBookmarkFill />,
  },
  {
    id: 2,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    icon: <BsBookmarkFill />,
  },
  {
    id: 3,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    icon: <BsBookmark />,
  },
  {
    id: 4,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    icon: <BsBookmark />,
  },
  {
    id: 5,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    icon: <BsBookmark />,
  },
  {
    id: 6,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    icon: <BsBookmark />,
  },
  {
    id: 7,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    icon: <BsBookmark />,
  },
  {
    id: 8,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    icon: <BsBookmark />,
  },
  {
    id: 9,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    icon: <BsBookmark />,
  },
  {
    id: 10,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Approval Project",
    icon: <BsBookmark />,
  },
];

export default function ProjectBrief() {
  const router = useRouter();

  return (
    <>
      <Box pt={10}>
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
                  {projectBrief.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.brand}</td>
                      <td>{item.activity}</td>
                      <td>{item.date}</td>
                      <td>{item.status}</td>
                      <td>
                        <Group position="center">
                          <Box style={{cursor: "pointer"}}>{item.icon}</Box>
                          <Box>
                            <ActionIcon
                              color="dark"
                              onClick={() => router.push("/dashboard/archive/3232323232")}
                            >
                              <BiSolidUserDetail size="25" />
                            </ActionIcon>
                          </Box>
                        </Group>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </ScrollArea>
          </SimpleGrid>
        </Box>
        <Group position="right" pt={10} pb={60}>
          <Pagination total={10} />
        </Group>
      </Box>
    </>
  );
}
