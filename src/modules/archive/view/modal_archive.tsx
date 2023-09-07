import { Alert, Box, Button, Grid, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function ModalArchiveView({closeArchive}: any) {
  const router = useRouter()
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
                onClick={() => closeArchive(false)}
              >
                NO
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="gray.7"
               fullWidth
               onClick={() => router.push(`/dashboard/create-project`)}
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

