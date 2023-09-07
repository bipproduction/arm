"use client";
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import {
  ActionIcon,
  Box,
  Button,
  Center,
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

const quotation = [
  {
    id: 1,
    name: "Judul Quotation",
    role: "Requestor",
    price: "25.000.000.000, IDR",
  },
  {
    id: 2,
    name: "Judul Quotation",
    role: "Requestor",
    price: "25.000.000.000, IDR",
  },
  {
    id: 3,
    name: "Judul Quotation",
    role: "Requestor",
    price: "25.000.000.000, IDR",
  },
  {
    id: 4,
    name: "Judul Quotation",
    role: "Requestor",
    price: "25.000.000.000, IDR",
  },
  {
    id: 5,
    name: "Judul Quotation",
    role: "Requestor",
    price: "25.000.000.000, IDR",
  },
  {
    id: 6,
    name: "Judul Quotation",
    role: "Requestor",
    price: "25.000.000.000, IDR",
  },
  {
    id: 7,
    name: "Judul Quotation",
    role: "Requestor",
    price: "25.000.000.000, IDR",
  },
  {
    id: 8,
    name: "Judul Quotation",
    role: "Requestor",
    price: "25.000.000.000, IDR",
  },
  {
    id: 9,
    name: "Judul Quotation",
    role: "Requestor",
    price: "25.000.000.000, IDR",
  },
  {
    id: 10,
    name: "Judul Quotation",
    role: "Requestor",
    price: "25.000.000.000, IDR",
  },
];

export function ListQuotation() {
  const router = useRouter();
  return (
    <>
      <Stack>
        <ButtonBack />
        <PageSubTitle text="LIST QUOTATION" />
      </Stack>
      <Group pt={20} position="right">
        <Button
          color="gray.7"
          onClick={() => router.push(`/dashboard/quotation/27392973927`)}
        >
          CREATE QUOTATION
        </Button>
      </Group>
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
                    <th>NAME</th>
                    <th>ROLE</th>
                    <th>PRICE</th>
                    <th>
                      <Center>
                        <Text>ACTIONS</Text>
                      </Center>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {quotation.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.role}</td>
                      <td>{item.price}</td>
                      <td>
                        <Group position="center">
                          <Box>
                            <ActionIcon
                              color="dark"
                              onClick={() =>
                                router.push("/dashboard/quotation/3232323232")
                              }
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
