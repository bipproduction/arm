import { Dashboard, LoadingDashboard } from "@/modules/dashboard";
import { Suspense } from "react";

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Dashboard>
                <Suspense fallback={<LoadingDashboard />}>
                    {children}
                </Suspense>
            </Dashboard>
        </>
    );



}