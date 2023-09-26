"use client";

import {
  ActionIcon,
  Box,
  Burger,
  Drawer,
  Flex,
  Group,
  Header,
  Image,
  MediaQuery,
  NavLink,
  Text,
  TextInput,
  Title,
  createStyles,
  getStylesRef,
} from "@mantine/core";
import { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { useMediaQuery, useViewportSize } from "@mantine/hooks";
import { menuSeeder } from "../val/menu_seeder";
// import Notification from "./notification"

const data = menuSeeder;
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

export function HeaderSeeder() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useRouter();
  const { classes, cx } = useStyles();
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);
  const { height, width } = useViewportSize();

  return (
    <>
      <Header p={"sm"} height={60}>
        <Box>
          <Group position="apart">
            <Group>
              {width > 576 && width < 768 && (
                <Burger
                  opened={openDrawer}
                  onClick={() => setOpenDrawer(!openDrawer)}
                />
              )}
              {/* <MediaQuery smallerThan={"md"} styles={{ display: 'none' }}>
                                <Burger opened={openDrawer} onClick={() => setOpenDrawer(!openDrawer)} />
                            </MediaQuery> */}
              <Image width={100} src={"/img/logo.png"} alt="" />
            </Group>
          </Group>
        </Box>
      </Header>
      <Drawer opened={openDrawer} onClose={() => setOpenDrawer(false)}>
        {data.map((item) => {
          return (
            <NavLink
              key={item.key}
              className={cx(classes.link)}
              icon={<item.icon size={20} />}
              c={item.label ? "#61677A" : "dark"}
              fw={item.label ? "bolder" : "normal"}
              label={item.label}
              onClick={() => {
                router.push(item.link);
                setActive(item.link);
                setOpenDrawer(false);
              }}
            />
          );
        })}
      </Drawer>
    </>
  );
}
