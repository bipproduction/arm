"use client";
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Group,
  ScrollArea,
  SimpleGrid,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { MdDelete, MdOutlineModeEdit } from "react-icons/md";

export default function TableFaq({ data }: { data: any }) {
  const router = useRouter();
  const [lisaData, setListData] = useState<any[]>(data);
  return (
    <>
      <Stack>
        <ButtonBack />
        <PageSubTitle text="TABLE FAQ" />
      </Stack>
      <Group pt={20} position="right">
        <Button
          color="green.9"
          onClick={() => router.push(`/dashboard/configuration/faq/create`)}
          leftIcon={<AiOutlineFileAdd size="20" />}
        >
          ADD FAQ
        </Button>
      </Group>
      <Box pt={20}>
        <Box
          sx={{
            border: `1px solid ${COLOR.AbuMuda}`,
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
                    <th>NO</th>
                    <th>QUESTION</th>
                    <th>ANSWER</th>
                    <th>
                      <Center>
                        <Text>ACTIONS</Text>
                      </Center>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {lisaData.map((v, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{v.question}</td>
                      <td>{v.answer}</td>
                      <td>
                        <Group position="center" >
                          <Box>
                            <ActionIcon color="red.9">
                              <MdDelete size="23" />
                            </ActionIcon>
                          </Box>
                          <Box>
                            <ActionIcon color="yellow.9"  onClick={() => router.push(`/dashboard/configuration/faq/edit/${v.id}`)}>
                              <MdOutlineModeEdit size="23" />
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
      </Box>
    </>
  );
}
