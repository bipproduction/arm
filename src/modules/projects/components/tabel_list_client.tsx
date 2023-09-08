"use client";
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Group,
  Image,
  Pagination,
  ScrollArea,
  SimpleGrid,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const dataClient = [
  {
    id: 1,
    image: "../img/image.jpeg",
    name: "PT Nusantara",
    Role: "Requestor",
  },
  {
    id: 2,
    image: "../img/image.jpeg",
    name: "PT Bunga Indah",
    Role: "Requestor",
  },
  {
    id: 3,
    image: "../img/image.jpeg",
    name: "PT Nuansa Raya",
    Role: "Requestor",
  },
  {
    id: 4,
    image: "../img/image.jpeg",
    name: "PT Alam Abadi",
    Role: "Requestor",
  },
  {
    id: 5,
    image: "../img/image.jpeg",
    name: "PT Mitra Solution",
    Role: "Requestor",
  },
  {
    id: 6,
    image: "../img/image.jpeg",
    name: "PT Nusantara",
    Role: "Requestor",
  },
  {
    id: 7,
    image: "../img/image.jpeg",
    name: "PT Bunga Indah",
    Role: "Requestor",
  },
  {
    id: 8,
    image: "../img/image.jpeg",
    name: "PT Nuansa Raya",
    Role: "Requestor",
  },
  {
    id: 9,
    image: "../img/image.jpeg",
    name: "PT Alam Abadi",
    Role: "Requestor",
  },
  {
    id: 10,
    image: "../img/image.jpeg",
    name: "PT Mitra Solution",
    Role: "Requestor",
  },
];

function TabelListClient() {
  const router = useRouter();
  const client = dataClient.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>
        <Image src={item.image} alt="image" width={80} radius={10} />
      </td>
      <td>{item.name}</td>
      <td>{item.Role}</td>
      <td>
        <Center>
          <ActionIcon
            color="dark"
            onClick={() => router.push(`/dashboard/project/create`)}
          >
            <MdOutlineCreateNewFolder size="25" />
          </ActionIcon>
        </Center>
      </td>
    </tr>
  ));

  return (
    <>
      <Stack>
        <ButtonBack link="/dashboard"/>
        <PageSubTitle text="List Client" />
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
              spacing="lg"
              breakpoints={[{ maxWidth: "36rem", cols: 1, spacing: "sm" }]}
            >
              <ScrollArea>
                <Table highlightOnHover horizontalSpacing={"lg"}>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>IMAGE</th>
                      <th>NAME</th>
                      <th>ROLE</th>
                      <th>
                        <Center>
                          <Text>ACTIONS</Text>
                        </Center>
                      </th>
                    </tr>
                  </thead>
                  <tbody>{client}</tbody>
                </Table>
              </ScrollArea>
            </SimpleGrid>
          </Box>
        </Box>
        <Group position="right" pt={10}>
          <Pagination total={10} />
        </Group>
      </Stack>
    </>
  );
}

export default TabelListClient;
