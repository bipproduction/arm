"use client";
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import { Box, Button, Container, Image, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";

export default function ScanBarcode() {
  const router = useRouter();
  return (
    <>
      <Stack>
        <ButtonBack />
        <PageSubTitle text="SCAN BARCODE" />
      </Stack>
      <Box pt={30}>
        <Box
          sx={{
            backgroundColor: COLOR.AbuMuda,
            padding: 20,
            borderRadius: 5,
          }}
        >
          <Container size="xs" px="xs">
            <Box>
              <Box
                sx={{
                  backgroundColor: COLOR.AbuAbu,
                  padding: 20,
                  borderRadius: 10,
                }}
              >
                <Image
                  src="../../img/scan.png"
                  alt="barcode"
                  maw={200}
                  mx="auto"
                />
              </Box>
              <Box pt={10}>
                <Button
                  radius={10}
                  fullWidth
                  color="gray.7"
                  onClick={() =>
                    router.push("/dashboard/assets/scan/history-scan")
                  }
                >
                  SCAN
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
