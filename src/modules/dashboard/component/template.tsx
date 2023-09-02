"use client";

import {
  AppShell,
  useMantineTheme,
} from "@mantine/core";
import { NavbarDashboard } from "./navbar";
import { HeaderDashboard } from "./header";
import { NavbarMobile } from "./navbar_mobile";


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
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={<NavbarDashboard />}
        header={<HeaderDashboard />}
        footer={<NavbarMobile />}
      >
        {children}
      </AppShell>
    </>
  );
}
