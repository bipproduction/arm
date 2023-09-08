import { COLOR } from "@/modules/_global";
import { ActionIcon, Box, Center, Group, Pagination, Table } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";
import { BiSolidUserDetail } from "react-icons/bi";

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
  {
    id: 5,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
  },
  {
    id: 6,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
  },
  {
    id: 7,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
  },
  {
    id: 8,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
  },
  {
    id: 9,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
  },
  {
    id: 10,
    brand: "The Macallan",
    activity: "Bar Take Over",
    date: "23 February 2023",
  },
];

function ItemDraftProject() {
  const router = useRouter()
  const draftTable = dataDraft.map((datatab) => (
    <tr key={datatab.id}>
      <td>{datatab.id}</td>
      <td>{datatab.brand}</td>
      <td>{datatab.activity}</td>
      <td>{datatab.date}</td>
      <td>
        <Center>
          <ActionIcon onClick={() => router.push(`/dashboard/project/444`)} color="dark">
            <BiSolidUserDetail size="25" />
          </ActionIcon>
        </Center>
      </td>
    </tr>
  ));
  return (
    <>
    <Box pt={30}>
      <Box
        sx={{
          backgroundColor: COLOR.AbuMuda,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Box pt={10}>
          <Table highlightOnHover horizontalSpacing={"lg"}>
            <thead>
              <tr>
                <th>No</th>
                <th>BRAND</th>
                <th>ACTIVITY</th>
                <th>DATE</th>
                <th>
                  <Center>ACTION</Center>
                </th>
              </tr>
            </thead>
            <tbody>{draftTable}</tbody>
          </Table>
        </Box>
      </Box>
        <Group position="right" pt={10}>
        <Pagination total={10} />
      </Group>
    </Box>
    </>
  );
}

export default ItemDraftProject;
