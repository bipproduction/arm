"use client";

import { isMobile } from "@/modules/_global";
import {
  Anchor,
  NavLink,
  Navbar,
  Text,
  createStyles,
  getStylesRef,
} from "@mantine/core";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { isBurger } from "../val/isBurger";
import { menuDashboard } from "../val/data_menu";

const data = menuDashboard

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
      color: theme.fn.variant({ variant: "light", color: "grape.7" })
        .color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({ variant: "light", color: "grape.7" })
          .color,
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

export function NavbarDashboard() {
  const { classes, cx } = useStyles();
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);
  const [opened, setOpened] = useAtom(isBurger);
  const [valMobile, setMobile] = useAtom(isMobile);

  if (valMobile) return <></>
  return (
    <>
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
    </>
  );
}
