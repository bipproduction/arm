"use client";
import { useAtom } from "jotai";
import React from "react";
import { isModalBarcode } from "../../val/isModalBarcode";
import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";
import { Alert, Box, Button, Grid, Text } from "@mantine/core";
import "react-simple-toasts/dist/theme/dark.css";

export default function ModalViewBarcode() {
  const [openBarcode, setOpenBarcode] = useAtom(isModalBarcode);
  const router = useRouter();
  function viewBarcode() {
    toast("Print Success", { theme: "dark" });
    router.push("/dashboard/assets/detail-assets");
    setOpenBarcode(false);
  }
  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO DISPLAY BARCODE?
          </Text>
          <Grid>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="gray.7"
                fullWidth
                onClick={() => setOpenBarcode(false)}
              >
                NO
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="gray.7"
                fullWidth
                onClick={viewBarcode}
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
