"use client";
import { ActionIcon, Box, Center, Divider, Group, Table, Text } from "@mantine/core";
import React from "react";
import { BiSolidUserDetail } from "react-icons/bi";
import { HiOutlineChevronRight } from "react-icons/hi";

const dataDraft = [
  {
    id: 1,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
  },
  {
    id: 2,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
  },
  {
    id: 3,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
  },
  {
    id: 4,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
  },
];

function TabelDraftProject() {
  const draftTable = dataDraft.map((datatab) => (
    <tr key={datatab.id}>
      <td>{datatab.id}</td>
      <td>{datatab.brand}</td>
      <td>{datatab.activity}</td>
      <td>{datatab.date}</td>
      <td>
        <Center>
        <ActionIcon component="a" href="#" color="dark">
        <BiSolidUserDetail size="25"/>
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
            <Text fw={700}>DRAFT PROJECTS</Text>
          </Box>
          <ActionIcon component="a" href="#" color="dark">
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
                <th>
                  <Center>
                  ACTION
                  </Center>
                </th>
              </tr>
            </thead>
            <tbody>{draftTable}</tbody>
          </Table>
        </Box>
      </Box>
    </>
  );
}

export default TabelDraftProject;
