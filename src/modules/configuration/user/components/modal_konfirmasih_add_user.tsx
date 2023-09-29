import { Alert, Box, Button, Grid, Text } from '@mantine/core';
import { useAtom } from 'jotai';
import React from 'react';
import { isModalCreateUser } from '../val/isModaluser';
import { funCreateProfile } from '../fun/profile_create';
import toast from 'react-simple-toasts';

export default function ModalKonfirmasihAddUser({ data, onSuccess }: { data: any, onSuccess: (val: any) => void }) {
  const [openModal, setOpenModal] = useAtom(isModalCreateUser)

  async function onProfile() {
    const res = await funCreateProfile({ data: data });
    if (!res.success) return toast(res.message, { theme: "dark" });
    if (res.success)
      toast(res.message, { theme: "dark" });
    setOpenModal(false);
    onSuccess(true)
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO ADD NEW USER?
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
                onClick={onProfile}
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
