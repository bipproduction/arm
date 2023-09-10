import { Menu, Button, Text, Box, Group, Avatar, Stack } from "@mantine/core";
import { IoMdNotifications } from "react-icons/io";

export default function Notification() {
  return (
    <Menu shadow="md" width={300}>
      <Menu.Target>
        <Box pt={8} style={{cursor: "pointer"}}>
          <IoMdNotifications size="20" />
        </Box>
      </Menu.Target>

      <Menu.Dropdown>
        <Text pl={15} pt={10} fw={700}>Notification</Text>
        <Menu.Item pt={20}>
          <Box>
            <Group >
              <Avatar src="#" radius="xl" />
              <Stack spacing={5}>
                <Text size="sm" weight={700} sx={{ lineHeight: 1 }}>
                  USER 1
                </Text>
                <Text color="dark.4">Sent you the file</Text>
              </Stack>
            </Group>
          </Box>
        </Menu.Item>
        <Menu.Item pt={20}>
          <Box>
            <Group >
              <Avatar src="#" radius="xl" />
              <Stack spacing={5}>
                <Text size="sm" weight={700} sx={{ lineHeight: 1 }}>
                  USER 2
                </Text>
                <Text color="dark.4">Sent you the file</Text>
              </Stack>
            </Group>
          </Box>
        </Menu.Item>
        <Menu.Item pt={20}>
          <Box>
            <Group >
              <Avatar src="#" radius="xl" />
              <Stack spacing={5}>
                <Text size="sm" weight={700} sx={{ lineHeight: 1 }}>
                  USER 3
                </Text>
                <Text color="dark.4">Sent you the file</Text>
              </Stack>
            </Group>
          </Box>
        </Menu.Item>
        <Menu.Divider />
        <Box p={15}>
          <Text fw={700} color="blue"  style={{cursor: "pointer"}}>View All</Text>
        </Box>
      </Menu.Dropdown>
    </Menu>
  );
}
