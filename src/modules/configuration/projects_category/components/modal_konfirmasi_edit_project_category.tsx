import { useAtom } from "jotai";
import React from "react";
import { isModalEditProjectsCategory } from "../val/isModalCreateProjectsCategory";
import "react-simple-toasts/dist/theme/dark.css";
import { useRouter } from "next/navigation";
import { funUpdateProjectsCategory } from "../fun/projects_category_update";
import toast from "react-simple-toasts";
import { Alert, Box, Button, Grid, Text } from "@mantine/core";

export default function ModalKonfirmasiEditProjectCategory({
  data,
}: {
  data: any;
}) {
  const [valOpenModal, setOpenModal] = useAtom(isModalEditProjectsCategory);
  const router = useRouter();

  async function updProjectCategory() {
    const create = await funUpdateProjectsCategory(data);
    if (!create.success) return toast(create.message, { theme: "dark" });
    toast("Success", { theme: "dark" });
    router.push("/dashboard/configuration/projects-category");
    setOpenModal(false);
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO EDIT THIS PROJECT CATEGORY?
          </Text>
          <Grid>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="gray.7"
                fullWidth
                onClick={() => setOpenModal(false)}
              >
                NO
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="gray.7"
                fullWidth
                onClick={updProjectCategory}
              >
                YES
              </Button>
            </Grid.Col>
          </Grid>
        </Alert>
      </Box>
    </>
  );
}
