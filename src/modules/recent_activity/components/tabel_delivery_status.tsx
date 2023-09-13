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

const dataDeliveryStatus = [
  {
    id: 1,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "On Process",
    no: "111",
  },
  {
    id: 2,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Delivered",
    no: "222",
  },
  {
    id: 3,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "On Process",
    no: "111",
  },
  {
    id: 4,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
    status: "Delivered",
    no: "222",
  },
];

function TabelDeliveryStatus() {
  const router = useRouter();
  const deliveryTable = dataDeliveryStatus.map((datatab) => (
    <tr key={datatab.id}>
      <td>{datatab.id}</td>
      <td>{datatab.brand}</td>
      <td>{datatab.activity}</td>
      <td>{datatab.date}</td>
      <td>{datatab.status}</td>
      <td>
        <Center>
          <ActionIcon
            onClick={() =>
              router.push(`/dashboard/delivery-status/` + datatab.no)
            }
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
            <Text fw={700}>DELIVERY STATUS</Text>
          </Box>
          <ActionIcon
            color="dark"
            onClick={() => router.push(`/dashboard/delivery-status`)}
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
            <tbody>{deliveryTable}</tbody>
          </Table>
        </Box>
      </Box>
    </>
  );
}

export default TabelDeliveryStatus;
