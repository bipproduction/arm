import { Dashboard } from "@/modules/dashboard";
import { Suspense } from "react";
import Loading from "./loading";


export const metadata = {
    title: 'ARM - Dashboard',
    description: 'Activation Resources Management',
}

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Dashboard>
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            </Dashboard>
        </>
    );



}