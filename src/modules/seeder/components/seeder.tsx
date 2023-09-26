"use client";

import {
  AppShell,
  Box,
  Flex,
  MediaQuery,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { NavbarSeeder } from "./navbar_seeder";
import { HeaderSeeder } from "./header_seeder";

export function SeederLayout({ children }: { children: React.ReactNode }) {
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
        navbar={<NavbarSeeder />}
        header={<HeaderSeeder />}
      >
        {children}
      </AppShell>
      {/* <MediaQuery largerThan="xs" styles={{ display: 'none' }}>
        <Box pos={"fixed"} bottom={0} bg={"gray"} w={"100%"}>
          <NavbarMobile2 />
        </Box>
      </MediaQuery> */}
    </>
  );
}
