"use client";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { isModalAssetsCategory } from "../val/isModalAssetsCategory";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Group,
  Modal,
  Pagination,
  ScrollArea,
  SimpleGrid,
  Stack,
  Table,
  Text,
  TextInput,
  TextInputProps,
  useMantineTheme,
} from "@mantine/core";
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import { AiOutlineFileAdd } from "react-icons/ai";
import { MdDelete, MdOutlineModeEdit } from "react-icons/md";
import ModalKonfirmasiDelAssetsCategory from "../components/modal_konfirmasi_del_assets_category";
import { funGetAllAssetsCategory } from "..";
import { LuSearch } from "react-icons/lu";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

export default function TableAssetsCategory({
  data,
  props,
}: {
  data: any;
  props: TextInputProps;
}) {
  const router = useRouter();
  const [listCategory, setListCategory] = useState<any[]>(data.data);
  const [valOpenModal, setOpenModal] = useAtom(isModalAssetsCategory);
  const [dataDelete, setDataDelete] = useState(Number);
  const [valPage, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(data.nPage);
  async function onSearch(p: number) {
    setPage(p);
    const dataNext = await funGetAllAssetsCategory(p);
    setListCategory(dataNext.data);
    setTotalPage(dataNext.nPage);
  }
  const theme = useMantineTheme();

  return (
    <>
      <Stack>
        <ButtonBack />
        <PageSubTitle text="TABLE ASSETS CATEGORY" />
      </Stack>
      <Group position="right" pt={20}>
        <Grid >
          <Grid.Col>
            <TextInput
              icon={<LuSearch size="1.1rem" stroke={1.5} />}
              radius="sm"
              rightSection={
                <ActionIcon
                  size="50"
                  radius="sm"
                  // color={COLOR.AbuMuda}
                  bg={"gray.8"}
                  variant="filled"
                >
                  {theme.dir === "ltr" ? (
                    <BsArrowRightShort size="30" />
                  ) : (
                    <BsArrowLeftShort size="30" />
                  )}
                </ActionIcon>
              }
              placeholder="Search"
              // rightSectionWidth={30}
              {...props}
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col>
            <Button
              color="gray.7"
              onClick={() =>
                router.push(`/dashboard/configuration/assets-category/create`)
              }
              leftIcon={<AiOutlineFileAdd size={"20"} />}
              fullWidth
            >
              ADD ASSETS CATEGORY
            </Button>
          </Grid.Col>
        </Grid>
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
                    <th>NAME</th>
                    <th>
                      <Center>
                        <Text>ACTIONS</Text>
                      </Center>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listCategory.map((v, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{v.name}</td>
                      <td>
                        <Group position="center">
                          <Box>
                            <ActionIcon
                              color="red.9"
                              onClick={() => {
                                setDataDelete(v.id);
                                setOpenModal(true);
                              }}
                            >
                              <MdDelete size="23" />
                            </ActionIcon>
                          </Box>
                          <Box>
                            <ActionIcon
                              color="yellow.9"
                              onClick={() =>
                                router.push(
                                  `/dashboard/configuration/assets-category/edit/${v.id}`
                                )
                              }
                            >
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
        <Group position="right" pt={10}>
          <Pagination
            value={valPage}
            onChange={(val) => onSearch(val)}
            total={totalPage}
          />
        </Group>
      </Box>
      <Modal
        size={"md"}
        opened={valOpenModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalKonfirmasiDelAssetsCategory id={dataDelete} />
      </Modal>
    </>
  );
}
