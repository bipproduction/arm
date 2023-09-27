import { COLOR } from "@/modules/_global";
import {
  Menu,
  Button,
  Text,
  Box,
  Group,
  Avatar,
  Stack,
  Modal,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { AiOutlineLogout } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import ModalLogout from "./modal_logout";
import { useAtom } from "jotai";
import { isLogout } from "../val/isLogout";
import { useState } from "react";
import { PiUserSwitch } from "react-icons/pi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { funGetListRole } from "@/modules/profile/fun/get_list_role";
import { useShallowEffect } from "@mantine/hooks";
import { funChangeRole } from "@/modules/profile/fun/change_role";

export default function ProfileHeader({ dataRole }: { dataRole: any }) {
  const [valOpenLogout, setOpenLogout] = useAtom(isLogout);
  const [listRole, setListRole] = useState(dataRole)
  const router = useRouter();

  async function changingRole({ user }: { user: string }) {
    const c = await funChangeRole({ idUser: user })
    if (c.success) return window.location.href = "/dashboard";
  }

  return (
    <>
      <Menu shadow="md" width={300}>
        <Menu.Target>
          <Box pt={8} style={{ cursor: "pointer" }}>
            <FaUserCircle size="20" />
          </Box>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item onClick={() => router.push("/dashboard/profile")}>
            <Box>
              <Group>
                <HiOutlineUserCircle size="20" />
                <Text>Profile</Text>
              </Group>
            </Box>
          </Menu.Item>
          {
            listRole && listRole.map((item: any, i: any) => (
              <Menu.Item key={i} onClick={() => changingRole({ user: item.id })}>
                <Box>
                  <Group>
                    <PiUserSwitch size="20" />
                    <Text>Switch to {item.role}</Text>
                  </Group>
                </Box>
              </Menu.Item>
            ))
          }

          <Menu.Item onClick={() => setOpenLogout(true)}>
            <Box>
              <Group>
                <Group>
                  <AiOutlineLogout size="20" />
                  <Text color="red" >
                    Logout
                  </Text>
                </Group>
              </Group>
            </Box>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Modal
        size={"md"}
        opened={valOpenLogout}
        onClose={() => setOpenLogout(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalLogout />
      </Modal>
    </>
  );
}
