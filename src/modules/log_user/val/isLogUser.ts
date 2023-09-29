"use client"

import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { funGetAllLogUser } from "../fun/log-user-get-all";

export const _dataLogUser = atomWithStorage<any[]>(
    "_log_user",
    []
);

export const _dataSearchTglAwal = atom("");
export const _dataSearchTglAkhir = atom("");
export const _dataSearchLogUser = atom("");
