"use client";

import { COLOR, PageTitle } from "@/modules/_global";
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Group,
  Image,
  Pagination,
  SimpleGrid,
  Text,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { BsQrCodeScan } from "react-icons/bs";
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

const dataasset = [
  {
    id: 1,
    image: "../img/meja.jpeg",
  },
  {
    id: 2,
    image: "../img/meja.jpeg",
  },
  {
    id: 3,
    image: "../img/meja.jpeg",
  },
  {
    id: 4,
    image: "../img/meja.jpeg",
  },
  {
    id: 5,
    image: "../img/meja.jpeg",
  },
  {
    id: 6,
    image: "../img/meja.jpeg",
  },
];

export function AssetsView() {
  const { classes, theme } = useStyles();
  const router = useRouter();
  return (
    <>
      <Group position="apart">
        <PageTitle text="ASSETS" />
        <Group position="right" pb={20}>
          <Button leftIcon={<BsQrCodeScan size="20" />} color="gray.7" onClick={() => router.push("/dashboard/assets/scan")}>
            SCAN BARCODE
          </Button>
          <Button leftIcon={<AiOutlineFolderAdd size="20" />} color="gray.7" onClick={() => router.push("/dashboard/assets/add")}>
            ADD ASSETS
          </Button>
        </Group>
      </Group>
      <Box pb={10} pt={10}>
        <SimpleGrid
          cols={5}
          spacing="lg"
          breakpoints={[
            { maxWidth: "md", cols: 3, spacing: "md" },
            { maxWidth: "sm", cols: 2, spacing: "sm" },
            { maxWidth: "xs", cols: 1, spacing: "sm" },
          ]}
        >
          <Button variant="subtle" color="dark">
            All
          </Button>
          <Button variant="subtle" color="dark">
            Mobile Bar
          </Button>
          <Button variant="subtle" color="dark">
            Lighbox
          </Button>
          <Button variant="subtle" color="dark">
            Display
          </Button>
          <Button variant="subtle" color="dark">
            Bottle
          </Button>
        </SimpleGrid>
      </Box>
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
                  <Card.Section
                    mb="sm"
                    pt={20}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      router.push("/dashboard/assets/detail-assets")
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
                      <Group spacing={30}>
                        <ActionIcon onClick={() => router.push("/dashboard/assets/edit")}>
                          <MdOutlineDriveFileRenameOutline
                            size="25"
                            color={theme.colors.red[6]}
                            stroke={1.5}
                          />
                        </ActionIcon>
                        <ActionIcon onClick={() => router.push("/dashboard/assets/detail-assets/37923729")}>
                          <MdOutlinePrint
                            size="25"
                            color={theme.colors.yellow[6]}
                            stroke={1.5}
                          />
                        </ActionIcon>
                      </Group>
                      <Group spacing={3}>
                        <Box pt={18}>
                          <Text fz="xs" c="dimmed">
                            QTY
                          </Text>
                        </Box>
                        <Title weight={"bold"} size="h1">
                          12
                        </Title>
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
    </>
  );
}
