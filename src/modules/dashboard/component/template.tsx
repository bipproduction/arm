"use client";

import {
  AppShell,
  Box,
  Burger,
  Flex,
  Group,
  Header,
  MediaQuery,
  NavLink,
  Navbar,
  Text,
  TextInput,
  createStyles,
  getStylesRef,
  useMantineTheme,
} from "@mantine/core";
import { NavbarDashboard } from "./navbar";
import { HeaderDashboard } from "./header";
import { NavbarMobile } from "./navbar_mobile";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useAtom } from "jotai";
import { isMobile } from "@/modules/_global";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";
import { LuHelpCircle, LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineBriefcase, HiOutlineCurrencyDollar, HiOutlineIdentification, HiOutlinePresentationChartLine } from "react-icons/hi";
import { Container } from "postcss";

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
    label: "Bills & Reimbursements",
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
    label: "Help & Support",
    icon: LuHelpCircle,
  },
];

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: "grape.7",
      }).background,
      color: theme.fn.variant({ variant: "light", color: "grape.7" }).color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({ variant: "light", color: "grape.7" }).color,
      },
    },
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export function Dashboard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { classes, cx } = useStyles();
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);
  const [opened, setOpened] = useState(false);
  const [inpMobile, setInpMobile] = useAtom(isMobile);

  const theme = useMantineTheme();

  return (
    <>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={

          // <NavbarDashboard />
          
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            <Navbar.Section grow>
              {data.map((item) => {
                return (
                  <NavLink
                    key={item.key}
                    className={cx(classes.link, {
                      [classes.linkActive]: item.link === active,
                    })}
                    component="a"
                    href={item.link}
                    icon={<item.icon size={20} />}
                    c={item.label ? "#61677A" : "dark"}
                    fw={item.label ? "bolder" : "normal"}
                    label={item.label}
                  />
                );
              })}
            </Navbar.Section>
          </Navbar>
        }
        header={

          // <HeaderDashboard />

          <Header height={{ base: 50, md: 70 }} pl={20}>
            {/* Ukuran Mobile */}
            {inpMobile && (
              <Group position="apart" pt={5} pr={5} >
                <Box>
                  <Text fz={25} fw={700}>
                    A.R.M
                  </Text>
                </Box>
                <Group>
                  <Box w={130}>
                    <TextInput placeholder="Search" />
                  </Box>
                  <BsFillCartFill size="20" />
                  <IoMdNotifications size="20" />
                  <FaUserCircle size="20" />
                </Group>
              </Group>
            )}
            <Box>
              <Box>
                {/* Ukuran Normal And Burger */}
                <Group position="apart">
                  {!inpMobile && (
                    <Group>
                      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                        <Burger
                          opened={opened}
                          onClick={() => setOpened((o) => !o)}
                          size="sm"
                          color={"gray"}
                          mr="xs"
                          mt={11}
                        />
                      </MediaQuery>
                      <Box pt={{sm: 15, base: 5}}>
                        <Box>
                          <Text fz={25} fw={700}>
                            A.R.M
                          </Text>
                        </Box>
                      </Box>
                    </Group>
                  )}
                  {!inpMobile && (
                    <Group position="apart" pt={{sm: 10, xl: 15, md:15, lg: 15 , base: 5}} pr={{sm: 15, xl: 15, base: 5}}>
                      <Box w={150}>
                        <TextInput placeholder="Search" />
                      </Box>
                      <BsFillCartFill size="20" />
                      <IoMdNotifications size="20" />
                      <FaUserCircle size="20" />
                    </Group>
                  )}
                </Group>
              </Box>
            </Box>
          </Header>
        }
        footer={<NavbarMobile />}
      >
        {children}
      </AppShell>
    </>
  );
}
