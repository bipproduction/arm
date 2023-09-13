"use client";
import {
  ActionIcon,
  Box,
  Center,
  Divider,
  Group,
  Table,
  Text,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";
import { BiSolidUserDetail } from "react-icons/bi";
import { HiOutlineChevronRight } from "react-icons/hi";

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
];

function TabelProjectStatus() {
  const router = useRouter();
  const projectTable = dataProjectStatus.map((datatab) => (
    <tr key={datatab.id}>
      <td>{datatab.id}</td>
      <td>{datatab.brand}</td>
      <td>{datatab.activity}</td>
      <td>{datatab.date}</td>
      <td>{datatab.status}</td>
      <td>
        <Center>
          <ActionIcon
            onClick={() => router.push(`/dashboard/project/` + datatab.no)}
            color="dark"
          >
            <BiSolidUserDetail size="25" />
          </ActionIcon>
        </Center>
      </td>
    </tr>
  ));
  return (
    <>
      <Box pt={30}>
        <Group position="apart">
          <Box>
            <Text fw={700}>PROJECTS STATUS</Text>
          </Box>
          <ActionIcon
            onClick={() => router.push("/dashboard/project/status")}
            color="dark"
          >
            <HiOutlineChevronRight size="25" />
          </ActionIcon>
        </Group>
        <Box pt={5}>
          <Divider size="md" color="dark" />
        </Box>
        <Box pt={10}>
          <Table>
            <thead>
              <tr>
                <th>No</th>
                <th>BRAND</th>
                <th>ACTIVITY</th>
                <th>DATE</th>
                <th>STATUS</th>
                <th>
                  <Center>ACTION</Center>
                </th>
              </tr>
            </thead>
            <tbody>{projectTable}</tbody>
          </Table>
        </Box>
      </Box>
    </>
  );
}

export default TabelProjectStatus;
