'use client'

import { ButtonBack, COLOR, PageHeader } from "@/modules/_global"
import { Box, Divider, Group, Image, Text } from "@mantine/core"

export function DetailAssetsCheckout({ id }: { id: string }) {
    let status
    if (id=="123") status = "DELIVERED"
    if (id=="111") status = "DECLINED"
    if (id=="222") status = "CANCELED"
    if (id=="333") status = "REVOKED"

    return (
        <>
            <ButtonBack />
            <PageHeader title={"ASSETS CHECKOUT"} date="23 February 2023" number={id} status={status} />
            <Box pt={20}>
                <Box pt={20}>
                    <Box
                        sx={{
                            backgroundColor: COLOR.AbuMuda,
                            padding: 5,
                            borderRadius: 5,
                        }}
                        px={20}
                        mb={10}
                        py={20}
                    >
                        <Divider
                            mb={5}
                            label={
                                <Text fw={700} fz={17} color="dark.9">
                                    Assets
                                </Text>
                            }
                            size="md"
                            color="dark"
                        />
                        <Box pt={20}>
                            <Box
                                sx={{
                                    backgroundColor: COLOR.AbuAbu,
                                    padding: 20,
                                    borderRadius: 10,
                                }}
                                my={5}
                            >
                                <Group position="apart" mb={10}>
                                    <Group>
                                        <Box>
                                            <Image
                                                src={"/img/meja.jpeg"}
                                                radius={10}
                                                maw={{ base: 100, sm: 200 }}
                                                mx="auto"
                                                alt="img"
                                            />
                                        </Box>
                                        <Box>
                                            <Text fw={700} color="white" fz={{ sm: 20, base: 10 }}>
                                                Item
                                            </Text>
                                            <Text color="gray.5" fz={{ sm: 13, base: 9 }}>
                                                Harmony 2
                                            </Text>
                                            <Text color="gray.5" fz={{ sm: 13, base: 9 }}>
                                                Display
                                            </Text>
                                        </Box>
                                    </Group>
                                    <Group>
                                        <Box>
                                            <Text
                                                fw={700}
                                                fz={{ sm: 40, base: 20 }}
                                                pr={40}
                                                color="white"
                                            >
                                                x2
                                            </Text>
                                        </Box>
                                    </Group>
                                </Group>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}