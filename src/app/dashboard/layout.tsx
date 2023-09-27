import { Dashboard } from "@/modules/dashboard";
import { Suspense } from "react";
import Loading from "./loading";
import { cookies } from "next/headers";
import _ from "lodash";
import { redirect } from "next/navigation";
import { unsealData } from "iron-session";
import { funGetListRole } from "@/modules/profile";


export const metadata = {
    title: 'ARM - Dashboard',
    description: 'Activation Resources Management',
}

export default async function Layout({ children }: { children: React.ReactNode }) {
    const c = cookies().get("_tkn")
    if (!c || !c.value || _.isEmpty(c.value)) return redirect('../')
    const dataCookies = await unsealData(c.value, { password: process.env.PWD as string })
    const data = await funGetListRole({ profile: _.toString(dataCookies.idProfile), user: _.toString(dataCookies.idUser) })
    return (
        <>
            <Dashboard dataLogin={dataCookies} dataRole={data}>
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            </Dashboard>
        </>
    );



}