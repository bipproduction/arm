"use client";
import {
  ActionIcon,
  Box,
  Button,
  Grid,
  Group,
  Pagination,
  ScrollArea,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPersonLock } from "react-icons/bs";
import {
  _dataLogUser,
  _dataSearchLogUser,
  _dataSearchTglAkhir,
  _dataSearchTglAwal,
} from "../val/isLogUser";
import moment from "moment";
import { COLOR } from "@/modules/_global";
import { funGetAllLogUser } from "../fun/log-user-get-all";
import { profile } from "console";

export default function LogUser() {
  const [listDataNew, setListDataNew] = useState<any[]>([]);

  const [inputSearch, setInputSearch] = useState("");
  const [inputSearchTglAwal, setInputSearchTglAwal] = useState("");
  const [inputSearchTglAkhir, setInputSearchTglAkhir] = useState("");
  const [valPage, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  let noAwal = valPage * 10 - 9;

  async function onLog() {
    const data = await funGetAllLogUser({
      search: inputSearch,
      tgl: inputSearchTglAwal,
      tgl2: inputSearchTglAkhir,
      page: valPage
    });
    setListDataNew(data.data)
    // setTotalPage(data.nPage)
  }
  return (
    <>
      <Box>
        <Group>
          <ActionIcon c={"#053B50"}>
            <BsPersonLock size="30" />
          </ActionIcon>
          <Text c={"#053B50"} fz={23}>
            LOG USER
          </Text>
        </Group>
        <Box pt={30}>
          <Grid>
            <Grid.Col md={3} lg={3}>
              <DateInput
                mt={5}
                placeholder="Tanggal Awal"
                radius={"md"}
                onChange={(val) => {
                  setInputSearchTglAwal(moment(val).format("YYYY-MM-DD"));
                }}
              />
            </Grid.Col>
            <Grid.Col md={3} lg={3}>
              <DateInput
                mt={5}
                placeholder="Tanggal Akhir"
                radius={"md"}
                onChange={(val) => {
                  setInputSearchTglAkhir(moment(val).format("YYYY-MM-DD"));
                }}
              />
            </Grid.Col>
            <Grid.Col md={4} lg={4}>
              <TextInput
                mt={5}
                icon={<AiOutlineSearch size={20} />}
                placeholder="Cari berdasarkan username"
                radius={"md"}
                onChange={(val) => {
                  setInputSearch(val.target.value);
                }}
              />
            </Grid.Col>
            <Grid.Col md={2} lg={2}>
              <Box mt={5}>
                <Button
                  ta={"center"}
                  fullWidth
                  radius={"md"}
                  onClick={() => {
                    onLog();
                  }}
                >
                  Cari
                </Button>
              </Box>
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
      <Box pt={30}>
        <ScrollArea>
          <Table p="lg" withBorder withColumnBorders>
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Name</th>
                <th>Jenis Aktivitas</th>
                <th>Deskripsi</th>
              </tr>
            </thead>
            <tbody>
              {listDataNew.map((e, i) => (
                <tr key={i}>
                  <td>{moment(e.createdAt).format("llll")}</td>
                  <td>{e.name}</td>
                  <td>{e.activity}</td>
                  <td>{e.description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ScrollArea>
      </Box>
      <Group position="right" pt={10}>
          <Pagination
            value={valPage}
            onChange={(val) => onLog()}
            total={1}
          />
        </Group>
    </>
  );
}
