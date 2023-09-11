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

export default function ProfileHeader() {
  const [valOpenLogout, setOpenLogout] = useAtom(isLogout);
  const router = useRouter();
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
                <FaUserCircle size="20" />
                <Text>Profile</Text>
              </Group>
            </Box>
          </Menu.Item>
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
