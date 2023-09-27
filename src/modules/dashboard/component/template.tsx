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
import { useAtom } from "jotai";
import { _isSetOTP } from "@/modules/login/fun/otp_jotai";


export function Dashboard({ children, dataLogin, dataRole }: { children: React.ReactNode, dataLogin: any, dataRole: any }) {
  const [valSetOTP, setSetOTP] = useAtom(_isSetOTP)
  setSetOTP(false)
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
        navbar={<NavbarDashboard2 role={dataLogin.roleUser} />}
        header={<HeaderDashboard2 role={dataLogin.roleUser} dataRole={dataRole} />}
      >
        {children}
      </AppShell>
      <MediaQuery largerThan="xs" styles={{ display: 'none' }}>
        <Box pos={"fixed"} bottom={0} bg={"gray"} w={"100%"}>
          <NavbarMobile2 role={dataLogin.roleUser} />
        </Box>
      </MediaQuery>
    </>
  );
}
