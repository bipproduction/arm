'use client'
import { atomWithStorage } from "jotai/utils";
export const isMobile = atomWithStorage("is_mobile", false);