import { Alert, Box, Button, Flex, Grid, Text } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function ModalQuotationView({ closeQuotation }: any) {
  const router = useRouter();
  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
          ARE YOU SURE TO CREATE QUOTATION?
          </Text>
          <Grid>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="gray.7"
                fullWidth
                onClick={() => closeQuotation(false)}
              >
                NO
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                radius={10}
                color="gray.7"
               fullWidth
                onClick={() => router.push("/dashboard/quotation")}
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
