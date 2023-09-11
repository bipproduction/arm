import { Alert, Box, Button, Grid, Text } from "@mantine/core";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import { isArchiveTamplate } from "../val/idModalArchive";
const val_archive = atomWithStorage("val_archive", false);

export default function ModalArchiveView() {
  const [openArchive, setOpenArchive] = useAtom(isArchiveTamplate);
  const router = useRouter();
  function archiveCreate() {
    toast("Success", { theme: "dark" });
    router.push("/dashboard/project/create");
    setOpenArchive(false);
  }
  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE USING THIS TEMPLATE?
          </Text>
          <Grid>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="gray.7"
                fullWidth
                onClick={() => setOpenArchive(false)}
              >
                NO
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="gray.7"
                fullWidth
                onClick={archiveCreate}
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
