"use client";

import { useFocusTrap } from "@mantine/hooks";
import { useAtom } from "jotai";
import { isModalCreateUser } from "../val/isModaluser";
import { useState } from "react";
import toast from "react-simple-toasts";
import {
  Box,
  Button,
  Grid,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { ButtonBack, COLOR } from "@/modules/_global";

export default function AddUser() {
  const focusTrapRef = useFocusTrap();
  const [valOpenModal, setOpenModal] = useAtom(isModalCreateUser);
  const [dataUser, setDataUser] = useState({
    name: "",
    idImage: "",
    idClient: "",
    email: "",
    phone: "",
    address: "",
    idUserRole: "",
    idProfile: "",
    verificationCode: "",
    expiresTime: "",
    password: "",
  });

  function validasiCreateUser() {
    if (Object.values(dataUser).includes(""))
      return toast("The form cannot be empty", { theme: "dark" });
    setOpenModal(true);
  }

  return (
    <>
      <Stack>
        <ButtonBack />
      </Stack>
      <Box pt={20} ref={focusTrapRef}>
        <Box
          sx={{
            border: `1px solid ${COLOR.AbuMuda}`,
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Grid>
            <Grid.Col md={6} xl={6} lg={6} sm={6}>
              <Stack>
                <Text> Add Profile</Text>
                <TextInput
                  value={dataUser.name}
                  placeholder="Name"
                  onChange={(val) =>
                    setDataUser({
                      ...dataUser,
                      name: val.target.value,
                    })
                  }
                />
                <Select
                  value={dataUser.idImage}
                  placeholder="id image"
                  data={[]}
                />
                <Select
                  value={dataUser.idClient}
                  placeholder="id client"
                  data={[]}
                />
                <TextInput
                  value={dataUser.email}
                  placeholder="email"
                  onChange={(val) =>
                    setDataUser({
                      ...dataUser,
                      email: val.target.value,
                    })
                  }
                />
                <TextInput
                  value={dataUser.phone}
                  placeholder="phone"
                  onChange={(val) =>
                    setDataUser({
                      ...dataUser,
                      phone: val.target.value,
                    })
                  }
                />
                <TextInput
                  value={dataUser.address}
                  placeholder="address"
                  onChange={(val) =>
                    setDataUser({
                      ...dataUser,
                      address: val.target.value,
                    })
                  }
                />
              </Stack>
            </Grid.Col>
            <Grid.Col md={6} xl={6} lg={6} sm={6}>
              <Stack pt={40}>
                <Select
                  value={dataUser.idUserRole}
                  placeholder="id user role"
                  data={[]}
                />
                <Select
                  value={dataUser.idProfile}
                  placeholder="id profile"
                  data={[]}
                />
                <TextInput
                  value={dataUser.verificationCode}
                  placeholder="verificationCode"
                  onChange={(val) =>
                    setDataUser({
                      ...dataUser,
                      verificationCode: val.target.value,
                    })
                  }
                />
                <TextInput
                  value={dataUser.expiresTime}
                  placeholder="expiresTime"
                  onChange={(val) =>
                    setDataUser({
                      ...dataUser,
                      expiresTime: val.target.value,
                    })
                  }
                />
                <TextInput
                  value={dataUser.password}
                  placeholder="password"
                  onChange={(val) =>
                    setDataUser({
                      ...dataUser,
                      password: val.target.value,
                    })
                  }
                />

                <Button color="gray.7" onClick={validasiCreateUser}>
                  SUBMIT
                </Button>
              </Stack>
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
