import { useAtom } from "jotai";
import React from "react";
import { useRouter } from "next/navigation";
import { funUpdateAssetsCategory } from "../fun/assets_category_update";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import { Alert, Box, Button, Grid, Text } from "@mantine/core";
import { isModalEditAssetsCategory } from "../val/isModalAssetsCategory";

export default function ModalKonfirmasiEditAssetsCategory({
  data,
}: {
  data: any;
}) {
  const [valOpenModal, setOpenModal] = useAtom(isModalEditAssetsCategory);
  const router = useRouter();

  async function updAssetsCategory() {
    const create = await funUpdateAssetsCategory(data);
    if (!create.success) return toast(create.message, { theme: "dark" });
    toast("Success", { theme: "dark" });
    router.push("/dashboard/configuration/assets-category");
    setOpenModal(false);
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO EDIT THIS ASSET CATEGORY?
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
                onClick={updAssetsCategory}
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
