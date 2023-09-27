"use client";

import { useFocusTrap, useShallowEffect } from "@mantine/hooks";
import { useAtom } from "jotai";
import { isModalCreateUser, valData } from "../val/isModaluser";
import { useState } from "react";
import toast from "react-simple-toasts";
import { useForm } from "@mantine/form";
import {
  Box,
  Button,
  FileInput,
  Grid,
  Input,
  Modal,
  MultiSelect,
  NativeSelect,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { ButtonBack, COLOR } from "@/modules/_global";
import { funGetAllClient } from "../..";
import { funGetDataClient } from "../../client/fun/get_data_client";
import { useRouter } from "next/navigation";
import ModalKonfirmasihAddUser from "../components/modal_konfirmasih_add_user";
import { funGetDatauserRole } from "@/modules/_global/fun/get_data_user_role";
import { MdClose } from "react-icons/md";
import { ButtonGroup } from "@mantine/core/lib/Button/ButtonGroup/ButtonGroup";

export default function AddUser({ client, role }: { client: any; role: any }) {
  const [listClient, setListClient] = useState<any[]>(client);
  const [listRole, setListRole] = useState<any[]>(role);
  const router = useRouter();
  const [valClose, setClose] = useState("");
  const [valFixClose, setFixClose] = useState("");
  const [value, setValue] = useAtom(valData)
  const focusTrapRef = useFocusTrap();
  const [valOpenModal, setOpenModal] = useAtom(isModalCreateUser);
  const [dataUser, setDataUser] = useState({
    name: "",
    idClient: "",
    email: "",
    phone: "",
    address: "",
    idUserRole: "",
    // idProfile: "",
    // verificationCode: "",
    // expiresTime: "",
    // password: "",
  });
  // const [dataUser, setDataUser] = useAtom(valData)



  function validasiCreateUser() {
    if (Object.values(dataUser).includes(""))
      return toast("The form cannot be empty", { theme: "dark" });
    setOpenModal(true);
  }

  async function changeRole({ category }: { category: string }) {
    const dataRole = await funGetDatauserRole({ category: category });
    setListRole(dataRole);
  }

  async function cekClient({ val }: { val: any }) {
    setDataUser({
      ...dataUser,
      idClient: val,
    });
    let dataRole

    // if (val != "") {
    //   changeRole({ category: "CLIENT" });
    // } else {
    //   changeRole({ category: "AGENCY" });
    // }

     if (val != "") {
      dataRole = await funGetDatauserRole({ category: 'CLIENT' });
    } else {
      dataRole = await funGetDatauserRole({ category: 'AGENCY' });
    }

    setListRole(dataRole);
  }



  return (
    <>
      <Stack>
        <ButtonBack />
      </Stack>
      {/* <pre>{JSON.stringify(listRole, null, 1)}</pre> */}
      <Box pt={20} ref={focusTrapRef}>
        <Grid>
          <Grid.Col md={6} xl={6} lg={6} sm={10}>
            <Box
              sx={{
                border: `1px solid ${COLOR.AbuMuda}`,
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Stack>
                <Text> Add User</Text>
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
                  data={listClient.map((cl) => ({
                    value: cl.id,
                    label: cl.name,
                  }))}
                  radius="sm"
                  w={"100%"}
                  onChange={(val: any) => {
                    // dataUser.idClient = val!;
                    cekClient({ val: val });
                  }}
                  value={dataUser.idClient}
                  searchable
                  placeholder="Client"
                  rightSection={
                    <Button.Group mr={23}>
                      <Button
                        variant="subtle"
                        color="gray.7"
                        onClick={(v) => {
                          cekClient({ val: "" });
                        }}
                      >
                        <MdClose size="21" />
                      </Button>
                    </Button.Group>
                  }
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
                {/* <Select
                  // value={dataUser.idUserRole}
                  placeholder="User role"
                  data={listRole.map((ag) => ({
                    value: ag.id,
                    label: ag.role,
                  }))}
                  onChange={(val) => {
                    dataUser.idUserRole = val!;
                  }}
                  searchable
                /> */}
                <MultiSelect
                  placeholder="User role"
                  data={listRole.map((ag) => ({
                    value: ag.id,
                    label: ag.role,
                  }))}
                  searchable
                />

                <Button color="gray.7" 
                // onClick={validasiCreateUser}
                onClick={()=> console.log(dataUser)}
                
                >
                  SUBMIT
                </Button>
              </Stack>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
      <Modal
        size={"md"}
        opened={valOpenModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        {/* <ModalKonfirmasiAddBrand
          data={dataBrand}
          onSuccess={() => setDataBrand({ name: "" })}
        /> */}
        <ModalKonfirmasihAddUser data={dataUser} />
      </Modal>
    </>
  );
}
