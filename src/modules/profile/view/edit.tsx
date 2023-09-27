"use client";
import React, { useRef, useState } from "react";
import { ButtonBack, funUploadImg } from "@/modules/_global";
import { Avatar, Box, Button, Center, Divider, Grid, Group, Modal, Stack, Text, TextInput, rem } from "@mantine/core";
import { AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { isModalProfile } from "../val/isModalProfile";
import ModalProfile from "../components/modal_profile";
import toast from "react-simple-toasts";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import _ from "lodash";
import { funUpdProfileImg } from "../fun/upd_profile.img";

export default function EditView({ data }: { data: any }) {
  const router = useRouter();
  const [hasilGambar, setHasilGambar] = useState(`/img/user/${data.idImage}.${data.extension}`)
  const [valOpenProfile, setOpenProfile] = useAtom(isModalProfile);
  const [dataUser, setDataUser] = useState(data)
  const [loading, setLoading] = useState(false)
  const openRef = useRef<() => void>(null);

  function validasiProfile() {
    if (Object.values(dataUser).includes(""))
      return toast("The form cannot be empty", { theme: "dark" });
    setOpenProfile(true)
  }
  return (
    <>
      <Box pt={20}>
        <Box
          sx={{
            border: "1px solid #CED4DA",
            borderRadius: 20,
            padding: 30,
          }}
          pt={40}
        >
          <Text fw={700} fz={20} color="gray.6" pb={30}>
            Personal Data
          </Text>
          <Center>
            <Avatar
              size={130}
              radius={100}
              src={hasilGambar}
              alt={dataUser.name}
              color="dark"
            />
          </Center>
          <Center pt={10}>
            <Dropzone
              openRef={openRef}
              loading={loading}
              onDrop={async (files) => {
                setLoading(true)
                if (!files || _.isEmpty(files)) return toast("tidak ada yang dipilih")
                const fd = new FormData()
                fd.append('file', files[0])

                const apa = await funUploadImg(fd)
                if (apa.success) {
                  setHasilGambar(`/img/user/${apa.data.id}.${apa.data.extension}`)
                  funUpdProfileImg({ id: dataUser.id, img: apa.data.id })
                  return setLoading(false), toast('Success', { theme: "dark" })
                }
              }}
              onReject={(files) => console.log('rejected files', files)}
              // maxSize={3 * 1024 ** 2}
              accept={IMAGE_MIME_TYPE}
              activateOnClick={false}
              styles={{ inner: { pointerEvents: 'all' } }}
            >
              <Group position="center">
                <Button color="gray.5" radius="xl" onClick={() => openRef.current?.()}>Edit Image Profile</Button>
              </Group>
            </Dropzone>
          </Center>
          <Box pt={40}>
            <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
              <Grid.Col md={6} lg={6}>
                <Stack pt={20}>
                  <Box>
                    <Text fw={700} fz={14}>
                      NAME
                    </Text>
                    <TextInput placeholder="Name" value={dataUser.name} radius={20} onChange={(val) => {
                      setDataUser({
                        ...dataUser, name: val.target.value
                      })
                    }} />
                  </Box>
                  <Box pt={10}>
                    <Text fw={700} fz={14}>
                      EMAIL
                    </Text>
                    <TextInput
                      placeholder="Email"
                      radius={20}
                      value={dataUser.email}
                      onChange={(val) => {
                        setDataUser({
                          ...dataUser, email: val.target.value
                        })
                      }}
                    />
                  </Box>
                </Stack>
              </Grid.Col>
              <Grid.Col md={6} lg={6}>
                <Stack pt={20}>
                  <Box>
                    <Text fw={700} fz={14}>
                      NO. PHONE
                    </Text>
                    <TextInput placeholder="phone number" value={dataUser.phone} radius={20} onChange={(val) => {
                      setDataUser({
                        ...dataUser, phone: val.target.value
                      })
                    }} />
                  </Box>
                  <Box pt={10}>
                    <Text fw={700} fz={14}>
                      ADDRESS
                    </Text>
                    <TextInput
                      placeholder="Address"
                      radius={20}
                      value={dataUser.address}
                      onChange={(val) => {
                        setDataUser({
                          ...dataUser, address: val.target.value
                        })
                      }}
                    />
                  </Box>
                </Stack>
              </Grid.Col>
            </Grid>
            <Grid pt={30}>
              <Grid.Col md={6} lg={6}>
                <Button
                  fullWidth
                  variant="outline"
                  color="gray"
                  radius="xl"
                  onClick={() => router.push("/dashboard/profile")}
                >
                  CANCEL
                </Button>
              </Grid.Col>
              <Grid.Col md={6} lg={6}>
                <Button
                  radius={"xl"}
                  color="gray.7"
                  onClick={() => {
                    validasiProfile()
                  }}
                  fullWidth
                >
                  SAVE
                </Button>
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Modal
        size={"md"}
        opened={valOpenProfile}
        onClose={() => setOpenProfile(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalProfile data={dataUser} />
      </Modal>
    </>

  );
}
