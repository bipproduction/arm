"use client";

import {
  AppShell,
  Box,
  Flex,
  MediaQuery,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { NavbarDashboard } from "./navbar";
import { HeaderDashboard } from "./header";
import { NavbarMobile } from "./navbar_mobile";
import { NavbarDashboard2 } from "./navbar2";
import { HeaderDashboard2 } from "./header2";
import { NavbarMobile2 } from "./navbar_mobile2";


export function Dashboard({ children }: { children: React.ReactNode }) {
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
        navbar={<NavbarDashboard2 />}
        header={<HeaderDashboard2 />}
      >
        {children}
      </AppShell>
      <MediaQuery largerThan="xs" styles={{ display: 'none' }}>
        <Box pos={"fixed"} bottom={0} bg={"gray"} w={"100%"}>
          <NavbarMobile2 />
        </Box>
      </MediaQuery>
    </>
  );
}
