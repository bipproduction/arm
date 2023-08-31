"use client";

import { COLOR, isMobile } from "@/modules/_global";
import {
  ActionIcon,
  Box,
  Center,
  Group,
  ScrollArea,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import { useAtom } from "jotai";
import { LuHelpCircle, LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineBriefcase, HiOutlineCurrencyDollar, HiOutlineIdentification, HiOutlinePresentationChartLine } from "react-icons/hi";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[1]
    }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[6],
    position: "sticky",
    bottom: 0,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.mdoaszaz} ${theme.spacing.md}`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));
const data = [
  { key: "md1", link: "/dashboard", label: "Dashboard", icon: LuLayoutDashboard },
  {
    key: "md2",
    link: "/dashboard/activities",
    label: "Activities",
    icon: HiOutlineIdentification,
  },
  {
    key: "md3",
    link: "/dashboard/assets",
    label: "Assets",
    icon: HiOutlineBriefcase,
  },
  {
    key: "md4",
    link: "/dashboard/bills",
    label: "Bills",
    icon: HiOutlineCurrencyDollar,
  },
  {
    key: "md5",
    link: "/dashboard/insights",
    label: "Insights",
    icon: HiOutlinePresentationChartLine,
  },
  {
    key: "md6",
    link: "/dashboard/help",
    label: "Help",
    icon: LuHelpCircle,
  },
];

export function NavbarMobile() {
  const { classes } = useStyles();
  const [valMobile, setMobile] = useAtom(isMobile);
  if (!valMobile) return <></>;
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.inner}>
          <Group spacing="xs"  noWrap>
            {data.map((item) => {
                return (
            <Box style={{cursor: "pointer", textDecoration: "none"}} key={item.key} component="a"
            href={item.link} m={9}>
              <Center>
              <ActionIcon color={"gray.0"}>
                  <item.icon size="20"/>
              </ActionIcon>
              </Center>
              <Text ta={"center"} color={"white"} fz={8}>{item.label}</Text>
            </Box>
                )
            })}
          </Group>
        </div>
      </div>
    </>
  );
}
