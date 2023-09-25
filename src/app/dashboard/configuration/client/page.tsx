import { ListClient, funGetAllClient } from "@/modules/configuration/client";

export default async function Page() {
    const data = await funGetAllClient({ page: 1 });
    return (
        <><ListClient data={data} /></>
    )
}