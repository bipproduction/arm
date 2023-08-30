'use client'

import { useShallowEffect, useViewportSize } from "@mantine/hooks"
import { useAtom } from "jotai"
import { useState } from "react"
import { isMobile } from ".."

export function Pengaman({ children }: { children: any }) {
    const [valMobile, setMobile] = useAtom(isMobile);
    const [client, setClient] = useState(false);
    const { height, width } = useViewportSize();

    useShallowEffect(() => {
        if (window) setClient(true)
    }, [])

    useShallowEffect(() => {
        if (width <= 430) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }, [width])

    if (!client) return <></>
    return <div>
        {children}
    </div>
}