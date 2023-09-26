"use client";
import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import { HiArrowsPointingOut } from "react-icons/hi2";
import { funSeederProfile } from "../fun/fun_profile";
import { funSeederProjectStatus } from "../fun/fun_project_status";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import { funSeederProjectCategory } from "../fun/fun_project_category";
import { funSeederUser } from "../fun/fun_user";
import { funSeederUserRole } from "../fun/fun_user_role";
import { funSeederNegara } from "../fun/wilayah/fun_negara";
import { funSeederProvinsi } from "../fun/wilayah/fun_provinsi";
import { funSeederKabupaten } from "../fun/wilayah/fun_kabupaten";
import { funSeederKecamatan } from "../fun/wilayah/fun_kecamatan";

export default function SeederView() {
  const [loading, setloading] = useState(false);

  async function onProjectStatus() {
    setloading(true);
    const res = await funSeederProjectStatus();
    if (res?.success)
      return setloading(false), toast(res?.message, { theme: "dark" });
  }
  async function onProfile() {
    setloading(true);
    const res = await funSeederProfile();
    if (res?.success)
      return setloading(false), toast(res?.message, { theme: "dark" });
  }
  async function onProjectCategory() {
    setloading(true);
    const res = await funSeederProjectCategory();
    if (res?.success)
      return setloading(false), toast(res?.message, { theme: "dark" });
  }
  async function onUser() {
    setloading(true);
    const res = await funSeederUser();
    if (res?.success)
      return setloading(false), toast(res?.message, { theme: "dark" });
  }
  async function onuserRole() {
    setloading(true);
    const res = await funSeederUserRole();
    if (res?.success)
      return setloading(false), toast(res?.message, { theme: "dark" });
  }
  async function onNegara() {
    setloading(true);
    const res = await funSeederNegara();
    if (res?.success)
      return setloading(false), toast(res?.message, { theme: "dark" });
  }
  async function onProvinsi() {
    setloading(true);
    const res = await funSeederProvinsi();
    if (res?.success)
      return setloading(false), toast(res?.message, { theme: "dark" });
  }
  async function onKabupaten() {
    setloading(true);
    const res = await funSeederKabupaten();
    if (res?.success)
      return setloading(false), toast(res?.message, { theme: "dark" });
  }
  async function onKecamatan() {
    setloading(true);
    const res = await funSeederKecamatan();
    if (res?.success)
      return setloading(false), toast(res?.message, { theme: "dark" });
  }
  return (
    <>
      <Box>
        <Group>
          <ActionIcon c={"#053B50"}>
            <HiArrowsPointingOut size="30" />
          </ActionIcon>
          <Text c={"#053B50"} fz={23}>
            SEEDER
          </Text>
        </Group>
        <Box pt={30}>
          <SimpleGrid
            cols={5}
            spacing="lg"
            breakpoints={[
              { maxWidth: "62rem", cols: 3, spacing: "md" },
              { maxWidth: "48rem", cols: 2, spacing: "sm" },
              { maxWidth: "36rem", cols: 1, spacing: "sm" },
            ]}
          >
            <Button color="cyan.9" loading={loading} onClick={onuserRole}>
              USER ROLE
            </Button>
            <Button color="cyan.9" loading={loading} onClick={onProjectStatus}>
              PROJECT STATUS
            </Button>
            <Button
              color="cyan.9"
              loading={loading}
              onClick={onProjectCategory}
            >
              PROJECT CATEGORY
            </Button>
            <Button color="cyan.9" loading={loading} onClick={onProfile}>
              PROFILE
            </Button>
            <Button color="cyan.9" loading={loading} onClick={onUser}>
              USER
            </Button>
            <Button color="cyan.9" loading={loading} onClick={onNegara}>
              NEGARA
            </Button>
            <Button color="cyan.9" loading={loading} onClick={onProvinsi}>
              PROVINSI
            </Button>
            <Button color="cyan.9" loading={loading} onClick={onKabupaten}>
              KABUPATEN
            </Button>
            <Button color="cyan.9" loading={loading} onClick={onKecamatan}>
              KECAMATAN
            </Button>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
