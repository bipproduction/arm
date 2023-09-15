"use client";

import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { isModalCreateProjectsCategory } from "../val/isModalCreateProjectsCategory";
import { funProjectsCategoryCreate } from "../fun/projects_category_create";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import {
  Alert,
  Box,
  Button,
  Grid,
  Modal,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { ButtonBack, COLOR } from "@/modules/_global";
import { useFocusTrap } from "@mantine/hooks";

export default function CreateProjectsCategory() {
  const router = useRouter();
  const focusTrapRef = useFocusTrap();
  const [valOpenCreateProjectsCategory, setOpenCreateProjectscategory] =
    useAtom(isModalCreateProjectsCategory);
  const [loading, setLoading] = useState(false);
  const [dataProjectCategory, setDataProjectCategory] = useState({
    name: "",
  });

  async function onProjectCategory() {
    setLoading(true);
    const res = await funProjectsCategoryCreate({ data: dataProjectCategory });
    if (!res.success) return setLoading(false), toast(res.message);
    toast("success", { theme: "dark" });
    router.push("/dashboard/configuration/projects-category");
    setOpenCreateProjectscategory(false);
  }

  function validasiCreateProjectCat() {
    if (Object.values(dataProjectCategory).includes(""))
      return toast("The form cannor be empty", { theme: "dark" });
    setOpenCreateProjectscategory(true);
  }

  return (
    <>
      <Stack>
        <ButtonBack />
      </Stack>
      <Box pt={20} ref={focusTrapRef}>
        <Box
          sx={{
            border: `1px solid ${COLOR.AbuMuda}`,
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Stack>
            <Text>Create Project Category</Text>
            <TextInput
              placeholder="Name"
              onChange={(val) =>
                setDataProjectCategory({
                  ...dataProjectCategory,
                  name: val.target.value,
                })
              }
            />
            <Button color="gray.7" onClick={validasiCreateProjectCat}>
              SUBMIT
            </Button>
          </Stack>
        </Box>
      </Box>
      <Modal
        size={"md"}
        opened={valOpenCreateProjectsCategory}
        onClose={() => setOpenCreateProjectscategory(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <Box>
          <Alert color="gray" variant="outline">
            <Text fw={700} ta={"center"} mb={20} mt={20}>
              ARE YOU SURE TO CREATE PROJECTS CATEGORY?
            </Text>
            <Grid>
              <Grid.Col span={6}>
                <Button
                  radius={10}
                  color="gray.7"
                  fullWidth
                  onClick={() => setOpenCreateProjectscategory(false)}
                >
                  NO
                </Button>
              </Grid.Col>
              <Grid.Col span={6}>
                <Button
                  radius={10}
                  color="gray.7"
                  fullWidth
                  onClick={onProjectCategory}
                >
                  YES
                </Button>
              </Grid.Col>
            </Grid>
          </Alert>
        </Box>
      </Modal>
    </>
  );
}
