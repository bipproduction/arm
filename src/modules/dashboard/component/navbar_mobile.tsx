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
import { menuDashboard } from "../val/data_menu";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[1]
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

const data = menuDashboard

export function NavbarMobile() {
  const { classes } = useStyles();
  const [valMobile, setMobile] = useAtom(isMobile);
  if (!valMobile) return <></>;
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.inner}>
          <Group spacing="xs" noWrap>
            {data.map((item) => {
              return (
                <Box style={{ cursor: "pointer", textDecoration: "none" }} key={item.key} component="a"
                  href={item.link} m={9}>
                  <Center>
                    <ActionIcon color={"gray.0"}>
                      <item.icon size="20" />
                    </ActionIcon>
                  </Center>
                  <Text ta={"center"} color={"white"} fz={8}>{item.labelMobile}</Text>
                </Box>
              )
            })}
          </Group>
        </div>
      </div>
    </>
  );
}
