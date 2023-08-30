"use client"
import { atomWithStorage } from "jotai/utils";

export const OtpView = atomWithStorage<any>("otp", "")
export const RandomNew = atomWithStorage<any>("random", Math.floor(Math.random() * 1000) + 1000)