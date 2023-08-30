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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";

const data = [
  { key: "md1", link: "/dashboard", label: "Dashboard", icon: AiOutlineHome },
  {
    key: "md2",
    link: "/dashboard/activities",
    label: "Activities",
    icon: AiOutlineHome,
  },
  {
    key: "md3",
    link: "/dashboard/assets",
    label: "Assets",
    icon: AiOutlineHome,
  },
  {
    key: "md4",
    link: "/dashboard/bills",
    label: "Bills & Reimbursements",
    icon: AiOutlineHome,
  },
  {
    key: "md5",
    link: "/dashboard/insights",
    label: "Insights",
    icon: AiOutlineHome,
  },
  {
    key: "md6",
    link: "/dashboard/help",
    label: "Help & Support",
    icon: AiOutlineHome,
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
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
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
  const router = useRouter();
  const { classes, cx } = useStyles();
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);
  const [opened, setOpened] = useState(false);
  const [valMobile, setMobile] = useAtom(isMobile);
  
  if(valMobile) return <></>
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
              // <Anchor href={item.link} key={item.key} className={cx(classes.link, { [classes.linkActive]: item.link === active })}>

              //     <span>{item.label}</span>
              // </Anchor>
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
