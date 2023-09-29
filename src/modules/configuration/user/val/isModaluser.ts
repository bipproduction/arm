"use client"

import { atom } from "jotai"

export const isModalCreateUser = atom(false)
export const isModalUserConf = atom(false)
export const valData = atom({
    name: "",
    idClient: "",
    email: "",
    phone: "",
    address: "",
    idUserRole: "",
})