"use client";

import { useFocusTrap, useShallowEffect } from "@mantine/hooks";
import { useAtom } from "jotai";
import { isModalCreateUser, valData } from "../val/isModaluser";
import { useState } from "react";
import toast from "react-simple-toasts";
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
import _ from "lodash";

export default function AddUser({ client, role }: { client: any; role: any }) {
  const initialDataUser = {
    name: "",
    idClient: null,
    email: "",
    phone: "",
    address: "",
    idUserRole: [""],
  }

  const [listClient, setListClient] = useState<any[]>(client);
  const [listRole, setListRole] = useState<any[]>(role);
  const router = useRouter();
  const [valClose, setClose] = useState("");
  const [valFixClose, setFixClose] = useState("");
  const [value, setValue] = useAtom(valData)
  const focusTrapRef = useFocusTrap();
  const [valOpenModal, setOpenModal] = useAtom(isModalCreateUser);
  const [dataUser, setDataUser] = useState(initialDataUser);



  function validasiCreateUser() {
    if (Object.values([dataUser.email, dataUser.address, dataUser.name, dataUser.phone]).includes(""))
      return toast("The form cannot be empty", { theme: "dark" });
    if (dataUser.idUserRole.length < 1 || (dataUser.idUserRole.length == 1 && dataUser.idUserRole[0] == ""))
      return toast("User role cannot be empty", { theme: "dark" });
    setOpenModal(true);
  }


  async function cekClient({ val }: { val: any }) {
    setDataUser({
      ...dataUser,
      idClient: val,
    });
    let dataRole


    if (val != "" && !_.isNull(val)) {
      dataRole = await funGetDatauserRole({ category: 'CLIENT' });
      console.log()
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
                  rightSection={dataUser.idClient && (
                    <Button.Group mr={23}>
                      <Button
                        variant="transparent"
                        color="gray.7"
                        onClick={(v) => {
                          cekClient({ val: null });
                        }}
                      >
                        <MdClose size="21" />
                      </Button>
                    </Button.Group>
                  )

                  }
                />
                <TextInput
                  value={dataUser.email}
                  placeholder="Email"
                  onChange={(val) =>
                    setDataUser({
                      ...dataUser,
                      email: val.target.value,
                    })
                  }
                />
                <TextInput
                  value={dataUser.phone}
                  placeholder="Phone"
                  onChange={(val) =>
                    setDataUser({
                      ...dataUser,
                      phone: val.target.value,
                    })
                  }
                />
                <TextInput
                  value={dataUser.address}
                  placeholder="Address"
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
                  placeholder="User Role"
                  data={listRole.map((ag) => ({
                    value: ag.id,
                    label: ag.role,
                  }))}
                  value={
                    !dataUser
                      ? []
                      : !dataUser.idUserRole
                        ? []
                        : dataUser.idUserRole.map((v: any) => v)
                  }
                  onChange={(value) => {
                    setDataUser({ ...dataUser, idUserRole: value })
                  }}
                />

                <Button color="gray.7"
                  onClick={validasiCreateUser}
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
        <ModalKonfirmasihAddUser data={dataUser} onSuccess={(val) => {
          cekClient({ val: null })
          setDataUser({ ...initialDataUser })
        }} />
      </Modal>
    </>
  );
}
