"use client";
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Group,
  Image,
  Modal,
  Stack,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";
import { isModalBarcode } from "../../val/isModalBarcode";
import ModalViewBarcode from "./modal_view_barcode";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

const dataasset = [
  {
    id: 1,
    image: "../../../img/barcode.png",
    date: "23 Feb 2023",
    brand: "THE MACALLAN",
    no_production: "No. 68328382232",
  },
  {
    id: 2,
    image: "../../../img/barcode.png",
    date: "23 Feb 2023",
    brand: "THE MACALLAN",
    no_production: "No. 68328382232",
  },
  {
    id: 3,
    image: "../../../img/barcode.png",
    date: "23 feb 2023",
    brand: "THE MACALLAN",
    no_production: "No. 68328382232",
  },
  {
    id: 4,
    image: "../../../img/barcode.png",
    date: "23 Feb 2023",
    brand: "THE MACALLAN",
    no_production: "No. 68328382232",
  },
  {
    id: 5,
    image: "../../../img/barcode.png",
    date: "23 Feb 2023",
    brand: "THE MACALLAN",
    no_production: "No. 68328382232",
  },
  {
    id: 6,
    image: "../../../img/barcode.png",
    date: "23 Feb 2023",
    brand: "THE MACALLAN",
    no_production: "No. 68328382232",
  },
];

export default function ViewBarcode() {
  const { classes, theme } = useStyles();
  const [valOpenBarcode, setOpenBarcode] = useAtom(isModalBarcode);
  const router = useRouter();
  return (
    <>
      <Stack>
        <ButtonBack />
        <PageSubTitle text="DETAIL BARCODE" />
      </Stack>
      <Box pt={20}>
        <Box
          sx={{
            backgroundColor: COLOR.AbuMuda,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Box pt={20}>
            <Flex
              gap={{ base: "sm", sm: "lg" }}
              justify={{ base: "center" }}
              wrap="wrap"
            >
              {dataasset.map((item) => (
                <Box key={item.id}>
                  <Card
                    withBorder
                    padding="lg"
                    radius="md"
                    className={classes.card}
                    w={318}
                  >
                    <Group></Group>
                    <Card.Section mb="sm" pt={20}>
                      <Image
                        src={item.image}
                        alt="Meja portable"
                        maw={200}
                        mx="auto"
                      />
                    </Card.Section>
                    <Card.Section className={classes.footer}>
                      <Group position="apart">
                        <Group>
                          <Text fw={700} className={classes.title} p={10}>
                            {item.brand}
                          </Text>
                        </Group>
                        <Group>
                          {/* <item.icon size="30" /> */}
                          <Box>
                            <Text fz={10} fw={700}>
                              {item.no_production}
                            </Text>
                            <Group position="right">
                              <Text fz={10} fw={700} color="red">
                                {item.date}
                              </Text>
                            </Group>
                          </Box>
                        </Group>
                      </Group>
                    </Card.Section>
                  </Card>
                </Box>
              ))}
            </Flex>
          </Box>
          <Container size="xs" px="xs">
            <Group pt={40} pb={40}>
              <Button
                fullWidth
                color="gray.7"
                radius={20}
                onClick={() => setOpenBarcode(true)}
              >
                PRINT
              </Button>
            </Group>
          </Container>
        </Box>
      </Box>
      <Modal
        size={"md"}
        opened={valOpenBarcode}
        onClose={() => setOpenBarcode(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalViewBarcode />
      </Modal>
    </>
  );
}
