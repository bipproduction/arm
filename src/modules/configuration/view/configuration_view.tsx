"use client";
import { ButtonBack, PageSubTitle } from "@/modules/_global";
import {
  createStyles,
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
  rem,
  Stack,
  Box,
} from "@mantine/core";
import { FaDolly, FaHouseUser, FaQuora, FaUsers } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { MdLocationCity, MdOutlineMapsHomeWork, MdWorkHistory } from "react-icons/md";
import { ImLocation2 } from "react-icons/im"
import { RiHomeOfficeLine, RiHomeSmile2Line } from "react-icons/ri";
import { BiSolidEditLocation } from "react-icons/bi";
import { HiFolderOpen } from "react-icons/hi";
import { HiBuildingStorefront } from "react-icons/hi2";
import { FaDollyFlatbed } from "react-icons/fa";
import { TbBrandAppgallery } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import { FcFaq } from "react-icons/fc";
import { useRouter } from "next/navigation";

const dataConfiguration = [
  {
    id: 1,
    title: "FAQ",
    icon: FcFaq,
    color: "violet",
    link: "/dashboard/configuration/faq"
  },
  {
    id: 2,
    title: "ASSETS CONDITION",
    icon: FaDollyFlatbed,
    color: "blue",
   link: "/dashboard/configuration/assets-condition"
  },
  // {
  //   id: 3,
  //   title: "ASSETS",
  //   icon: HiBuildingStorefront,
  //   color: "green",
  //  link: "#"
  // },
  // {
  //   id: 4,
  //   title: "PROJECT CATEGORY",
  //   icon: GoProjectRoadmap,
  //   color: "teal",
  //  link: "/dashboard/configuration/projects-category"
  // },
  {
    id: 5,
    title: "OUTLET LOCATION",
    icon: ImLocation2,
    color: "cyan",
   link: "/dashboard/configuration/outlet-location"
  },
  {
    id: 6,
    title: "OUTLET TYPE",
    icon: MdOutlineMapsHomeWork,
    color: "red",
   link: "/dashboard/configuration/outlet-type"
  },
  {
    id: 7,
    title: "CLIENT",
    icon: FaUsers,
    color: "indigo",
   link: "/dashboard/configuration/client"
  },
  {
    id: 8,
    title: "ASSETS CATEGORY",
    icon: HiFolderOpen,
    color: "orange",
   link: "/dashboard/configuration/assets-category"
  },
  {
    id: 9,
    title: "WAREHOUSE LOCATION",
    icon: MdLocationCity,
    color: "pink",
   link: "/dashboard/configuration/warehouse-location"
  },
  {
    id: 10,
    title: "USER",
    icon: FaHouseUser,
    color: "violet",
    link: "#"
  },
  {
    id: 11,
    title: "SUPPLIER",
    icon: FaDolly,
    color: "yellow",
   link: "/dashboard/configuration/supplier"
  },
  {
    id: 12,
    title: "BRAND",
    icon: TbBrandAppgallery,
    color: "grape",
    link: "/dashboard/configuration/brand"
  },
];



const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.radius.md,
    height: rem(90),
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.05)",
    },
  },
}));

export default function ConfigurationView() {
  const { classes, theme } = useStyles();
  const router = useRouter()

  const items = dataConfiguration.map((item) => (
    <UnstyledButton onClick={() => router.push(item.link)} key={item.id} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size="2rem" />
      <Text size="xs" mt={7} fw={700}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));
  // const items2 = dataConfiguration2.map((item) => (
  //   <UnstyledButton onClick={() => router.push(item.link)} key={item.id} className={classes.item}>
  //     <item.icon color={theme.colors[item.color][6]} size="2rem" />
  //     <Text size="xs" mt={7} fw={700}>
  //       {item.title}
  //     </Text>
  //   </UnstyledButton>
  // ));

  return (
    <>
      <Stack>
        <ButtonBack />
        <PageSubTitle text="CONFIGURATION" />
      </Stack>
      <Box pb={60} pt={20} >
      <Card withBorder radius="md" className={classes.card}>
        <SimpleGrid
          cols={5}
          spacing="lg"
          breakpoints={[
            { maxWidth: "md", cols: 3, spacing: "md" },
            { maxWidth: "sm", cols: 2, spacing: "sm" },
            { maxWidth: "xs", cols: 1, spacing: "sm" },
          ]}
        >
          {items}
        </SimpleGrid>
        {/* <SimpleGrid
          cols={2}
          spacing="lg"
          breakpoints={[
            { maxWidth: "xs", cols: 1, spacing: "sm" },
          ]}
          pt={20}
        >
          {items2}
        </SimpleGrid> */}
      </Card>
      </Box>
    </>
  );
}
