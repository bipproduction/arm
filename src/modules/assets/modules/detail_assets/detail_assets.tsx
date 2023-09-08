"use client";
import { ButtonBack, COLOR, PageSubTitle } from "@/modules/_global";
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  Group,
  Image,
  Pagination,
  Stack,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import {
  MdOutlineDriveFileRenameOutline,
  MdOutlinePrint,
} from "react-icons/md";
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

const assetDetail = [
  {
    id: 1,
    image: "../../img/meja.jpeg",
    icon: HiXCircle,
    conditions: "NEED REPARATIONS",
  },
  {
    id: 2,
    image: "../../img/meja.jpeg",
    icon: HiCheckCircle,
    conditions: "GOOD CONDITION",
  },
  {
    id: 3,
    image: "../../img/meja.jpeg",
    icon: HiXCircle,
    conditions: "NEED REPARATIONS",
  },
  {
    id: 4,
    image: "../../img/meja.jpeg",
    icon: HiCheckCircle,
    conditions: "GOOD CONDITION",
  },
  {
    id: 5,
    image: "../../img/meja.jpeg",
    icon: HiCheckCircle,
    conditions: "GOOD CONDITION",
  },
  {
    id: 6,
    image: "../../img/meja.jpeg",
    icon: HiCheckCircle,
    conditions: "GOOD CONDITION",
  },
];

export default function DetailAssets() {
  const { classes, theme } = useStyles();
  const router = useRouter();
  return (
    <>
      <Stack>
        <ButtonBack />
        <PageSubTitle text="DETAIL ASSETS" />
      </Stack>
      <Box pt={20}>
        <Group position="apart">
      <Checkbox label="All"/>
      <Button color="gray.7" onClick={() => router.push("/dashboard/assets/detail-assets/37923729")}>VIEW BARCODE</Button>
        </Group>
      </Box>
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
              {assetDetail.map((item) => (
                <Box key={item.id}>
                  <Card
                    withBorder
                    padding="lg"
                    radius="md"
                    className={classes.card}
                    w={318}
                  >
                    <Group>
                    <Checkbox />
                    </Group>
                    <Card.Section
                      mb="sm"
                      pt={20}
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        router.push("/dashboard/assets/detail-assets-history")
                      }
                    >
                      <Image
                        src={item.image}
                        alt="Meja portable"
                        maw={200}
                        mx="auto"
                      />
                    </Card.Section>

                    <Text fw={700} className={classes.title} mt="xs">
                      MEJA KAYU
                    </Text>
                    <Card.Section className={classes.footer}>
                      <Group position="apart">
                        <Group spacing={30} style={{cursor: "pointer"}}>
                          <ActionIcon onClick={() => router.push("/dashboard/assets/detail-assets/37923729")}>
                            <MdOutlinePrint
                              size="25"
                              color={theme.colors.yellow[6]}
                              stroke={1.5}
                            />
                          </ActionIcon>
                        </Group>
                        <Group>
                          <item.icon size="30" />
                          <Box>
                            <Text fz={8} fw={700}>
                              CONDITIONS
                            </Text>
                            <Text fz={8} fw={700} color="red">
                              {item.conditions}
                            </Text>
                          </Box>
                        </Group>
                      </Group>
                    </Card.Section>
                  </Card>
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>

        <Group position="right" pt={10}>
          <Pagination total={10} />
        </Group>
      </Box>
    </>
  );
}
